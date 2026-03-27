#!/usr/bin/env python3
"""
MCP Server for Volkswagen Cars AI Assistant
An MCP server that provides AI-powered tools to interact with Volkswagen car data using Ollama.
"""

import asyncio
import json
import sys
import logging
from typing import Any, Dict, List, Optional
from dataclasses import dataclass

try:
    import ollama
except ImportError:
    print("Warning: ollama package not found. Install with: pip install ollama")
    ollama = None

# Import our Volkswagen repository
from volkswagen_repository import VolkswagenRepository


#!/usr/bin/env python3
"""
MCP Server for Volkswagen Cars AI Assistant
A simplified MCP server that provides AI-powered tools to interact with Volkswagen car data.
This server follows the Model Context Protocol (MCP) specification.
"""

import asyncio
import json
import sys
import logging
from typing import Any, Dict, List, Optional
from dataclasses import dataclass

try:
    import ollama
    OLLAMA_AVAILABLE = True
except ImportError:
    print("Warning: ollama package not found. Install with: pip install ollama")
    OLLAMA_AVAILABLE = False

# Import our Volkswagen repository
from volkswagen_repository import VolkswagenRepository


@dataclass
class Tool:
    """Represents an MCP tool."""
    name: str
    description: str
    input_schema: Dict[str, Any]


@dataclass
class Resource:
    """Represents an MCP resource."""
    uri: str
    name: str
    description: str
    mime_type: str


@dataclass
class TextContent:
    """Represents text content in MCP responses."""
    type: str
    text: str


