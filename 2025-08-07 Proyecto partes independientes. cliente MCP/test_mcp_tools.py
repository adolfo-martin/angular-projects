"""
Test Suite for Ollama MCP Client
This module contains comprehensive tests for all MCP server tools.
"""

import unittest
from mcp_client import OllamaMCPClient


class TestMCPTools(unittest.TestCase):
    """Test suite for MCP server tools"""
    
    def setUp(self):
        """Set up test fixtures"""
        mcp_command = "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect/.venv/Scripts/python.exe -m temperature_converter_mcp"
        self.client = OllamaMCPClient(mcp_command)
        self.client.discover_tools()
    
    def test_celsius_to_fahrenheit(self):
        """Test Celsius to Fahrenheit conversion"""
        print("\n--- Testing Celsius to Fahrenheit ---")
        
        test_cases = [
            (0, 32),      # Freezing point of water
            (100, 212),   # Boiling point of water
            (25, 77),     # Room temperature
            (-40, -40),   # Where Celsius and Fahrenheit meet
        ]
        
        for celsius, expected_fahrenheit in test_cases:
            with self.subTest(celsius=celsius):
                result = self.client.test_tool_with_ollama(
                    "celsius_to_fahrenheit", 
                    {"celsius": celsius}
                )
                print(f"Input: {celsius}°C -> Result: {result}")
                
                # Extract the fahrenheit value from the result
                fahrenheit_str = result.split('=')[1].strip().replace('°F', '')
                actual_fahrenheit = float(fahrenheit_str)
                
                self.assertAlmostEqual(actual_fahrenheit, expected_fahrenheit, places=1)
    
    def test_fahrenheit_to_celsius(self):
        """Test Fahrenheit to Celsius conversion"""
        print("\n--- Testing Fahrenheit to Celsius ---")
        
        test_cases = [
            (32, 0),      # Freezing point of water
            (212, 100),   # Boiling point of water
            (77, 25),     # Room temperature
            (-40, -40),   # Where Celsius and Fahrenheit meet
        ]
        
        for fahrenheit, expected_celsius in test_cases:
            with self.subTest(fahrenheit=fahrenheit):
                result = self.client.test_tool_with_ollama(
                    "fahrenheit_to_celsius", 
                    {"fahrenheit": fahrenheit}
                )
                print(f"Input: {fahrenheit}°F -> Result: {result}")
                
                # Extract the celsius value from the result
                celsius_str = result.split('=')[1].strip().replace('°C', '')
                actual_celsius = float(celsius_str)
                
                self.assertAlmostEqual(actual_celsius, expected_celsius, places=1)
    
    def test_celsius_to_kelvin(self):
        """Test Celsius to Kelvin conversion"""
        print("\n--- Testing Celsius to Kelvin ---")
        
        test_cases = [
            (0, 273.15),    # Freezing point of water
            (100, 373.15),  # Boiling point of water
            (25, 298.15),   # Room temperature
            (-273.15, 0),   # Absolute zero
        ]
        
        for celsius, expected_kelvin in test_cases:
            with self.subTest(celsius=celsius):
                result = self.client.test_tool_with_ollama(
                    "celsius_to_kelvin", 
                    {"celsius": celsius}
                )
                print(f"Input: {celsius}°C -> Result: {result}")
                
                # Extract the kelvin value from the result
                kelvin_str = result.split('=')[1].strip().replace('K', '')
                actual_kelvin = float(kelvin_str)
                
                self.assertAlmostEqual(actual_kelvin, expected_kelvin, places=2)
    
    def test_kelvin_to_celsius(self):
        """Test Kelvin to Celsius conversion"""
        print("\n--- Testing Kelvin to Celsius ---")
        
        test_cases = [
            (273.15, 0),    # Freezing point of water
            (373.15, 100),  # Boiling point of water
            (298.15, 25),   # Room temperature
            (0, -273.15),   # Absolute zero
        ]
        
        for kelvin, expected_celsius in test_cases:
            with self.subTest(kelvin=kelvin):
                result = self.client.test_tool_with_ollama(
                    "kelvin_to_celsius", 
                    {"kelvin": kelvin}
                )
                print(f"Input: {kelvin}K -> Result: {result}")
                
                # Extract the celsius value from the result
                celsius_str = result.split('=')[1].strip().replace('°C', '')
                actual_celsius = float(celsius_str)
                
                self.assertAlmostEqual(actual_celsius, expected_celsius, places=2)
    
    def test_tool_discovery(self):
        """Test that all expected tools are discovered"""
        print("\n--- Testing Tool Discovery ---")
        
        expected_tools = [
            "celsius_to_fahrenheit",
            "fahrenheit_to_celsius",
            "celsius_to_kelvin",
            "kelvin_to_celsius"
        ]
        
        discovered_tool_names = [tool['name'] for tool in self.client.tools]
        
        for tool_name in expected_tools:
            with self.subTest(tool_name=tool_name):
                self.assertIn(tool_name, discovered_tool_names)
                print(f"✓ Tool '{tool_name}' discovered successfully")
    
    def test_invalid_tool(self):
        """Test behavior with invalid tool name"""
        print("\n--- Testing Invalid Tool ---")
        
        result = self.client.test_tool_with_ollama(
            "invalid_tool", 
            {"some_param": 123}
        )
        
        self.assertIn("not found", result.lower())
        print(f"Invalid tool test result: {result}")
    
    def tearDown(self):
        """Clean up after tests"""
        if hasattr(self.client, 'stop_mcp_server'):
            self.client.stop_mcp_server()


def run_comprehensive_tests():
    """Run all tests and display results"""
    print("="*60)
    print("COMPREHENSIVE MCP TOOLS TEST SUITE")
    print("="*60)
    
    # Create test suite
    loader = unittest.TestLoader()
    suite = loader.loadTestsFromTestCase(TestMCPTools)
    
    # Run tests with verbose output
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # Print summary
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    print(f"Tests run: {result.testsRun}")
    print(f"Failures: {len(result.failures)}")
    print(f"Errors: {len(result.errors)}")
    
    if result.failures:
        print("\nFAILURES:")
        for test, traceback in result.failures:
            print(f"- {test}: {traceback}")
    
    if result.errors:
        print("\nERRORS:")
        for test, traceback in result.errors:
            print(f"- {test}: {traceback}")
    
    if result.wasSuccessful():
        print("\n🎉 ALL TESTS PASSED! 🎉")
    else:
        print("\n❌ Some tests failed. Check the output above.")
    
    return result.wasSuccessful()


if __name__ == "__main__":
    success = run_comprehensive_tests()
    exit(0 if success else 1)
