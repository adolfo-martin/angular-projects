#!/usr/bin/env python3
"""
Pokemon MCP Server Demo

An interactive demo script that shows how to use the Pokemon MCP server.
"""

import json
import sys
from typing import Dict, Any

# Add the virtual environment path for imports
sys.path.insert(0, r"C:\Users\adolfo\Desktop\2025-08-03 mcp-ia-pokemons\.venv\Lib\site-packages")

# Import our server modules
from pokemon_mcp_server import MCPServer, MCPRequest

def demo_pokemon_server():
    """Run a demonstration of the Pokemon MCP server functionality"""
    print("🎮 Pokemon MCP Server Demo")
    print("=" * 50)
    
    # Create server instance
    server = MCPServer()
    
    print("\n1️⃣  Initializing MCP Server...")
    init_request = MCPRequest(
        id=1,
        method="initialize",
        params={
            "protocolVersion": "2024-11-05",
            "capabilities": {},
            "clientInfo": {
                "name": "pokemon-demo-client",
                "version": "1.0.0"
            }
        }
    )
    
    # Since we can't use asyncio.run in a simple demo, we'll create a sync version
    # This is just for demonstration purposes
    import asyncio
    
    async def run_demo():
        # Initialize
        response = await server.handle_request(init_request)
        print(f"✅ Server initialized: {response.result['serverInfo']['name']}")
        
        # List tools
        print("\n2️⃣  Available Tools:")
        tools_request = MCPRequest(id=2, method="tools/list")
        response = await server.handle_request(tools_request)
        
        tools = response.result["tools"]
        for i, tool in enumerate(tools, 1):
            print(f"   {i}. {tool['name']}: {tool['description']}")
        
        # Demo 1: Get all Pokemon
        print("\n3️⃣  Getting all Pokemon...")
        all_request = MCPRequest(
            id=3,
            method="tools/call",
            params={
                "name": "get_all_pokemon",
                "arguments": {}
            }
        )
        response = await server.handle_request(all_request)
        content = response.result["content"][0]["text"]
        
        # Parse the JSON from the response
        lines = content.split('\n')
        print(f"✅ {lines[0]}")
        
        # Show first few Pokemon
        try:
            json_start = content.find('{')
            json_data = json.loads(content[json_start:])
            print("\n   First 3 Pokemon:")
            for pokemon in json_data["pokemon"][:3]:
                print(f"   - {pokemon['name']} ({pokemon['type']}) - {pokemon['weight']}kg, {pokemon['height']}m")
        except:
            print("   (Could not parse detailed data)")
        
        # Demo 2: Get Pokemon by type
        print("\n4️⃣  Getting Electric Pokemon...")
        type_request = MCPRequest(
            id=4,
            method="tools/call",
            params={
                "name": "get_pokemon_by_type",
                "arguments": {"pokemon_type": "Electric"}
            }
        )
        response = await server.handle_request(type_request)
        content = response.result["content"][0]["text"]
        lines = content.split('\n')
        print(f"✅ {lines[0]}")
        
        # Demo 3: Get specific Pokemon details
        print("\n5️⃣  Getting Charizard details...")
        detail_request = MCPRequest(
            id=5,
            method="tools/call",
            params={
                "name": "get_pokemon_details",
                "arguments": {"identifier": "Charizard"}
            }
        )
        response = await server.handle_request(detail_request)
        content = response.result["content"][0]["text"]
        
        try:
            json_start = content.find('{')
            pokemon_data = json.loads(content[json_start:])
            print(f"✅ Found {pokemon_data['name']}!")
            print(f"   Type: {pokemon_data['type']}")
            print(f"   Weight: {pokemon_data['weight']} kg")
            print(f"   Height: {pokemon_data['height']} m")
            print(f"   BMI: {pokemon_data['details']['bmi']}")
            print(f"   Image: {pokemon_data['image_url']}")
        except:
            print(f"✅ {content.split(':', 1)[0]}:")
        
        # Demo 4: Try an invalid Pokemon
        print("\n6️⃣  Trying to get invalid Pokemon (Pokemón)...")
        invalid_request = MCPRequest(
            id=6,
            method="tools/call",
            params={
                "name": "get_pokemon_details",
                "arguments": {"identifier": "InvalidPokemon"}
            }
        )
        response = await server.handle_request(invalid_request)
        content = response.result["content"][0]["text"]
        lines = content.split('\n')
        print(f"✅ {lines[0]}")
        
        print("\n🎉 Demo completed successfully!")
        print("\n📝 Summary:")
        print("   - Created MCP server with Pokemon data")
        print("   - Implemented 3 tools: get_all_pokemon, get_pokemon_by_type, get_pokemon_details")
        print("   - Server responds with JSON-RPC 2.0 protocol")
        print("   - Data includes 10 Pokemon with name, type, weight, height, and image URL")
    
    # Run the async demo
    try:
        asyncio.run(run_demo())
    except Exception as e:
        print(f"❌ Error running demo: {e}")

if __name__ == "__main__":
    demo_pokemon_server()