class VolkswagenMCPServer:
    """MCP Server for Volkswagen car data with AI capabilities."""
    
    def __init__(self):
        """Initialize the MCP server with Volkswagen repository."""
        self.vw_repo = VolkswagenRepository()
        self.tools = self._create_tools()
        self.resources = self._create_resources()
        
        # Initialize Ollama client if available
        self.ollama_client = None
        if OLLAMA_AVAILABLE:
            try:
                self.ollama_client = ollama.Client()
            except Exception as e:
                print(f"Warning: Could not initialize Ollama client: {e}")
    
    def _create_tools(self) -> List[Tool]:
        """Create the available tools for the MCP server."""
        return [
            Tool(
                name="get_all_volkswagen_cars",
                description="Retrieve all Volkswagen cars from the repository with complete information including model, year, type, engine, fuel type, price, and color.",
                input_schema={
                    "type": "object",
                    "properties": {},
                    "required": []
                }
            ),
            Tool(
                name="get_volkswagen_car_by_id",
                description="Retrieve a specific Volkswagen car by its unique identifier. Returns detailed information about the car if found.",
                input_schema={
                    "type": "object",
                    "properties": {
                        "car_id": {
                            "type": "integer",
                            "description": "The unique identifier of the Volkswagen car to retrieve",
                            "minimum": 1
                        }
                    },
                    "required": ["car_id"]
                }
            )
        ]
    
    def _create_resources(self) -> List[Resource]:
        """Create the available resources for the MCP server."""
        return [
            Resource(
                uri="volkswagen://cars/all",
                name="All Volkswagen Cars",
                description="Complete repository of Volkswagen cars with detailed specifications",
                mime_type="application/json"
            ),
            Resource(
                uri="volkswagen://cars/models",
                name="Car Models",
                description="List of available Volkswagen car models",
                mime_type="application/json"
            )
        ]
    
    async def list_tools(self) -> Dict[str, Any]:
        """Handle the list_tools request."""
        return {
            "tools": [
                {
                    "name": tool.name,
                    "description": tool.description,
                    "inputSchema": tool.input_schema
                }
                for tool in self.tools
            ]
        }
    
    async def call_tool(self, name: str, arguments: Dict[str, Any] = None) -> List[TextContent]:
        """Handle tool calls."""
        if arguments is None:
            arguments = {}
        
        if name == "get_all_volkswagen_cars":
            return await self._get_all_cars()
        
        elif name == "get_volkswagen_car_by_id":
            if "car_id" not in arguments:
                raise ValueError("car_id is required for get_volkswagen_car_by_id tool")
            
            car_id = arguments["car_id"]
            if not isinstance(car_id, int) or car_id < 1:
                raise ValueError("car_id must be a positive integer")
            
            return await self._get_car_by_id(car_id)
        
        else:
            raise ValueError(f"Unknown tool: {name}")
    
    async def list_resources(self) -> Dict[str, Any]:
        """Handle the list_resources request."""
        return {
            "resources": [
                {
                    "uri": resource.uri,
                    "name": resource.name,
                    "description": resource.description,
                    "mimeType": resource.mime_type
                }
                for resource in self.resources
            ]
        }
    
    async def read_resource(self, uri: str) -> str:
        """Handle resource reading."""
        if uri == "volkswagen://cars/all":
            cars = self.vw_repo.get_all_cars()
            return json.dumps(cars, indent=2)
        elif uri == "volkswagen://cars/models":
            cars = self.vw_repo.get_all_cars()
            models = [car["model"] for car in cars]
            return json.dumps({"models": models}, indent=2)
        else:
            raise ValueError(f"Unknown resource: {uri}")
    
    async def _get_all_cars(self) -> List[TextContent]:
        """Tool implementation: Get all Volkswagen cars."""
        try:
            cars = self.vw_repo.get_all_cars()
            
            # Format the response for better AI understanding
            response_text = "🚗 **Complete Volkswagen Car Repository**\n\n"
            
            for car in cars:
                response_text += f"**ID {car['id']}: {car['model']} ({car['year']})**\n"
                response_text += f"• Type: {car['type']}\n"
                response_text += f"• Engine: {car['engine']}\n"
                response_text += f"• Fuel: {car['fuel_type']}\n"
                response_text += f"• Price: ${car['price']:,}\n"
                response_text += f"• Color: {car['color']}\n"
                response_text += "---\n"
            
            response_text += f"\n📊 **Summary**: {len(cars)} Volkswagen vehicles available"
            
            # Also include JSON data for programmatic use
            json_data = json.dumps(cars, indent=2)
            
            return [
                TextContent(
                    type="text",
                    text=response_text
                ),
                TextContent(
                    type="text", 
                    text=f"\n**Raw JSON Data:**\n```json\n{json_data}\n```"
                )
            ]
            
        except Exception as e:
            return [
                TextContent(
                    type="text",
                    text=f"❌ Error retrieving cars: {str(e)}"
                )
            ]
    
    async def _get_car_by_id(self, car_id: int) -> List[TextContent]:
        """Tool implementation: Get car by ID."""
        try:
            car = self.vw_repo.get_car_by_id(car_id)
            
            if car is None:
                return [
                    TextContent(
                        type="text",
                        text=f"❌ **Car Not Found**\n\nNo Volkswagen car found with ID: {car_id}\n\n💡 **Available IDs**: 1-10"
                    )
                ]
            
            # Format the response for better AI understanding
            response_text = f"🚗 **Volkswagen {car['model']} Details**\n\n"
            response_text += f"• **ID**: {car['id']}\n"
            response_text += f"• **Model**: {car['model']}\n"
            response_text += f"• **Year**: {car['year']}\n"
            response_text += f"• **Type**: {car['type']}\n"
            response_text += f"• **Engine**: {car['engine']}\n"
            response_text += f"• **Fuel Type**: {car['fuel_type']}\n"
            response_text += f"• **Price**: ${car['price']:,}\n"
            response_text += f"• **Color**: {car['color']}\n"
            
            # Add contextual information
            if car['fuel_type'] == 'Electric':
                response_text += f"\n🔋 **Electric Vehicle**: This is an eco-friendly electric Volkswagen model."
            
            # Use Ollama for additional AI insights if available
            if self.ollama_client:
                try:
                    ai_insight = await self._get_ai_insights(car)
                    if ai_insight:
                        response_text += f"\n\n🤖 **AI Insights**: {ai_insight}"
                except Exception as e:
                    print(f"Warning: Could not get AI insights: {e}")
            
            # Include JSON data
            json_data = json.dumps(car, indent=2)
            
            return [
                TextContent(
                    type="text",
                    text=response_text
                ),
                TextContent(
                    type="text",
                    text=f"\n**Raw JSON Data:**\n```json\n{json_data}\n```"
                )
            ]
            
        except Exception as e:
            return [
                TextContent(
                    type="text",
                    text=f"❌ Error retrieving car with ID {car_id}: {str(e)}"
                )
            ]
    
    async def _get_ai_insights(self, car: Dict[str, Any]) -> Optional[str]:
        """Get AI insights about a car using Ollama."""
        if not self.ollama_client:
            return None
        
        try:
            prompt = f"""Provide a brief, interesting insight about this Volkswagen car:
Model: {car['model']}
Year: {car['year']}
Type: {car['type']}
Engine: {car['engine']}
Fuel Type: {car['fuel_type']}
Price: ${car['price']:,}

Give a short, informative comment about its features, market position, or notable characteristics."""
            
            response = self.ollama_client.generate(
                model="llama2",  # You can change this to any available model
                prompt=prompt
            )
            
            return response.get('response', '').strip()
        except Exception as e:
            print(f"Error getting AI insights: {e}")
            return None

    def handle_request(self, request: Dict[str, Any]) -> Dict[str, Any]:
        """Handle incoming MCP requests."""
        method = request.get("method")
        params = request.get("params", {})
        request_id = request.get("id")
        
        try:
            if method == "tools/list":
                result = asyncio.run(self.list_tools())
            elif method == "tools/call":
                tool_name = params.get("name")
                arguments = params.get("arguments", {})
                result = asyncio.run(self.call_tool(tool_name, arguments))
            elif method == "resources/list":
                result = asyncio.run(self.list_resources())
            elif method == "resources/read":
                uri = params.get("uri")
                result = asyncio.run(self.read_resource(uri))
            else:
                return {
                    "jsonrpc": "2.0",
                    "id": request_id,
                    "error": {
                        "code": -32601,
                        "message": f"Method not found: {method}"
                    }
                }
            
            return {
                "jsonrpc": "2.0",
                "id": request_id,
                "result": result
            }
            
        except Exception as e:
            return {
                "jsonrpc": "2.0",
                "id": request_id,
                "error": {
                    "code": -32603,
                    "message": f"Internal error: {str(e)}"
                }
            }

    async def run_stdio(self):
        """Run the server using standard input/output."""
        print("🚗 Volkswagen AI MCP Server Started", file=sys.stderr)
        print("📡 Listening for JSON-RPC requests on stdin/stdout", file=sys.stderr)
        print("🛠️  Available tools:", file=sys.stderr)
        print("   • get_all_volkswagen_cars", file=sys.stderr)
        print("   • get_volkswagen_car_by_id", file=sys.stderr)
        if OLLAMA_AVAILABLE:
            print("🤖 Ollama integration: Available", file=sys.stderr)
        else:
            print("🤖 Ollama integration: Not available", file=sys.stderr)
        print("-" * 50, file=sys.stderr)
        
        while True:
            try:
                line = sys.stdin.readline()
                if not line:
                    break
                
                request = json.loads(line.strip())
                response = self.handle_request(request)
                print(json.dumps(response))
                sys.stdout.flush()
                
            except json.JSONDecodeError:
                error_response = {
                    "jsonrpc": "2.0",
                    "id": None,
                    "error": {
                        "code": -32700,
                        "message": "Parse error"
                    }
                }
                print(json.dumps(error_response))
                sys.stdout.flush()
            except Exception as e:
                error_response = {
                    "jsonrpc": "2.0",
                    "id": None,
                    "error": {
                        "code": -32603,
                        "message": f"Internal error: {str(e)}"
                    }
                }
                print(json.dumps(error_response))
                sys.stdout.flush()


