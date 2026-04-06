"""
Basic Ollama Training Examples
=============================

This module contains examples for getting started with Ollama and MCP servers.
These examples will help you understand how to:
1. Connect to Ollama
2. Work with different models
3. Generate text and have conversations
4. Integrate with MCP (Model Context Protocol)
"""

import asyncio
import ollama
import json
from typing import List, Dict, Any

class OllamaTrainer:
    """A class to help with Ollama training and experimentation"""
    
    def __init__(self, host: str = "http://localhost:11434"):
        """Initialize the Ollama client"""
        self.client = ollama.Client(host=host)
        
    def list_available_models(self) -> List[Dict[str, Any]]:
        """List all available models in Ollama"""
        try:
            response = self.client.list()
            return response.get('models', [])
        except Exception as e:
            print(f"Error listing models: {e}")
            return []
    
    def pull_model(self, model_name: str) -> bool:
        """Pull a model from the Ollama registry"""
        try:
            print(f"Pulling model: {model_name}")
            self.client.pull(model_name)
            print(f"Successfully pulled: {model_name}")
            return True
        except Exception as e:
            print(f"Error pulling model {model_name}: {e}")
            return False
    
    def generate_text(self, model: str, prompt: str, **kwargs) -> str:
        """Generate text using a specific model"""
        try:
            response = self.client.generate(
                model=model,
                prompt=prompt,
                **kwargs
            )
            return response.get('response', '')
        except Exception as e:
            print(f"Error generating text: {e}")
            return ""
    
    def chat_with_model(self, model: str, messages: List[Dict[str, str]]) -> str:
        """Have a conversation with a model"""
        try:
            response = self.client.chat(
                model=model,
                messages=messages
            )
            return response.get('message', {}).get('content', '')
        except Exception as e:
            print(f"Error in chat: {e}")
            return ""
    
    def stream_generation(self, model: str, prompt: str):
        """Stream text generation (useful for long responses)"""
        try:
            stream = self.client.generate(
                model=model,
                prompt=prompt,
                stream=True
            )
            
            full_response = ""
            for chunk in stream:
                response_chunk = chunk.get('response', '')
                print(response_chunk, end='', flush=True)
                full_response += response_chunk
            print()  # New line after streaming
            return full_response
        except Exception as e:
            print(f"Error in streaming: {e}")
            return ""

def basic_examples():
    """Run basic Ollama examples"""
    trainer = OllamaTrainer()
    
    print("=== Ollama Training Examples ===\n")
    
    # Example 1: List models
    print("1. Available Models:")
    models = trainer.list_available_models()
    if models:
        for model in models:
            print(f"   • {model['name']} (Size: {model.get('size', 'Unknown')})")
    else:
        print("   No models found. You may need to pull some models first.")
    print()
    
    # Example 2: Pull a popular model (if not already available)
    model_to_use = "llama3.2:1b"  # Smaller model for training
    print(f"2. Pulling model: {model_to_use}")
    if not any(model_to_use in model['name'] for model in models):
        trainer.pull_model(model_to_use)
    else:
        print(f"   Model {model_to_use} already available")
    print()
    
    # Example 3: Simple text generation
    print("3. Simple Text Generation:")
    prompt = "Explain what machine learning is in simple terms:"
    response = trainer.generate_text(model_to_use, prompt)
    print(f"   Prompt: {prompt}")
    print(f"   Response: {response[:200]}...")  # Show first 200 chars
    print()
    
    # Example 4: Chat conversation
    print("4. Chat Conversation:")
    messages = [
        {"role": "user", "content": "What is Python programming?"},
    ]
    chat_response = trainer.chat_with_model(model_to_use, messages)
    print(f"   User: {messages[0]['content']}")
    print(f"   Assistant: {chat_response[:200]}...")
    print()
    
    # Example 5: Streaming generation (commented out for demo)
    print("5. Streaming Generation (uncomment to try):")
    print("   # trainer.stream_generation(model_to_use, 'Write a short story about AI:')")
    print()

def advanced_examples():
    """Run advanced Ollama examples"""
    trainer = OllamaTrainer()
    
    print("=== Advanced Ollama Examples ===\n")
    
    # Example 1: Custom generation parameters
    print("1. Custom Generation Parameters:")
    prompt = "Write a Python function to calculate fibonacci:"
    response = trainer.generate_text(
        "llama3.2:1b",
        prompt,
        options={
            "temperature": 0.7,
            "max_tokens": 150,
            "top_p": 0.9
        }
    )
    print(f"   Response: {response}")
    print()
    
    # Example 2: Multi-turn conversation
    print("2. Multi-turn Conversation:")
    messages = [
        {"role": "user", "content": "What is MCP?"},
        {"role": "assistant", "content": "MCP stands for Model Context Protocol. It's a protocol for connecting AI models with external tools and data sources."},
        {"role": "user", "content": "How can I use it in Python?"}
    ]
    response = trainer.chat_with_model("llama3.2:1b", messages)
    print(f"   Final response: {response}")
    print()

if __name__ == "__main__":
    print("Starting Ollama Training Examples...")
    print("Make sure Ollama is running on your system!")
    print("Install Ollama from: https://ollama.ai\n")
    
    try:
        basic_examples()
        advanced_examples()
    except Exception as e:
        print(f"Error running examples: {e}")
        print("Make sure Ollama is installed and running!")
