"""
Real Ollama MCP Client for Temperature Converter Server
This client actually connects to the running MCP server and uses real tools.
"""

import asyncio
import json
import subprocess
import sys
import time
from typing import Dict, List, Any, Optional
import ollama
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client


class RealOllamaMCPClient:
    def __init__(self, mcp_server_command: str):
        """
        Initialize the real MCP client that connects to actual server
        
        Args:
            mcp_server_command: Command to start the MCP server
        """
        self.mcp_server_command = mcp_server_command
        self.session: Optional[ClientSession] = None
        self.tools = []
        self.is_connected = False
        
    async def connect_to_mcp_server(self) -> bool:
        """Connect to the actual MCP server"""
        try:
            print(f"🔌 Connecting to MCP server...")
            print(f"Command: {self.mcp_server_command}")
            
            # Parse the command
            command_parts = self.mcp_server_command.split()
            
            # Create server parameters
            server_params = StdioServerParameters(
                command=command_parts[0],
                args=command_parts[1:] if len(command_parts) > 1 else [],
                env=None
            )
            
            # Create and start the stdio client
            async with stdio_client(server_params) as (read, write):
                async with ClientSession(read, write) as session:
                    self.session = session
                    
                    # Initialize the session
                    await session.initialize()
                    
                    print("✅ Successfully connected to MCP server!")
                    self.is_connected = True
                    
                    # Discover tools
                    await self.discover_real_tools()
                    
                    # Keep connection alive for testing
                    await self.run_all_tests()
                    
            return True
            
        except Exception as e:
            print(f"❌ Error connecting to MCP server: {e}")
            print(f"Make sure the server is running with: {self.mcp_server_command}")
            return False
    
    async def discover_real_tools(self):
        """Discover actual tools from the MCP server"""
        if not self.session:
            print("❌ No active session. Connect to server first.")
            return
        
        try:
            print("🔍 Discovering tools from MCP server...")
            
            # List tools from the server
            result = await self.session.list_tools()
            
            self.tools = result.tools
            print(f"✅ Discovered {len(self.tools)} tools from server!")
            
            return self.tools
            
        except Exception as e:
            print(f"❌ Error discovering tools: {e}")
            return []
    
    def list_available_tools(self):
        """Display all available tools discovered from the server"""
        if not self.tools:
            print("⚠️  No tools discovered yet.")
            return
        
        print("\n" + "="*60)
        print("🛠️  REAL MCP SERVER TOOLS")
        print("="*60)
        
        for i, tool in enumerate(self.tools, 1):
            print(f"\n{i}. 🔧 {tool.name}")
            print(f"   📝 Description: {tool.description}")
            
            # Show input schema
            if tool.inputSchema:
                schema = tool.inputSchema
                if 'properties' in schema:
                    print(f"   📋 Parameters:")
                    required = schema.get('required', [])
                    for param_name, param_info in schema['properties'].items():
                        required_mark = "✅" if param_name in required else "🔘"
                        param_type = param_info.get('type', 'unknown')
                        param_desc = param_info.get('description', 'No description')
                        print(f"      {required_mark} {param_name} ({param_type}): {param_desc}")
        
        print("\n" + "="*60)
        print(f"Total tools available: {len(self.tools)}")
    
    async def call_real_tool(self, tool_name: str, arguments: Dict[str, Any]) -> str:
        """Call an actual tool on the MCP server"""
        if not self.session:
            return "❌ No active session. Connect to server first."
        
        try:
            print(f"🔧 Calling tool: {tool_name} with arguments: {arguments}")
            
            # Call the tool
            result = await self.session.call_tool(tool_name, arguments)
            
            if result.content:
                # Extract the result from the content
                if isinstance(result.content, list) and len(result.content) > 0:
                    content = result.content[0]
                    if hasattr(content, 'text'):
                        return f"✅ {content.text}"
                    else:
                        return f"✅ {str(content)}"
                else:
                    return f"✅ {str(result.content)}"
            else:
                return f"✅ Tool executed successfully (no content returned)"
                
        except Exception as e:
            return f"❌ Error calling tool {tool_name}: {e}"
    
    async def test_all_real_tools(self):
        """Test all discovered tools with real calls to the MCP server"""
        if not self.tools:
            print("⚠️  No tools to test. Discover tools first.")
            return
        
        print("\n" + "="*70)
        print("🧪 TESTING ALL REAL MCP TOOLS")
        print("="*70)
        
        # Define test cases for temperature conversion tools
        test_cases = {
            "celsius_to_fahrenheit": [
                {"celsius": 0},      # Freezing point
                {"celsius": 100},    # Boiling point
                {"celsius": 25}      # Room temperature
            ],
            "fahrenheit_to_celsius": [
                {"fahrenheit": 32},   # Freezing point
                {"fahrenheit": 212},  # Boiling point
                {"fahrenheit": 77}    # Room temperature
            ],
            "celsius_to_kelvin": [
                {"celsius": 0},       # Freezing point
                {"celsius": 100},     # Boiling point
                {"celsius": -273.15}  # Absolute zero
            ],
            "kelvin_to_celsius": [
                {"kelvin": 273.15},   # Freezing point
                {"kelvin": 373.15},   # Boiling point
                {"kelvin": 0}         # Absolute zero
            ]
        }
        
        results = []
        
        for tool in self.tools:
            tool_name = tool.name
            print(f"\n🔬 Testing tool: {tool_name}")
            print(f"   📝 Description: {tool.description}")
            
            # Get test cases for this tool
            cases = test_cases.get(tool_name, [{}])  # Default empty case if not defined
            
            for i, test_args in enumerate(cases, 1):
                print(f"   Test {i}: {test_args}")
                result = await self.call_real_tool(tool_name, test_args)
                results.append((tool_name, test_args, result))
                print(f"   Result: {result}")
        
        # Summary
        print(f"\n" + "="*70)
        print("📊 TEST SUMMARY")
        print("="*70)
        
        successful_tests = [r for r in results if "✅" in r[2]]
        failed_tests = [r for r in results if "❌" in r[2]]
        
        print(f"✅ Successful tests: {len(successful_tests)}/{len(results)}")
        print(f"❌ Failed tests: {len(failed_tests)}/{len(results)}")
        
        if failed_tests:
            print("\n🚨 Failed Tests:")
            for tool_name, args, result in failed_tests:
                print(f"   - {tool_name}({args}): {result}")
        else:
            print("\n🎉 ALL REAL TESTS PASSED! 🎉")
        
        return results
    
    async def run_all_tests(self):
        """Run comprehensive testing of the MCP server"""
        print("\n🚀 Starting comprehensive MCP server testing...")
        
        # List all tools
        self.list_available_tools()
        
        # Test all tools
        await self.test_all_real_tools()
        
        print("\n✨ Testing completed!")


async def main():
    """Main function to run the real MCP client"""
    print("🎯 Real Ollama MCP Client")
    print("=" * 50)
    
    # Create client
    mcp_command = "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect/.venv/Scripts/python.exe -m temperature_converter_mcp"
    client = RealOllamaMCPClient(mcp_command)
    
    # Connect and test
    success = await client.connect_to_mcp_server()
    
    if success:
        print("\n🎉 Successfully tested all MCP tools!")
    else:
        print("\n❌ Failed to connect to MCP server.")
        print("Make sure the server is running with the command:")
        print(f"   {mcp_command}")


if __name__ == "__main__":
    asyncio.run(main())
