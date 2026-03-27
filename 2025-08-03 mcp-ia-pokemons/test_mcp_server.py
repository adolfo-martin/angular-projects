#!/usr/bin/env python3
"""
Pokemon MCP Server Test Script

This script demonstrates how to interact with the Pokemon MCP server
by sending JSON-RPC requests and receiving responses.
"""

import json
import subprocess
import sys
import os

# Get the virtual environment's Python executable
venv_python = r"C:\Users\adolfo\Desktop\2025-08-03 mcp-ia-pokemons\.venv\Scripts\python.exe"
server_script = r"C:\Users\adolfo\Desktop\2025-08-03 mcp-ia-pokemons\pokemon_mcp_server.py"

def send_request(process, request):
    """Send a JSON-RPC request to the MCP server"""
    request_json = json.dumps(request) + "\n"
    process.stdin.write(request_json)
    process.stdin.flush()
    
    # Read response
    response_line = process.stdout.readline()
    if response_line:
        try:
            return json.loads(response_line.strip())
        except json.JSONDecodeError as e:
            print(f"Error parsing response: {e}")
            print(f"Raw response: {response_line}")
            return None
    return None

def test_mcp_server():
    """Test the MCP server functionality"""
    print("🚀 Starting Pokemon MCP Server Test...")
    
    # Start the MCP server process
    try:
        process = subprocess.Popen(
            [venv_python, server_script],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            bufsize=0
        )
        
        print("✅ MCP Server process started")
        
        # Test 1: Initialize the server
        print("\n🔧 Test 1: Initialize server")
        init_request = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {},
                "clientInfo": {
                    "name": "pokemon-test-client",
                    "version": "1.0.0"
                }
            }
        }
        
        response = send_request(process, init_request)
        if response:
            print(f"✅ Initialization successful")
            print(f"   Server: {response.get('result', {}).get('serverInfo', {}).get('name', 'Unknown')}")
        else:
            print("❌ Initialization failed")
            return
        
        # Test 2: List available tools
        print("\n🛠️  Test 2: List available tools")
        tools_request = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "tools/list"
        }
        
        response = send_request(process, tools_request)
        if response and "result" in response:
            tools = response["result"].get("tools", [])
            print(f"✅ Found {len(tools)} tools:")
            for tool in tools:
                print(f"   - {tool['name']}: {tool['description']}")
        else:
            print("❌ Failed to list tools")
            return
        
        # Test 3: Get all Pokemon
        print("\n🎯 Test 3: Get all Pokemon")
        all_pokemon_request = {
            "jsonrpc": "2.0",
            "id": 3,
            "method": "tools/call",
            "params": {
                "name": "get_all_pokemon",
                "arguments": {}
            }
        }
        
        response = send_request(process, all_pokemon_request)
        if response and "result" in response:
            print("✅ Retrieved all Pokemon successfully")
            content = response["result"].get("content", [])
            if content:
                # Extract and parse the JSON from the text content
                text_content = content[0].get("text", "")
                if "Found" in text_content:
                    print("   First few lines of response:")
                    lines = text_content.split('\n')[:5]
                    for line in lines:
                        print(f"   {line}")
        else:
            print("❌ Failed to get all Pokemon")
        
        # Test 4: Get Pokemon by type
        print("\n🔥 Test 4: Get Pokemon by type (Fire)")
        fire_pokemon_request = {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "tools/call",
            "params": {
                "name": "get_pokemon_by_type",
                "arguments": {
                    "pokemon_type": "Fire"
                }
            }
        }
        
        response = send_request(process, fire_pokemon_request)
        if response and "result" in response:
            print("✅ Retrieved Fire Pokemon successfully")
            content = response["result"].get("content", [])
            if content:
                text_content = content[0].get("text", "")
                if "Found" in text_content:
                    lines = text_content.split('\n')[:3]
                    for line in lines:
                        print(f"   {line}")
        else:
            print("❌ Failed to get Fire Pokemon")
        
        # Test 5: Get specific Pokemon details
        print("\n⚡ Test 5: Get Pikachu details")
        pikachu_request = {
            "jsonrpc": "2.0",
            "id": 5,
            "method": "tools/call",
            "params": {
                "name": "get_pokemon_details",
                "arguments": {
                    "identifier": "Pikachu"
                }
            }
        }
        
        response = send_request(process, pikachu_request)
        if response and "result" in response:
            print("✅ Retrieved Pikachu details successfully")
            content = response["result"].get("content", [])
            if content:
                text_content = content[0].get("text", "")
                lines = text_content.split('\n')[:5]
                for line in lines:
                    print(f"   {line}")
        else:
            print("❌ Failed to get Pikachu details")
        
        print("\n🎉 All tests completed!")
        
    except Exception as e:
        print(f"❌ Error running tests: {e}")
    
    finally:
        # Clean up
        if 'process' in locals():
            process.terminate()
            process.wait()
        print("🛑 Server process terminated")

if __name__ == "__main__":
    test_mcp_server()
