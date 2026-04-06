"""
MCP Client Communication Examples
=================================

This module demonstrates different ways external applications can communicate 
with MCP servers, including the JSON-RPC protocol used by MCP.
"""

import asyncio
import json
import subprocess
import sys
from typing import Dict, Any, List
import uuid

class MCPJSONRPCClient:
    """
    A JSON-RPC client for communicating with MCP servers via STDIO.
    This demonstrates the actual protocol used by MCP.
    """
    
    def __init__(self, server_command: List[str]):
        """Initialize with the command to start the MCP server"""
        self.server_command = server_command
        self.process = None
        self.request_id = 0
    
    async def start_server(self):
        """Start the MCP server process"""
        print(f"🚀 Starting MCP server: {' '.join(self.server_command)}")
        
        self.process = await asyncio.create_subprocess_exec(
            *self.server_command,
            stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        
        # Initialize the MCP session
        await self._initialize()
        print("✅ MCP server started and initialized")
    
    async def _initialize(self):
        """Initialize the MCP session"""
        init_request = {
            "jsonrpc": "2.0",
            "id": self._next_id(),
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {
                    "tools": {}
                },
                "clientInfo": {
                    "name": "python-mcp-client",
                    "version": "1.0.0"
                }
            }
        }
        
        response = await self._send_request(init_request)
        
        # Send initialized notification
        initialized_notification = {
            "jsonrpc": "2.0",
            "method": "notifications/initialized"
        }
        
        await self._send_notification(initialized_notification)
    
    def _next_id(self) -> int:
        """Get next request ID"""
        self.request_id += 1
        return self.request_id
    
    async def _send_request(self, request: Dict[str, Any]) -> Dict[str, Any]:
        """Send a JSON-RPC request and wait for response"""
        if not self.process:
            raise RuntimeError("Server not started")
        
        # Send request
        request_json = json.dumps(request) + "\n"
        self.process.stdin.write(request_json.encode())
        await self.process.stdin.drain()
        
        # Read response
        response_line = await self.process.stdout.readline()
        response = json.loads(response_line.decode().strip())
        
        return response
    
    async def _send_notification(self, notification: Dict[str, Any]):
        """Send a JSON-RPC notification (no response expected)"""
        if not self.process:
            raise RuntimeError("Server not started")
        
        notification_json = json.dumps(notification) + "\n"
        self.process.stdin.write(notification_json.encode())
        await self.process.stdin.drain()
    
    async def list_tools(self) -> List[Dict[str, Any]]:
        """List available tools from the MCP server"""
        request = {
            "jsonrpc": "2.0",
            "id": self._next_id(),
            "method": "tools/list"
        }
        
        response = await self._send_request(request)
        
        if "error" in response:
            raise Exception(f"Error listing tools: {response['error']}")
        
        return response.get("result", {}).get("tools", [])
    
    async def call_tool(self, tool_name: str, arguments: Dict[str, Any]) -> str:
        """Call a specific tool on the MCP server"""
        request = {
            "jsonrpc": "2.0",
            "id": self._next_id(),
            "method": "tools/call",
            "params": {
                "name": tool_name,
                "arguments": arguments
            }
        }
        
        response = await self._send_request(request)
        
        if "error" in response:
            raise Exception(f"Error calling tool {tool_name}: {response['error']}")
        
        # Extract text content from response
        result = response.get("result", {})
        content = result.get("content", [])
        
        if content and len(content) > 0:
            return content[0].get("text", "No text content")
        
        return "No response content"
    
    async def stop_server(self):
        """Stop the MCP server"""
        if self.process:
            self.process.terminate()
            await self.process.wait()
            print("🛑 MCP server stopped")

