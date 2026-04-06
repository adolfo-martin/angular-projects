"""
MCP Integration Patterns
========================

This file demonstrates different ways external applications can integrate 
with MCP servers, including various architectural patterns.
"""

import asyncio
import json
import aiohttp
from typing import Dict, Any, List
import threading
import queue
import time

# ============================================================================
# Pattern 1: Direct STDIO Integration (What we just demonstrated)
# ============================================================================

class DirectMCPIntegration:
    """
    Direct integration where your app spawns and communicates with MCP server
    via STDIO. Best for: Desktop apps, CLI tools, local integrations.
    """
    
    async def integrate_with_ai_chat_app(self):
        """Example: AI chat application using MCP tools"""
        print("💬 AI Chat App Integration")
        
        # Your chat app receives user messages
        user_message = "Can you help me calculate the tip for a $50 bill at 18%?"
        
        # App decides this needs calculation tool
        # Spawn MCP server and call tool
        from examples.mcp_communication import MCPJSONRPCClient
        import sys
        
        client = MCPJSONRPCClient([sys.executable, "-m", "src.ollama_mcp_trainer"])
        await client.start_server()
        
        # Calculate tip
        result = await client.call_tool("calculate", {
            "operation": "multiply",
            "a": 50,
            "b": 0.18
        })
        
        await client.stop_server()
        
        print(f"   User: {user_message}")
        print(f"   AI: The 18% tip on $50 is ${result}. Total would be $59.")

# ============================================================================
# Pattern 2: HTTP Wrapper Service
# ============================================================================

class HTTPMCPWrapper:
    """
    HTTP service that wraps MCP server calls. 
    Best for: Web apps, microservices, remote access.
    """
    
    def __init__(self):
        self.mcp_clients = {}  # Pool of MCP connections
    
    async def create_http_api(self):
        """Create HTTP API endpoints that call MCP tools"""
        from aiohttp import web
        
        app = web.Application()
        
        # Endpoint to list available tools
        async def list_tools(request):
            # This would call your MCP server
            tools = [
                {"name": "greet", "description": "Say hello"},
                {"name": "calculate", "description": "Math operations"},
                {"name": "generate_text", "description": "Generate text with Ollama"}
            ]
            return web.json_response({"tools": tools})
        
        # Endpoint to call a tool
        async def call_tool(request):
            data = await request.json()
            tool_name = data.get("tool")
            arguments = data.get("arguments", {})
            
            # Here you would call your MCP server
            # For demo, we'll simulate the response
            if tool_name == "greet":
                result = f"Hello, {arguments.get('name', 'World')}!"
            elif tool_name == "calculate":
                a, b = arguments.get('a', 0), arguments.get('b', 0)
                op = arguments.get('operation', 'add')
                if op == 'add':
                    result = f"{a} + {b} = {a + b}"
                else:
                    result = "Unknown operation"
            else:
                result = "Tool not found"
            
            return web.json_response({"result": result})
        
        app.router.add_get('/tools', list_tools)
        app.router.add_post('/tools/call', call_tool)
        
        return app
    
    async def demonstrate_http_usage(self):
        """Show how clients would use the HTTP API"""
        print("\n🌐 HTTP API Integration")
        
        # Simulate HTTP requests (normally done with requests/httpx)
        print("   GET /tools -> List available tools")
        print("   POST /tools/call -> Call a specific tool")
        print("   Example curl command:")
        print("   curl -X POST http://localhost:8080/tools/call \\")
        print("        -H 'Content-Type: application/json' \\")
        print("        -d '{\"tool\": \"greet\", \"arguments\": {\"name\": \"API User\"}}'")

# ============================================================================
# Pattern 3: Message Queue Integration
# ============================================================================

