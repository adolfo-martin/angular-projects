#!/usr/bin/env python3
"""
Test script to verify all components of the Volkswagen car system
Tests: Repository, MCP Server, and Ollama Client integration
"""

import asyncio
import sys
import traceback

# Import our components
from volkswagen_repository import VolkswagenRepository
from volkswagen_mcp_server import VolkswagenMCPServer
from ollama_car_client import OllamaCarAssistant


class SystemTester:
    """Test suite for the entire Volkswagen car system."""
    
    def __init__(self):
        """Initialize the tester."""
        self.results = {
            "repository": False,
            "mcp_server": False,
            "ollama_client": False,
            "integration": False
        }
    
    def test_repository(self):
        """Test the Volkswagen repository."""
        print("🧪 Testing Volkswagen Repository...")
        try:
            repo = VolkswagenRepository()
            
            # Test get all cars
            all_cars = repo.get_all_cars()
            assert len(all_cars) == 10, f"Expected 10 cars, got {len(all_cars)}"
            
            # Test get car by ID
            car = repo.get_car_by_id(1)
            assert car is not None, "Car with ID 1 should exist"
            assert car['model'] == 'Golf', f"Expected Golf, got {car['model']}"
            
            # Test non-existent car
            missing_car = repo.get_car_by_id(99)
            assert missing_car is None, "Car with ID 99 should not exist"
            
            print("  ✅ Repository tests passed")
            self.results["repository"] = True
            
        except Exception as e:
            print(f"  ❌ Repository tests failed: {e}")
            traceback.print_exc()
    
    async def test_mcp_server(self):
        """Test the MCP server."""
        print("🧪 Testing MCP Server...")
        try:
            server = VolkswagenMCPServer()
            
            # Test list tools
            tools_response = await server.list_tools()
            assert "tools" in tools_response, "Tools response should contain 'tools' key"
            assert len(tools_response["tools"]) == 2, f"Expected 2 tools, got {len(tools_response['tools'])}"
            
            # Test get all cars tool
            all_cars_response = await server.call_tool("get_all_volkswagen_cars")
            assert len(all_cars_response) >= 1, "Should return at least one response"
            assert "Complete Volkswagen Car Repository" in all_cars_response[0].text
            
            # Test get car by ID tool
            car_response = await server.call_tool("get_volkswagen_car_by_id", {"car_id": 6})
            assert len(car_response) >= 1, "Should return at least one response"
            assert "ID.4" in car_response[0].text, "Should contain ID.4 information"
            
            # Test invalid car ID
            invalid_response = await server.call_tool("get_volkswagen_car_by_id", {"car_id": 99})
            assert "Car Not Found" in invalid_response[0].text, "Should indicate car not found"
            
            print("  ✅ MCP Server tests passed")
            self.results["mcp_server"] = True
            
        except Exception as e:
            print(f"  ❌ MCP Server tests failed: {e}")
            traceback.print_exc()
    
    async def test_ollama_client(self):
        """Test the Ollama client (without requiring running Ollama server)."""
        print("🧪 Testing Ollama Client...")
        try:
            client = OllamaCarAssistant()
            
            # Test that client initializes
            assert client.mcp_server is not None, "MCP server should be initialized"
            assert client.vw_repo is not None, "Repository should be initialized"
            
            # Test status check (will fail if Ollama not running, but that's expected)
            is_running = client.check_ollama_status()
            print(f"  ℹ️  Ollama server running: {is_running}")
            
            # Test MCP integration (should work even without Ollama)
            all_cars_info = await client._get_all_cars_info()
            assert "Complete Volkswagen Car Repository" in all_cars_info
            
            specific_car_info = await client._get_specific_car_info("6")
            assert "ID.4" in specific_car_info
            
            search_info = await client._search_cars_info("electric")
            assert "ID.4" in search_info or "ID.Buzz" in search_info
            
            print("  ✅ Ollama Client tests passed")
            self.results["ollama_client"] = True
            
        except Exception as e:
            print(f"  ❌ Ollama Client tests failed: {e}")
            traceback.print_exc()
    
    async def test_integration(self):
        """Test full system integration."""
        print("🧪 Testing System Integration...")
        try:
            # Test that all components work together
            repo = VolkswagenRepository()
            server = VolkswagenMCPServer()
            client = OllamaCarAssistant()
            
            # Get data from repository
            all_cars = repo.get_all_cars()
            
            # Get same data through MCP server
            mcp_response = await server.call_tool("get_all_volkswagen_cars")
            
            # Get data through Ollama client
            client_response = await client._get_all_cars_info()
            
            # Verify consistency
            assert len(all_cars) == 10, "Repository should have 10 cars"
            assert "Golf" in mcp_response[0].text, "MCP response should contain Golf"
            assert "Golf" in client_response, "Client response should contain Golf"
            
            print("  ✅ Integration tests passed")
            self.results["integration"] = True
            
        except Exception as e:
            print(f"  ❌ Integration tests failed: {e}")
            traceback.print_exc()
    
    async def run_all_tests(self):
        """Run all tests."""
        print("🚗🧪 Volkswagen Car System Test Suite")
        print("=" * 50)
        
        # Run tests
        self.test_repository()
        await self.test_mcp_server()
        await self.test_ollama_client()
        await self.test_integration()
        
        # Summary
        print("\n📊 Test Results Summary:")
        print("-" * 30)
        
        total_tests = len(self.results)
        passed_tests = sum(self.results.values())
        
        for test_name, result in self.results.items():
            status = "✅ PASSED" if result else "❌ FAILED"
            print(f"  {test_name.replace('_', ' ').title()}: {status}")
        
        print(f"\n🎯 Overall: {passed_tests}/{total_tests} tests passed")
        
        if passed_tests == total_tests:
            print("🎉 All tests passed! System is working correctly.")
            return True
        else:
            print("⚠️  Some tests failed. Check the output above for details.")
            return False


async def main():
    """Main function to run the tests."""
    tester = SystemTester()
    success = await tester.run_all_tests()
    
    if success:
        print("\n🚀 System is ready for use!")
        print("\nNext steps:")
        print("1. Install Ollama from https://ollama.ai")
        print("2. Run: ollama serve")
        print("3. Run: ollama pull llama3.2:1b")
        print("4. Test with: python ollama_car_client.py")
    else:
        print("\n🔧 Please fix the failing tests before proceeding.")
    
    return 0 if success else 1


if __name__ == "__main__":
    exit_code = asyncio.run(main())