async def demonstrate_mcp_communication():
    """Demonstrate how to communicate with an MCP server"""
    print("🔌 MCP Communication Demonstration")
    print("=" * 50)
    
    # Path to your MCP server
    server_command = [
        sys.executable, "-m", "src.ollama_mcp_trainer"
    ]
    
    client = MCPJSONRPCClient(server_command)
    
    try:
        # Start the server
        await client.start_server()
        
        # List available tools
        print("\n📋 Listing available tools...")
        tools = await client.list_tools()
        
        print(f"Found {len(tools)} tools:")
        for tool in tools:
            print(f"   • {tool['name']}: {tool['description']}")
        
        # Call some tools
        print("\n🛠️ Testing tool calls...")
        
        # Test 1: Greet tool
        try:
            response = await client.call_tool("greet", {"name": "External App"})
            print(f"✅ Greet tool: {response}")
        except Exception as e:
            print(f"❌ Greet tool error: {e}")
        
        # Test 2: Calculate tool
        try:
            response = await client.call_tool("calculate", {
                "operation": "add",
                "a": 15,
                "b": 27
            })
            print(f"✅ Calculate tool: {response}")
        except Exception as e:
            print(f"❌ Calculate tool error: {e}")
        
        # Test 3: List Ollama models (may fail if Ollama not running)
        try:
            response = await client.call_tool("list_models", {})
            print(f"✅ List models: {response[:100]}...")  # Truncate long response
        except Exception as e:
            print(f"❌ List models error: {e}")
        
    except Exception as e:
        print(f"❌ Communication error: {e}")
    
    finally:
        await client.stop_server()

class SimpleWebClient:
    """
    Example of how a web application might communicate with an MCP server
    (This is a simulation - real implementation would need HTTP transport)
    """
    
    def __init__(self):
        self.mcp_client = None
    
    async def handle_user_request(self, user_message: str) -> str:
        """Handle a user request that needs MCP tools"""
        print(f"🌐 Web client received: {user_message}")
        
        # Simulate routing user requests to appropriate MCP tools
        if "calculate" in user_message.lower():
            # Extract numbers and operation from user message
            # This is simplified - real implementation would use NLP
            return await self._handle_calculation(user_message)
        
        elif "greet" in user_message.lower() or "hello" in user_message.lower():
            return await self._handle_greeting(user_message)
        
        else:
            return "I can help you with calculations and greetings!"
    
    async def _handle_calculation(self, message: str) -> str:
        """Handle calculation requests"""
        # Simplified parsing - extract "5 + 3" patterns
        try:
            if "+" in message:
                parts = message.split("+")
                a = float(parts[0].split()[-1])  # Last number before +
                b = float(parts[1].split()[0])   # First number after +
                
                # Call MCP server
                server_command = [sys.executable, "-m", "src.ollama_mcp_trainer"]
                client = MCPJSONRPCClient(server_command)
                
                await client.start_server()
                result = await client.call_tool("calculate", {
                    "operation": "add",
                    "a": a,
                    "b": b
                })
                await client.stop_server()
                
                return f"Calculation result: {result}"
        
        except Exception as e:
            return f"Sorry, I couldn't calculate that: {e}"
        
        return "Please provide a calculation like '5 + 3'"
    
    async def _handle_greeting(self, message: str) -> str:
        """Handle greeting requests"""
        try:
            # Extract name if provided
            name = "there"  # default
            if "i'm" in message.lower():
                name = message.lower().split("i'm")[-1].strip()
            elif "i am" in message.lower():
                name = message.lower().split("i am")[-1].strip()
            
            # Call MCP server
            server_command = [sys.executable, "-m", "src.ollama_mcp_trainer"]
            client = MCPJSONRPCClient(server_command)
            
            await client.start_server()
            result = await client.call_tool("greet", {"name": name})
            await client.stop_server()
            
            return result
        
        except Exception as e:
            return f"Hello! (MCP server error: {e})"

async def demonstrate_web_integration():
    """Demonstrate how a web app might use MCP servers"""
    print("\n🌐 Web Application Integration Demo")
    print("=" * 50)
    
    web_client = SimpleWebClient()
    
    # Simulate user requests
    user_requests = [
        "Hello, I'm Alice!",
        "Can you calculate 15 + 27?",
        "What can you help me with?"
    ]
    
    for request in user_requests:
        print(f"\n👤 User: {request}")
        response = await web_client.handle_user_request(request)
        print(f"🤖 Response: {response}")

async def main():
    """Run all communication examples"""
    print("📡 MCP Server Communication Examples")
    print("=" * 60)
    
    # Example 1: Direct JSON-RPC communication
    await demonstrate_mcp_communication()
    
    # Example 2: Web application integration
    await demonstrate_web_integration()
    
    print("\n" + "=" * 60)
    print("🎯 Summary:")
    print("1. MCP servers use JSON-RPC over STDIO by default")
    print("2. External apps send JSON requests and receive JSON responses")
    print("3. The protocol includes initialization, tool listing, and tool calls")
    print("4. You can build clients in any language that supports JSON-RPC")
    print("5. Web apps can wrap MCP calls behind HTTP APIs")

if __name__ == "__main__":
    asyncio.run(main())