# Demo functions for testing
async def demo_server():
    """Demonstrate the server functionality."""
    server = VolkswagenMCPServer()
    
    print("🚗 Volkswagen MCP Server Demo")
    print("=" * 40)
    
    # Demo 1: List tools
    print("\n1. Available Tools:")
    tools_response = await server.list_tools()
    for tool in tools_response["tools"]:
        print(f"   • {tool['name']}: {tool['description']}")
    
    # Demo 2: Get all cars
    print("\n2. Get All Cars:")
    all_cars_response = await server.call_tool("get_all_volkswagen_cars")
    for content in all_cars_response:
        print(content.text[:200] + "..." if len(content.text) > 200 else content.text)
    
    # Demo 3: Get specific car
    print("\n3. Get Car by ID (ID: 6 - ID.4 Electric):")
    car_response = await server.call_tool("get_volkswagen_car_by_id", {"car_id": 6})
    for content in car_response:
        print(content.text[:300] + "..." if len(content.text) > 300 else content.text)


# Main execution
async def main():
    """Main function to run the MCP server."""
    import sys
    
    if len(sys.argv) > 1 and sys.argv[1] == "--demo":
        await demo_server()
    else:
        server = VolkswagenMCPServer()
        await server.run_stdio()


if __name__ == "__main__":
    asyncio.run(main())
