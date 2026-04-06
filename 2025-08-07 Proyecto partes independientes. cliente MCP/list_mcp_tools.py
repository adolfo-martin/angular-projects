"""
Simple script to list all tools from MCP server
Shows tool names and descriptions in terminal
"""

import asyncio
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client


async def list_mcp_tools():
    """Connect to MCP server and list all available tools"""
    
    # MCP server command
    mcp_command = "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect/.venv/Scripts/python.exe -m temperature_converter_mcp"
    
    print("🔌 Connecting to MCP server to list tools...")
    print(f"Command: {mcp_command}")
    print()
    
    # Parse command
    command_parts = mcp_command.split()
    
    # Create server parameters
    server_params = StdioServerParameters(
        command=command_parts[0],
        args=command_parts[1:] if len(command_parts) > 1 else [],
        env=None
    )
    
    try:
        # Connect using stdio client
        async with stdio_client(server_params) as (read, write):
            async with ClientSession(read, write) as session:
                # Initialize session
                await session.initialize()
                print("✅ Connected to MCP server!")
                
                # Discover tools
                result = await session.list_tools()
                tools = result.tools
                
                print(f"\n🛠️  MCP SERVER TOOLS ({len(tools)} found)")
                print("="*50)
                
                for i, tool in enumerate(tools, 1):
                    print(f"\n{i}. 🔧 {tool.name}")
                    print(f"   📝 Description: {tool.description}")
                    
                    if tool.inputSchema and 'properties' in tool.inputSchema:
                        print(f"   📋 Parameters:")
                        required = tool.inputSchema.get('required', [])
                        for param_name, param_info in tool.inputSchema['properties'].items():
                            required_mark = "✅" if param_name in required else "🔘"
                            param_type = param_info.get('type', 'unknown')
                            param_desc = param_info.get('description', 'No description')
                            print(f"      {required_mark} {param_name} ({param_type}): {param_desc}")
                
                print(f"\n📊 Total tools available: {len(tools)}")
                return tools
                
    except Exception as e:
        print(f"❌ Error connecting to MCP server: {e}")
        print("\nMake sure the MCP server is running with:")
        print(f"   {mcp_command}")
        return None


if __name__ == "__main__":
    print("🎯 MCP TOOLS DISCOVERY")
    print("="*30)
    
    tools = asyncio.run(list_mcp_tools())
    
    if tools:
        print(f"\n🎉 Successfully discovered {len(tools)} tools!")
        
        # Print just the tool names for easy reference
        print("\n📋 Tool Names:")
        for tool in tools:
            print(f"   • {tool.name}")
    else:
        print("\n❌ Failed to discover tools.")
        print("Check that your MCP server is running correctly.")
