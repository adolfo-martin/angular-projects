"""
Real MCP Tools Test Suite
Tests actual tools from the running MCP server
"""

import asyncio
import unittest
from real_mcp_client import RealOllamaMCPClient


class TestRealMCPTools(unittest.TestCase):
    """Test suite for real MCP server tools"""
    
    def setUp(self):
        """Set up test fixtures"""
        self.mcp_command = "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect/.venv/Scripts/python.exe -m temperature_converter_mcp"
        self.client = RealOllamaMCPClient(self.mcp_command)
        
        # Run async setup
        asyncio.run(self.async_setup())
    
    async def async_setup(self):
        """Async setup to connect to MCP server"""
        self.connected = await self.client.connect_to_mcp_server()
    
    def test_connection(self):
        """Test that we can connect to the MCP server"""
        self.assertTrue(self.connected, "Failed to connect to MCP server")
        self.assertTrue(self.client.is_connected, "Client should be connected")
    
    def test_tool_discovery(self):
        """Test that we can discover tools from the server"""
        self.assertGreater(len(self.client.tools), 0, "Should discover at least one tool")
        
        # Check that we have expected temperature conversion tools
        tool_names = [tool.name for tool in self.client.tools]
        expected_tools = ["celsius_to_fahrenheit", "fahrenheit_to_celsius", "celsius_to_kelvin", "kelvin_to_celsius"]
        
        for expected_tool in expected_tools:
            self.assertIn(expected_tool, tool_names, f"Expected tool {expected_tool} not found")


async def run_real_tests():
    """Run tests against the actual MCP server"""
    print("="*60)
    print("🔥 REAL MCP SERVER TESTS")
    print("="*60)
    
    # Create client
    mcp_command = "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect/.venv/Scripts/python.exe -m temperature_converter_mcp"
    client = RealOllamaMCPClient(mcp_command)
    
    try:
        # Connect to server
        connected = await client.connect_to_mcp_server()
        
        if not connected:
            print("❌ Could not connect to MCP server!")
            print("Make sure the server is running with:")
            print(f"   {mcp_command}")
            return False
        
        return True
        
    except Exception as e:
        print(f"❌ Error during testing: {e}")
        return False


if __name__ == "__main__":
    print("🧪 Starting Real MCP Server Tests...")
    success = asyncio.run(run_real_tests())
    
    if success:
        print("\n🎉 Real MCP tests completed successfully!")
    else:
        print("\n❌ Real MCP tests failed!")
        
    exit(0 if success else 1)
