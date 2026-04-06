from docling.document_converter import DocumentConverter, ConversionResult
from docling.chunking import HybridChunker
from utils.tokenizer import OllamaTokenizerWrapper

import lancedb
from lancedb.embeddings import get_registry
from lancedb.pydantic import LanceModel, Vector

from ollama import Client
import numpy as np


tokenizer = OllamaTokenizerWrapper()  # Load our custom tokenizer for Ollama
MAX_TOKENS = 8191 # text-embedding-3-large's maximum context length


def main():
    if True:
        url_pdf = "https://ayearatthemovies.wordpress.com/wp-content/uploads/2011/01/top-100-movies.pdf"
        print(f"Processing PDF from URL: {url_pdf}")

        try:
            converted_pdf = extract_pdf(url_pdf)
        except Exception as e:
            print(f"Error extracting PDF: {e}")
            return

        if converted_pdf is None:
            print("PDF extraction failed. No data to process.")
            return

        chunked_pdf_text = chunk_pdf_text(converted_pdf)
        print('Number of chunks created:', len(chunked_pdf_text))
        for i, chunk in enumerate(chunked_pdf_text):
            print(f"Chunk {i + 1}: {chunk.text[:10]}...")  # Print first 100 characters of each chunk

        createVectorialDatabaseAndTable(chunked_pdf_text)

    # query_text = "movies from 1990"
    # execute_query_on_database(query_text)

    client = Client()
    table = init_db()
    query_text = "Three movies of 1990"
    query_vector = client.embeddings(model="nomic-embed-text", prompt=query_text).embedding
    context = get_context(query_vector, table)
    messages = [{"role": "user", "content": query_text}]
    response = get_chat_response(client, messages, context)
    print(response)


def extract_pdf(url: str = '') -> ConversionResult:
    try:
        converter = DocumentConverter()
        result = converter.convert(url)
        return result

        # document = result.document
        # markdown_output = document.export_to_markdown()
        # json_output = document.export_to_dict()
        # print(markdown_output)
    except Exception as e:
        raise e
        


def chunk_pdf_text(converted_text: ConversionResult):
    chunker = HybridChunker(
        tokenizer=tokenizer,
        max_tokens=MAX_TOKENS,
        merge_peers=True,
    )

    chunk_iter = chunker.chunk(dl_doc=converted_text.document)
    chunks = list(chunk_iter)
    return chunks


def createVectorialDatabaseAndTable(chunks):
    db = lancedb.connect("data/lancedb")

    # Prepare data for LanceDB
    client = Client()
    texts = [chunk.text for chunk in chunks]
    # Generate embeddings for all chunks
    vectors = [client.embeddings(model="nomic-embed-text", prompt=text).embedding for text in texts]

    # Prepare metadata
    metadatas = []
    for chunk in chunks:
        meta = {
            "filename": chunk.meta.origin.filename,
            "page_numbers": [
                page_no
                for page_no in sorted(
                    set(
                        prov.page_no
                        for item in chunk.meta.doc_items
                        for prov in item.prov
                    )
                )
            ] or None,
            "title": chunk.meta.headings[0] if chunk.meta.headings else None,
        }
        metadatas.append(meta)

    # Create table schema
    data = [
        {
            "text": text,
            "vector": np.array(vector, dtype=np.float32),
            "metadata": metadata
        }
        for text, vector, metadata in zip(texts, vectors, metadatas)
    ]

    # Let LanceDB infer the schema from the data
    table = db.create_table("docling", data=data, mode="overwrite")
    print(table.count_rows())



def execute_query_on_database(query_text):
    uri = "data/lancedb"
    db = lancedb.connect(uri)
    table = db.open_table("docling")
    client = Client()
    query_vector = client.embeddings(model="nomic-embed-text", prompt=query_text).embedding
    result = table.search(np.array(query_vector, dtype=np.float32)).limit(3)
    print(result.to_pandas())




################################################
def init_db():
    """Initialize database connection.

    Returns:
        LanceDB table object
    """
    db = lancedb.connect("data/lancedb")
    return db.open_table("docling")


def get_context(query: str, table, num_results: int = 5) -> str:
    """Search the database for relevant context.

    Args:
        query: User's question
        table: LanceDB table object
        num_results: Number of results to return

    Returns:
        str: Concatenated context from relevant chunks with source information
    """
    results = table.search(query).limit(num_results).to_pandas()
    contexts = []

    for _, row in results.iterrows():
        # Extract metadata
        filename = row["metadata"]["filename"]
        page_numbers = row["metadata"]["page_numbers"]
        title = row["metadata"]["title"]

        # Build source citation
        source_parts = []
        if filename:
            source_parts.append(filename)
        if page_numbers.any():
            source_parts.append(f"p. {', '.join(str(p) for p in page_numbers)}")

        source = f"\nSource: {' - '.join(source_parts)}"
        if title:
            source += f"\nTitle: {title}"

        contexts.append(f"{row['text']}{source}")

    return "\n\n".join(contexts)


def get_chat_response(client, messages, context: str) -> str:
    """Get streaming response from Ollama API.

    Args:
        messages: Chat history
        context: Retrieved context from database

    Returns:
        str: Model's response
    """
    system_prompt = f"""You are a helpful assistant that answers questions based on the provided context.
    Only answer using the exact movie names and years from the context below. Do not invent or guess.
    
    Context:
    {context}
    """

    messages_with_context = [{"role": "system", "content": system_prompt}, *messages]

    # Ollama expects a list of messages with 'role' and 'content'
    # We'll use the 'client.chat' method from the Ollama Python SDK
    response_chunks = client.chat(
        model="llama3.2:3b",
        messages=messages_with_context,
        stream=True,
    )

    # Collect the streamed response into a string and print it
    response_text = ""
    for chunk in response_chunks:
        if hasattr(chunk, 'message') and hasattr(chunk.message, 'content'):
            response_text += chunk.message.content
        elif hasattr(chunk, 'content'):
            response_text += chunk.content

    return response_text




if __name__ == "__main__":
    main()