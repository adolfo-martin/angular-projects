"""
MCP Client Examples
===================

This module shows how to create and test MCP clients that can interact 
with your Ollama MCP server.
"""

import asyncio
import json
from typing import Dict, Any, List

class MCPClient:
    """A simple MCP client for testing our Ollama MCP server"""
    
    def __init__(self):
        """Initialize the MCP client"""
        self.tools = []
        
    async def connect_to_server(self, server_command: str):
        """Connect to an MCP server (simulation for training)"""
        print(f"Connecting to MCP server with command: {server_command}")
        # In a real implementation, this would establish a connection
        # to the MCP server process
        
        # Simulate available tools from our Ollama MCP server
        self.tools = [
            {
                "name": "list_models",
                "description": "List all available Ollama models",
                "input_schema": {"type": "object", "properties": {}}
            },
            {
                "name": "generate_text", 
                "description": "Generate text using an Ollama model",
                "input_schema": {
                    "type": "object",
                    "properties": {
                        "model": {"type": "string"},
                        "prompt": {"type": "string"},
                        "options": {"type": "object"}
                    },
                    "required": ["model", "prompt"]
                }
            },
            {
                "name": "chat",
                "description": "Have a conversation with an Ollama model", 
                "input_schema": {
                    "type": "object",
                    "properties": {
                        "model": {"type": "string"},
                        "messages": {"type": "array"}
                    },
                    "required": ["model", "messages"]
                }
            },
            {
                "name": "pull_model",
                "description": "Pull a model from Ollama registry",
                "input_schema": {
                    "type": "object", 
                    "properties": {
                        "model": {"type": "string"}
                    },
                    "required": ["model"]
                }
            }
        ]
        print(f"Connected! Available tools: {[tool['name'] for tool in self.tools]}")
    
    def list_available_tools(self) -> List[Dict[str, Any]]:
        """List all available tools from the MCP server"""
        return self.tools
    
    async def call_tool(self, tool_name: str, arguments: Dict[str, Any]) -> str:
        """Call a tool on the MCP server"""
        print(f"Calling tool: {tool_name} with arguments: {arguments}")
        
        # Simulate tool responses (in real implementation, this would 
        # send a request to the MCP server)
        if tool_name == "list_models":
            return "Available Ollama Models:\n• llama3.2:1b\n• codellama:7b\n• mistral:7b"
        
        elif tool_name == "generate_text":
            model = arguments.get("model", "llama3.2:1b")
            prompt = arguments.get("prompt", "")
            return f"Generated text from {model}: [This would be the actual generated text for prompt: '{prompt}']"
        
        elif tool_name == "chat":
            model = arguments.get("model", "llama3.2:1b")
            messages = arguments.get("messages", [])
            last_message = messages[-1] if messages else {"content": "Hello"}
            return f"Chat response from {model}: [This would be the actual chat response to: '{last_message.get('content')}']"
        
        elif tool_name == "pull_model":
            model = arguments.get("model", "")
            return f"Successfully pulled model: {model}"
        
        else:
            return f"Error: Unknown tool '{tool_name}'"

async def mcp_client_examples():
    """Run MCP client examples"""
    print("=== MCP Client Examples ===\n")
    
    # Create and connect client
    client = MCPClient()
    await client.connect_to_server("python src/ollama_mcp_trainer")
    print()
    
    # Example 1: List available tools
    print("1. Available MCP Tools:")
    tools = client.list_available_tools()
    for tool in tools:
        print(f"   • {tool['name']}: {tool['description']}")
    print()
    
    # Example 2: Call list_models tool
    print("2. Listing Models:")
    response = await client.call_tool("list_models", {})
    print(f"   {response}")
    print()
    
    # Example 3: Generate text
    print("3. Generating Text:")
    response = await client.call_tool("generate_text", {
        "model": "llama3.2:1b",
        "prompt": "What is the capital of France?",
        "options": {"temperature": 0.5}
    })
    print(f"   {response}")
    print()
    
    # Example 4: Chat conversation
    print("4. Chat Conversation:")
    response = await client.call_tool("chat", {
        "model": "llama3.2:1b", 
        "messages": [
            {"role": "user", "content": "Explain Python decorators"}
        ]
    })
    print(f"   {response}")
    print()
    
    # Example 5: Pull a model
    print("5. Pulling a Model:")
    response = await client.call_tool("pull_model", {
        "model": "llama3.2:3b"
    })
    print(f"   {response}")
    print()

class MCPWorkflow:
    """Examples of complete MCP workflows"""
    
    def __init__(self):
        self.client = MCPClient()
    
    async def ai_assistant_workflow(self):
        """Example: Building an AI assistant with MCP"""
        print("=== AI Assistant Workflow ===\n")
        
        await self.client.connect_to_server("python src/ollama_mcp_trainer")
        
        # Step 1: Check available models
        print("Step 1: Checking available models...")
        models_response = await self.client.call_tool("list_models", {})
        print(f"Available models: {models_response}")
        print()
        
        # Step 2: Have a conversation
        print("Step 2: Starting conversation...")
        conversation = [
            {"role": "user", "content": "I'm learning Python. Can you help me understand functions?"}
        ]
        
        response = await self.client.call_tool("chat", {
            "model": "llama3.2:1b",
            "messages": conversation
        })
        print(f"AI Response: {response}")
        print()
        
        # Step 3: Follow-up question
        print("Step 3: Follow-up question...")
        conversation.append({"role": "assistant", "content": response})
        conversation.append({"role": "user", "content": "Can you show me an example of a Python function?"})
        
        response = await self.client.call_tool("chat", {
            "model": "llama3.2:1b",
            "messages": conversation
        })
        print(f"AI Response: {response}")
        print()
    
    async def code_generation_workflow(self):
        """Example: Code generation workflow"""
        print("=== Code Generation Workflow ===\n")
        
        await self.client.connect_to_server("python src/ollama_mcp_trainer")
        
        # Generate different types of code
        code_requests = [
            "Write a Python function to reverse a string",
            "Create a class for a simple calculator",
            "Write a function to read a CSV file with pandas"
        ]
        
        for i, request in enumerate(code_requests, 1):
            print(f"Step {i}: {request}")
            response = await self.client.call_tool("generate_text", {
                "model": "llama3.2:1b",
                "prompt": request,
                "options": {"temperature": 0.3}  # Lower temperature for code
            })
            print(f"Generated code: {response}")
            print()

async def main():
    """Run all MCP client examples"""
    try:
        await mcp_client_examples()
        
        workflow = MCPWorkflow()
        await workflow.ai_assistant_workflow()
        await workflow.code_generation_workflow()
        
    except Exception as e:
        print(f"Error in MCP client examples: {e}")

if __name__ == "__main__":
    print("Starting MCP Client Examples...")
    print("These examples simulate interaction with an MCP server.\n")
    
    asyncio.run(main())