class MessageQueueMCPIntegration:
    """
    Integration via message queues (Redis, RabbitMQ, etc.)
    Best for: Distributed systems, high-throughput, decoupled architecture.
    """
    
    def __init__(self):
        self.request_queue = queue.Queue()
        self.response_queue = queue.Queue()
        self.worker_running = False
    
    def start_mcp_worker(self):
        """Background worker that processes MCP requests from queue"""
        def worker():
            print("🔧 MCP Worker started")
            while self.worker_running:
                try:
                    # Get request from queue
                    if not self.request_queue.empty():
                        request = self.request_queue.get(timeout=1)
                        
                        # Process with MCP server (simplified)
                        tool = request['tool']
                        args = request['arguments']
                        request_id = request['id']
                        
                        # Simulate MCP call
                        if tool == "greet":
                            result = f"Hello, {args.get('name', 'Queue User')}!"
                        else:
                            result = f"Processed {tool} with args {args}"
                        
                        # Send response back
                        self.response_queue.put({
                            'id': request_id,
                            'result': result
                        })
                
                except queue.Empty:
                    continue
                except Exception as e:
                    print(f"Worker error: {e}")
        
        self.worker_running = True
        worker_thread = threading.Thread(target=worker)
        worker_thread.daemon = True
        worker_thread.start()
    
    def send_mcp_request(self, tool_name: str, arguments: Dict[str, Any]) -> str:
        """Send request to MCP via message queue"""
        request_id = f"req_{int(time.time() * 1000)}"
        
        # Send request
        self.request_queue.put({
            'id': request_id,
            'tool': tool_name,
            'arguments': arguments
        })
        
        # Wait for response
        while True:
            if not self.response_queue.empty():
                response = self.response_queue.get()
                if response['id'] == request_id:
                    return response['result']
            time.sleep(0.1)
    
    def demonstrate_queue_usage(self):
        """Demonstrate message queue integration"""
        print("\n📨 Message Queue Integration")
        
        self.start_mcp_worker()
        
        # Send some requests
        result1 = self.send_mcp_request("greet", {"name": "Queue User"})
        print(f"   Request 1 result: {result1}")
        
        result2 = self.send_mcp_request("calculate", {"operation": "add", "a": 10, "b": 5})
        print(f"   Request 2 result: {result2}")
        
        self.worker_running = False

# ============================================================================
# Pattern 4: WebSocket Real-time Integration
# ============================================================================

class WebSocketMCPIntegration:
    """
    Real-time WebSocket integration for live applications.
    Best for: Real-time dashboards, live chat, streaming applications.
    """
    
    async def create_websocket_server(self):
        """Create WebSocket server that forwards to MCP"""
        print("\n🔌 WebSocket Real-time Integration")
        print("   WebSocket clients can send:")
        print("   {\"type\": \"tool_call\", \"tool\": \"greet\", \"args\": {\"name\": \"WebSocket User\"}}")
        print("   And receive real-time responses:")
        print("   {\"type\": \"tool_response\", \"result\": \"Hello, WebSocket User!\"}")

# ============================================================================
# Pattern 5: Plugin/Extension Integration
# ============================================================================

class PluginMCPIntegration:
    """
    Integration as plugins/extensions in existing applications.
    Best for: VS Code extensions, browser extensions, IDE plugins.
    """
    
    def demonstrate_vscode_extension(self):
        """How a VS Code extension might use MCP"""
        print("\n🔌 VS Code Extension Integration")
        print("   1. Extension spawns MCP server process")
        print("   2. User triggers command (Ctrl+Shift+P)")
        print("   3. Extension calls MCP tool via JSON-RPC")
        print("   4. Result shown in VS Code UI")
        
        # Pseudo-code for VS Code extension:
        extension_code = '''
        // In VS Code extension (TypeScript/JavaScript)
        import { spawn } from 'child_process';
        
        const mcpServer = spawn('python', ['-m', 'src.ollama_mcp_trainer']);
        
        function callMCPTool(toolName, args) {
            const request = {
                jsonrpc: "2.0",
                id: Date.now(),
                method: "tools/call",
                params: { name: toolName, arguments: args }
            };
            
            mcpServer.stdin.write(JSON.stringify(request) + '\\n');
            
            // Handle response...
        }
        '''
        
        print("   Example extension code structure:")
        print("   ```typescript")
        print(extension_code)
        print("   ```")

# ============================================================================
# Integration Examples Summary
# ============================================================================

async def demonstrate_all_patterns():
    """Demonstrate all integration patterns"""
    print("🏗️ MCP Server Integration Patterns")
    print("=" * 60)
    
    # Pattern 1: Direct STDIO
    direct = DirectMCPIntegration()
    await direct.integrate_with_ai_chat_app()
    
    # Pattern 2: HTTP Wrapper
    http_wrapper = HTTPMCPWrapper()
    await http_wrapper.demonstrate_http_usage()
    
    # Pattern 3: Message Queue
    queue_integration = MessageQueueMCPIntegration()
    queue_integration.demonstrate_queue_usage()
    
    # Pattern 4: WebSocket
    websocket_integration = WebSocketMCPIntegration()
    await websocket_integration.create_websocket_server()
    
    # Pattern 5: Plugin
    plugin_integration = PluginMCPIntegration()
    plugin_integration.demonstrate_vscode_extension()
    
    print("\n" + "=" * 60)
    print("🎯 Integration Pattern Summary:")
    print("1. 🖥️  Direct STDIO - Desktop apps, CLI tools")
    print("2. 🌐 HTTP Wrapper - Web apps, microservices") 
    print("3. 📨 Message Queue - Distributed systems, high-throughput")
    print("4. 🔌 WebSocket - Real-time applications")
    print("5. 🔧 Plugin/Extension - IDE extensions, browser extensions")
    print("\nChoose the pattern that best fits your application architecture!")

if __name__ == "__main__":
    asyncio.run(demonstrate_all_patterns())
