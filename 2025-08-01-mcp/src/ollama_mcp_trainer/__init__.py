import asyncio
import logging
from typing import Any, Sequence

import httpx
import ollama
from mcp.server.models import InitializationOptions
from mcp.server import NotificationOptions, Server
from mcp.server.stdio import stdio_server
from mcp.types import (
    CallToolRequestParams,
    CallToolResult,
    EmptyResult,
    ListToolsResult,
    TextContent,
    Tool,
)
from pydantic import AnyUrl

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ollama-mcp-trainer")

class OllamaMCPServer:
    """MCP Server for Ollama integration and training"""
    
    def __init__(self):
        self.server = Server("ollama-mcp-trainer")
        self.setup_handlers()
        
    def setup_handlers(self):
        """Setup MCP server handlers"""
        
        @self.server.list_tools()
        async def handle_list_tools() -> ListToolsResult:
            """List available tools"""
            return ListToolsResult(
                tools=[
                    Tool(
                        name="greet",
                        description="Say hello to someone",
                        inputSchema={
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "Name of the person to greet",
                                },
                            },
                            "required": ["name"],
                        },
                    ),
                    Tool(
                        name="calculate",
                        description="Perform simple math calculations",
                        inputSchema={
                            "type": "object",
                            "properties": {
                                "operation": {
                                    "type": "string",
                                    "description": "Math operation (add, subtract, multiply, divide)",
                                },
                                "a": {"type": "number", "description": "First number"},
                                "b": {"type": "number", "description": "Second number"},
                            },
                            "required": ["operation", "a", "b"],
                        },
                    ),
                    Tool(
                        name="list_models",
                        description="List all available Ollama models",
                        inputSchema={
                            "type": "object",
                            "properties": {},
                        },
                    ),
                    Tool(
                        name="generate_text",
                        description="Generate text using an Ollama model",
                        inputSchema={
                            "type": "object",
                            "properties": {
                                "model": {
                                    "type": "string",
                                    "description": "Name of the Ollama model to use",
                                },
                                "prompt": {
                                    "type": "string",
                                    "description": "Text prompt for generation",
                                },
                                "options": {
                                    "type": "object",
                                    "description": "Additional generation options",
                                    "properties": {
                                        "temperature": {"type": "number"},
                                        "max_tokens": {"type": "integer"},
                                    },
                                },
                            },
                            "required": ["model", "prompt"],
                        },
                    ),
                    Tool(
                        name="pull_model",
                        description="Pull a model from Ollama registry",
                        inputSchema={
                            "type": "object",
                            "properties": {
                                "model": {
                                    "type": "string",
                                    "description": "Name of the model to pull (e.g., 'llama2', 'codellama')",
                                },
                            },
                            "required": ["model"],
                        },
                    ),
                    Tool(
                        name="chat",
                        description="Have a conversation with an Ollama model",
                        inputSchema={
                            "type": "object",
                            "properties": {
                                "model": {
                                    "type": "string", 
                                    "description": "Name of the Ollama model to use",
                                },
                                "messages": {
                                    "type": "array",
                                    "description": "List of chat messages",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "role": {"type": "string"},
                                            "content": {"type": "string"},
                                        },
                                    },
                                },
                            },
                            "required": ["model", "messages"],
                        },
                    ),
                ]
            )

        @self.server.call_tool()
        async def handle_call_tool(
            name: str, arguments: dict[str, Any] | None
        ) -> CallToolResult:
            """Handle tool calls"""
            
            if arguments is None:
                arguments = {}
                
            try:
                if name == "greet":
                    return await self._greet(arguments)
                elif name == "calculate":
                    return await self._calculate(arguments)
                elif name == "list_models":
                    return await self._list_models()
                elif name == "generate_text":
                    return await self._generate_text(arguments)
                elif name == "pull_model":
                    return await self._pull_model(arguments)
                elif name == "chat":
                    return await self._chat(arguments)
                else:
                    raise ValueError(f"Unknown tool: {name}")
                    
            except Exception as e:
                logger.error(f"Error in tool {name}: {str(e)}")
                return CallToolResult(
                    content=[TextContent(type="text", text=f"Error: {str(e)}")]
                )

    async def _greet(self, arguments: dict[str, Any]) -> CallToolResult:
        """Greet someone"""
        name = arguments.get("name", "World")
        message = f"Hello, {name}! Welcome to our MCP server! 👋"
        
        return CallToolResult(
            content=[TextContent(type="text", text=message)]
        )

    async def _calculate(self, arguments: dict[str, Any]) -> CallToolResult:
        """Perform calculations"""
        operation = arguments.get("operation")
        a = arguments.get("a")
        b = arguments.get("b")
        
        if operation == "add":
            result = a + b
        elif operation == "subtract":
            result = a - b
        elif operation == "multiply":
            result = a * b
        elif operation == "divide":
            if b == 0:
                return CallToolResult(
                    content=[TextContent(type="text", text="Error: Cannot divide by zero")]
                )
            result = a / b
        else:
            return CallToolResult(
                content=[TextContent(type="text", text=f"Error: Unknown operation '{operation}'")]
            )
        
        message = f"{a} {operation} {b} = {result}"
        return CallToolResult(
            content=[TextContent(type="text", text=message)]
        )

    async def _list_models(self) -> CallToolResult:
        """List available Ollama models"""
        try:
            client = ollama.Client()
            models = client.list()
            
            model_list = []
            for model in models.get('models', []):
                model_info = f"• {model['name']} (Size: {model.get('size', 'Unknown')})"
                model_list.append(model_info)
            
            content = "Available Ollama Models:\n" + "\n".join(model_list)
            
            return CallToolResult(
                content=[TextContent(type="text", text=content)]
            )
        except Exception as e:
            return CallToolResult(
                content=[TextContent(type="text", text=f"Error listing models: {str(e)}")]
            )

    async def _generate_text(self, arguments: dict[str, Any]) -> CallToolResult:
        """Generate text using Ollama"""
        model = arguments["model"]
        prompt = arguments["prompt"]
        options = arguments.get("options", {})
        
        try:
            client = ollama.Client()
            
            response = client.generate(
                model=model,
                prompt=prompt,
                options=options
            )
            
            generated_text = response.get('response', '')
            
            return CallToolResult(
                content=[TextContent(type="text", text=generated_text)]
            )
        except Exception as e:
            return CallToolResult(
                content=[TextContent(type="text", text=f"Error generating text: {str(e)}")]
            )

    async def _pull_model(self, arguments: dict[str, Any]) -> CallToolResult:
        """Pull a model from Ollama registry"""
        model = arguments["model"]
        
        try:
            client = ollama.Client()
            
            # Pull the model
            client.pull(model)
            
            return CallToolResult(
                content=[TextContent(type="text", text=f"Successfully pulled model: {model}")]
            )
        except Exception as e:
            return CallToolResult(
                content=[TextContent(type="text", text=f"Error pulling model {model}: {str(e)}")]
            )

    async def _chat(self, arguments: dict[str, Any]) -> CallToolResult:
        """Chat with an Ollama model"""
        model = arguments["model"]
        messages = arguments["messages"]
        
        try:
            client = ollama.Client()
            
            response = client.chat(
                model=model,
                messages=messages
            )
            
            assistant_message = response.get('message', {}).get('content', '')
            
            return CallToolResult(
                content=[TextContent(type="text", text=assistant_message)]
            )
        except Exception as e:
            return CallToolResult(
                content=[TextContent(type="text", text=f"Error in chat: {str(e)}")]
            )

async def main():
    """Main entry point for the MCP server"""
    server_instance = OllamaMCPServer()
    
    # Run the server using stdio transport
    async with stdio_server() as (read_stream, write_stream):
        await server_instance.server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="ollama-mcp-trainer",
                server_version="0.1.0",
                capabilities=server_instance.server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )

if __name__ == "__main__":
    asyncio.run(main())
