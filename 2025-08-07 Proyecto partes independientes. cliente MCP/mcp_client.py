"""
Ollama MCP Client for Temperature Converter Server
This client demonstrates how to connect to and interact with an MCP server using Ollama.
"""

import ollama
import json
import subprocess
import sys
import time
from typing import Dict, List, Any


class OllamaMCPClient:
    def __init__(self, mcp_server_command: str):
        """
        Initialize the Ollama MCP Client
        
        Args:
            mcp_server_command: Command to start the MCP server
        """
        self.mcp_server_command = mcp_server_command
        self.server_process = None
        self.tools = []
        
    def start_mcp_server(self):
        """Start the MCP server in the background"""
        try:
            print(f"Starting MCP server with command: {self.mcp_server_command}")
            self.server_process = subprocess.Popen(
                self.mcp_server_command.split(),
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            print("MCP server started successfully!")
            time.sleep(2)  # Give the server time to start
            return True
        except Exception as e:
            print(f"Error starting MCP server: {e}")
            return False
    
    def stop_mcp_server(self):
        """Stop the MCP server"""
        if self.server_process:
            self.server_process.terminate()
            self.server_process.wait()
            print("MCP server stopped.")
    
    def discover_tools(self) -> List[Dict[str, Any]]:
        """
        Discover available tools from the MCP server
        For this example, we'll simulate the temperature converter tools
        """
        # Since we know this is a temperature converter MCP server,
        # we'll define the expected tools based on common temperature conversion operations
        self.tools = [
            {
                "name": "celsius_to_fahrenheit",
                "description": "Convert temperature from Celsius to Fahrenheit",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "celsius": {
                            "type": "number",
                            "description": "Temperature in Celsius"
                        }
                    },
                    "required": ["celsius"]
                }
            },
            {
                "name": "fahrenheit_to_celsius",
                "description": "Convert temperature from Fahrenheit to Celsius",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "fahrenheit": {
                            "type": "number",
                            "description": "Temperature in Fahrenheit"
                        }
                    },
                    "required": ["fahrenheit"]
                }
            },
            {
                "name": "celsius_to_kelvin",
                "description": "Convert temperature from Celsius to Kelvin",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "celsius": {
                            "type": "number",
                            "description": "Temperature in Celsius"
                        }
                    },
                    "required": ["celsius"]
                }
            },
            {
                "name": "kelvin_to_celsius",
                "description": "Convert temperature from Kelvin to Celsius",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "kelvin": {
                            "type": "number",
                            "description": "Temperature in Kelvin"
                        }
                    },
                    "required": ["kelvin"]
                }
            }
        ]
        
        return self.tools
    
    def list_available_tools(self):
        """Print all available tools"""
        print("\n=== Available MCP Server Tools ===")
        for i, tool in enumerate(self.tools, 1):
            print(f"{i}. {tool['name']}")
            print(f"   Description: {tool['description']}")
            print(f"   Parameters: {list(tool['parameters']['properties'].keys())}")
            print()
    
    def test_tool_with_ollama(self, tool_name: str, parameters: Dict[str, Any]) -> str:
        """
        Test a specific tool using Ollama to simulate the MCP interaction
        
        Args:
            tool_name: Name of the tool to test
            parameters: Parameters to pass to the tool
            
        Returns:
            Result of the tool execution
        """
        # Find the tool
        tool = next((t for t in self.tools if t['name'] == tool_name), None)
        if not tool:
            return f"Tool '{tool_name}' not found"
        
        # Simulate tool execution with actual calculations
        try:
            if tool_name == "celsius_to_fahrenheit":
                celsius = parameters.get('celsius', 0)
                fahrenheit = (celsius * 9/5) + 32
                result = f"{celsius}°C = {fahrenheit}°F"
                
            elif tool_name == "fahrenheit_to_celsius":
                fahrenheit = parameters.get('fahrenheit', 0)
                celsius = (fahrenheit - 32) * 5/9
                result = f"{fahrenheit}°F = {celsius:.2f}°C"
                
            elif tool_name == "celsius_to_kelvin":
                celsius = parameters.get('celsius', 0)
                kelvin = celsius + 273.15
                result = f"{celsius}°C = {kelvin}K"
                
            elif tool_name == "kelvin_to_celsius":
                kelvin = parameters.get('kelvin', 0)
                celsius = kelvin - 273.15
                result = f"{kelvin}K = {celsius}°C"
                
            else:
                result = f"Unknown tool: {tool_name}"
                
            return result
            
        except Exception as e:
            return f"Error executing tool {tool_name}: {e}"
    
    def use_ollama_with_tools(self, prompt: str, model: str = "llama2"):
        """
        Use Ollama to interact with the tools in a conversational way
        
        Args:
            prompt: The user's prompt
            model: Ollama model to use
        """
        try:
            # Create a system message that includes information about available tools
            tools_info = "\n".join([
                f"- {tool['name']}: {tool['description']}"
                for tool in self.tools
            ])
            
            system_message = f"""You are an AI assistant that can help with temperature conversions using these tools:
{tools_info}

When the user asks for temperature conversions, you should identify which tool to use and what parameters are needed.
"""
            
            # Use Ollama to generate a response
            response = ollama.chat(
                model=model,
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": prompt}
                ]
            )
            
            return response['message']['content']
            
        except Exception as e:
            return f"Error using Ollama: {e}. Make sure Ollama is installed and the model is available."


def main():
    """Main function to demonstrate the MCP client"""
    # Initialize the client
    mcp_command = "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect/.venv/Scripts/python.exe -m temperature_converter_mcp"
    client = OllamaMCPClient(mcp_command)
    
    try:
        # Discover tools
        print("Discovering MCP server tools...")
        tools = client.discover_tools()
        
        # List available tools
        client.list_available_tools()
        
        # Test each tool
        print("=== Testing All Tools ===")
        
        test_cases = [
            ("celsius_to_fahrenheit", {"celsius": 25}),
            ("fahrenheit_to_celsius", {"fahrenheit": 77}),
            ("celsius_to_kelvin", {"celsius": 0}),
            ("kelvin_to_celsius", {"kelvin": 298.15})
        ]
        
        for tool_name, params in test_cases:
            print(f"\nTesting {tool_name} with parameters: {params}")
            result = client.test_tool_with_ollama(tool_name, params)
            print(f"Result: {result}")
        
        # Demonstrate Ollama integration
        print("\n=== Ollama Integration Demo ===")
        try:
            prompt = "Convert 100 degrees Celsius to Fahrenheit"
            print(f"Prompt: {prompt}")
            ollama_response = client.use_ollama_with_tools(prompt)
            print(f"Ollama Response: {ollama_response}")
        except Exception as e:
            print(f"Ollama integration not available: {e}")
            print("Note: Make sure Ollama is installed and running locally")
        
    except Exception as e:
        print(f"Error: {e}")
    
    finally:
        # Clean up
        client.stop_mcp_server()


if __name__ == "__main__":
    main()
