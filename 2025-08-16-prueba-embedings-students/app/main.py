
from pathlib import Path
import csv

import lancedb
from lancedb.embeddings import get_registry
from lancedb.pydantic import LanceModel, Vector

from ollama import Client
import numpy as np

from utils.tokenizer import OllamaTokenizerWrapper


CSV_PATH = Path(__file__).parent / "datosAlumnosCompleto2.csv"
MAX_TOKENS = 8191
tokenizer = OllamaTokenizerWrapper()

def read_csv_to_dicts(csv_path):
	with open(csv_path, encoding="utf-8") as f:
		reader = csv.DictReader(f, delimiter=';')
		return tuple(dict(row) for row in reader)


# Manual chunking using the tokenizer
def chunk_csv_rows(rows, max_tokens=MAX_TOKENS):
	texts = [str(row) for row in rows]
	chunks = []
	current_chunk = []
	current_tokens = 0
	for text in texts:
		tokens = tokenizer.encode(text)
		if current_tokens + len(tokens) > max_tokens and current_chunk:
			# Save current chunk
			chunks.append('\n'.join(current_chunk))
			current_chunk = []
			current_tokens = 0
		current_chunk.append(text)
		current_tokens += len(tokens)
	if current_chunk:
		chunks.append('\n'.join(current_chunk))
	return chunks


def main():
    if False:
        print("Reading CSV and generating tuple of dictionaries...")
        rows = read_csv_to_dicts(CSV_PATH)
        print(f"Loaded {len(rows)} rows.")
        
        print("Chunking rows with Ollama tokenizer (manual logic)...")
        chunks = chunk_csv_rows(rows)
        print(f"Generated {len(chunks)} chunks.")
        
        # for i, chunk in enumerate(chunks):
        # 	print(f"Chunk {i+1}: {chunk[:100]}...")

        createVectorialDatabaseAndTable(chunks)

    # query_text = "movies from 1990"
    # execute_query_on_database(query_text)

    client = Client()
    table = init_db()
    query_text = "According to the information provided to you, how many people are in the E1Ab group?"
    query_vector = client.embeddings(model="nomic-embed-text", prompt=query_text).embedding
    context = get_context(query_vector, table)
    messages = [{"role": "user", "content": query_text}]
    response = get_chat_response(client, messages, context)
    print(response)


def createVectorialDatabaseAndTable(chunks):
    db = lancedb.connect("data/lancedb")

    # Prepare data for LanceDB
    client = Client()
    # texts = [chunk.text for chunk in chunks]
    texts = chunks
    # Generate embeddings for all chunks
    vectors = [client.embeddings(model="nomic-embed-text", prompt=text).embedding for text in texts]

    # Prepare metadata
    metadatas = []
    for chunk in chunks:
        meta = {
            "filename": "datosAlumnosCompleto2.csv",
            "page_numbers": [0] or None,
            "title": "Datos Alumnos Completo",
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


def get_context(query: str, table, num_results: int = 1) -> str:
    """Search the database for relevant context.

    Args:
        query: User's question
        table: LanceDB table object
        num_results: Number of results to return

    Returns:
        str: Concatenated context from relevant chunks with source information
    """
    # Increase the number of results to provide more context to the model
    results = table.search(query).limit(5).to_pandas()
    context_lines = ["List of students:"]
    import ast
    for _, row in results.iterrows():
        text = row['text']
        for line in text.split('\n'):
            line = line.strip()
            if not line:
                continue
            try:
                student = ast.literal_eval(line)
            except Exception:
                student = line
            if isinstance(student, dict):
                nombre = student.get('Nombre alumno', '')
                grupo = student.get('Grupo', '')
                numero = student.get('Número', '')
                formatted = f"Student {nombre} belongs to group {grupo} and has the number {numero}."
            else:
                formatted = str(student)
            context_lines.append(formatted)
    return '\n'.join(context_lines)


def get_chat_response(client, messages, context: str) -> str:
    """Get streaming response from Ollama API.

    Args:
        messages: Chat history
        context: Retrieved context from database

    Returns:
        str: Model's response
    """
    system_prompt = f"""
You are an assistant who answers ONLY using context information.
The context is a list of students with names, groups, and numbers.
If you are asked how many students are in a group, count ONLY those listed and answer ONLY with the number.

Example:
Question: How many students are in group E1Ab?
Context:
Student Ana belongs to group E1Ab and has the number 1.
Student Luis belongs to group E1Ab and has the number 2.
Student Marta belongs to group E1Ac and has the number 3.
Answer: 2

Real context:
{context}
"""

    # print(context)

    messages_with_context = [{"role": "system", "content": system_prompt}, *messages]


    # Ollama expects a list of messages with 'role' and 'content'
    # We'll use the 'client.chat' method from the Ollama Python SDK
    response_chunks = client.chat(
        model="llama3:8b",
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