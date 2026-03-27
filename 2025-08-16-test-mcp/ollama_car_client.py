#!/usr/bin/env python3
"""
Ollama Client for Volkswagen Car Information
This script communicates with a local Ollama server running llama3.2:1b model
and uses our MCP tools to extract and provide information about Volkswagen cars.
"""

import asyncio
import json
import ollama
from typing import Dict, List, Any, Optional
import subprocess
import sys
import time

# Import our MCP server and repository
from volkswagen_mcp_server import VolkswagenMCPServer
from volkswagen_repository import VolkswagenRepository


class OllamaCarAssistant:
    """AI assistant that uses Ollama with MCP tools for car information."""
    
    def __init__(self, model_name: str = "llama3.2:1b"):
        """Initialize the Ollama car assistant."""
        self.model_name = model_name
        self.ollama_client = ollama.Client()
        self.mcp_server = VolkswagenMCPServer()
        self.vw_repo = VolkswagenRepository()
        
        # Check if model is available
        self._ensure_model_available()
    
    def _ensure_model_available(self):
        """Ensure the specified model is available in Ollama."""
        try:
            # Try to list models to check if Ollama is running
            models = self.ollama_client.list()
            available_models = [model['name'] for model in models['models']]
            
            if self.model_name not in available_models:
                print(f"⚠️  Model {self.model_name} not found. Available models: {available_models}")
                print(f"🔄 Attempting to pull {self.model_name}...")
                
                # Try to pull the model
                try:
                    self.ollama_client.pull(self.model_name)
                    print(f"✅ Successfully pulled {self.model_name}")
                except Exception as e:
                    print(f"❌ Failed to pull model: {e}")
                    print(f"💡 Please run: ollama pull {self.model_name}")
                    
        except Exception as e:
            print(f"❌ Cannot connect to Ollama server: {e}")
            print("💡 Please make sure Ollama is running:")
            print("   1. Install Ollama from https://ollama.ai")
            print("   2. Run: ollama serve")
            print(f"   3. Run: ollama pull {self.model_name}")
    
    async def get_car_info_with_ai(self, user_query: str) -> str:
        """Use AI to understand user query and fetch appropriate car information."""
        try:
            # First, let the AI understand what the user wants
            analysis_prompt = f"""
You are a car information assistant. Analyze this user query and determine what action to take:

User Query: "{user_query}"

Based on the query, choose ONE of these actions:
1. "get_all_cars" - if user wants to see all cars, browse cars, or get a general overview
2. "get_specific_car" - if user wants information about a specific car model or ID
3. "search_cars" - if user wants cars with specific criteria (price, type, fuel, etc.)

Respond with ONLY the action name and if it's "get_specific_car", also provide the car ID (1-10) or model name.
If it's "search_cars", provide the search criteria.

Format your response as: ACTION|DETAILS (if any)
Example responses:
- get_all_cars
- get_specific_car|6
- get_specific_car|Golf
- search_cars|electric vehicles
- search_cars|SUV under $40000
"""
            
            # Get AI analysis
            analysis_response = self.ollama_client.generate(
                model=self.model_name,
                prompt=analysis_prompt
            )
            
            action_text = analysis_response['response'].strip()
            print(f"🤖 AI Analysis: {action_text}")
            
            # Parse the action
            action_parts = action_text.split('|')
            action = action_parts[0].strip().lower()
            details = action_parts[1].strip() if len(action_parts) > 1 else None
            
            # Execute the appropriate action
            if action == "get_all_cars":
                car_data = await self._get_all_cars_info()
            elif action == "get_specific_car":
                car_data = await self._get_specific_car_info(details)
            elif action == "search_cars":
                car_data = await self._search_cars_info(details)
            else:
                # Default to all cars if action is unclear
                car_data = await self._get_all_cars_info()
            
            # Generate AI response based on the data
            ai_response = await self._generate_ai_response(user_query, car_data)
            return ai_response
            
        except Exception as e:
            return f"❌ Error processing request: {str(e)}"
    
    async def _get_all_cars_info(self) -> str:
        """Get information about all cars using MCP tools."""
        try:
            response = await self.mcp_server.call_tool("get_all_volkswagen_cars")
            return response[0].text if response else "No car data available"
        except Exception as e:
            return f"Error getting all cars: {str(e)}"
    
    async def _get_specific_car_info(self, details: str) -> str:
        """Get information about a specific car."""
        try:
            # Try to extract car ID or find by model name
            car_id = None
            
            # Check if details is a number (car ID)
            try:
                car_id = int(details)
            except (ValueError, TypeError):
                # Details might be a model name, find the ID
                all_cars = self.vw_repo.get_all_cars()
                for car in all_cars:
                    if details and details.lower() in car['model'].lower():
                        car_id = car['id']
                        break
            
            if car_id:
                response = await self.mcp_server.call_tool("get_volkswagen_car_by_id", {"car_id": car_id})
                return response[0].text if response else f"No data for car ID {car_id}"
            else:
                return f"Could not find car matching: {details}"
                
        except Exception as e:
            return f"Error getting specific car: {str(e)}"
    
    async def _search_cars_info(self, criteria: str) -> str:
        """Search cars based on criteria."""
        try:
            # Get all cars and filter based on criteria
            all_cars = self.vw_repo.get_all_cars()
            criteria_lower = criteria.lower() if criteria else ""
            
            filtered_cars = []
            
            for car in all_cars:
                # Check various criteria
                if any(keyword in criteria_lower for keyword in [
                    'electric', 'ev', 'battery'
                ]) and car['fuel_type'] == 'Electric':
                    filtered_cars.append(car)
                elif any(keyword in criteria_lower for keyword in [
                    'suv', 'sport utility'
                ]) and 'SUV' in car['type']:
                    filtered_cars.append(car)
                elif any(keyword in criteria_lower for keyword in [
                    'sedan', 'car'
                ]) and car['type'] == 'Sedan':
                    filtered_cars.append(car)
                elif 'under' in criteria_lower:
                    # Extract price if mentioned
                    try:
                        price_limit = int(''.join(filter(str.isdigit, criteria)))
                        if car['price'] <= price_limit:
                            filtered_cars.append(car)
                    except:
                        pass
            
            # If no specific filtering worked, return all cars
            if not filtered_cars and criteria:
                return f"No cars found matching criteria: {criteria}\n\n" + await self._get_all_cars_info()
            elif not filtered_cars:
                return await self._get_all_cars_info()
            
            # Format filtered results
            result = f"🔍 Cars matching '{criteria}':\n\n"
            for car in filtered_cars:
                result += f"**{car['model']} ({car['year']})** - ${car['price']:,}\n"
                result += f"• Type: {car['type']}, Fuel: {car['fuel_type']}\n"
                result += f"• Engine: {car['engine']}, Color: {car['color']}\n\n"
            
            return result
            
        except Exception as e:
            return f"Error searching cars: {str(e)}"
    
    async def _generate_ai_response(self, user_query: str, car_data: str) -> str:
        """Generate a natural AI response based on the car data."""
        try:
            response_prompt = f"""
You are a helpful Volkswagen car sales assistant. A customer asked: "{user_query}"

Here is the relevant car information:
{car_data}

Please provide a natural, helpful response to the customer's question. Include:
1. A direct answer to their question
2. Relevant details from the car data
3. Helpful recommendations if appropriate
4. Professional but friendly tone

Keep the response concise but informative.
"""
            
            ai_response = self.ollama_client.generate(
                model=self.model_name,
                prompt=response_prompt
            )
            
            return ai_response['response']
            
        except Exception as e:
            return f"Generated response error: {str(e)}\n\nRaw data:\n{car_data}"
    
    def check_ollama_status(self) -> bool:
        """Check if Ollama server is running and model is available."""
        try:
            models = self.ollama_client.list()
            available_models = [model['name'] for model in models['models']]
            
            print(f"🟢 Ollama server is running")
            print(f"📋 Available models: {', '.join(available_models)}")
            
            if self.model_name in available_models:
                print(f"✅ Model {self.model_name} is ready")
                return True
            else:
                print(f"❌ Model {self.model_name} not found")
                return False
                
        except Exception as e:
            print(f"🔴 Ollama server not running or not accessible: {e}")
            return False
    
    async def interactive_session(self):
        """Start an interactive session with the AI assistant."""
        print("🚗🤖 Volkswagen AI Car Assistant")
        print("=" * 50)
        print(f"Using model: {self.model_name}")
        print("Type 'quit' or 'exit' to end the session")
        print("Type 'status' to check Ollama status")
        print("-" * 50)
        
        while True:
            try:
                user_input = input("\n💬 Ask about Volkswagen cars: ").strip()
                
                if user_input.lower() in ['quit', 'exit', 'q']:
                    print("👋 Goodbye!")
                    break
                
                if user_input.lower() == 'status':
                    self.check_ollama_status()
                    continue
                
                if not user_input:
                    continue
                
                print("🤔 Thinking...")
                response = await self.get_car_info_with_ai(user_input)
                print(f"\n🤖 Assistant: {response}")
                
            except KeyboardInterrupt:
                print("\n👋 Goodbye!")
                break
            except Exception as e:
                print(f"\n❌ Error: {e}")


# Demo functions
async def demo_queries():
    """Run some demo queries to show the assistant capabilities."""
    assistant = OllamaCarAssistant()
    
    print("🚗🤖 Volkswagen AI Assistant Demo")
    print("=" * 50)
    
    demo_questions = [
        "Show me all available Volkswagen cars",
        "Tell me about the ID.4 electric vehicle",
        "What SUVs do you have under $40,000?",
        "I want to see electric vehicles",
        "Show me car number 7",
        "What sedans are available?"
    ]
    
    for i, question in enumerate(demo_questions, 1):
        print(f"\n🔹 Demo Query {i}: {question}")
        print("-" * 30)
        
        try:
            response = await assistant.get_car_info_with_ai(question)
            print(f"🤖 Response: {response[:300]}{'...' if len(response) > 300 else ''}")
        except Exception as e:
            print(f"❌ Error: {e}")
        
        # Small delay between queries
        await asyncio.sleep(1)


# Main execution
async def main():
    """Main function to run the Ollama car assistant."""
    import sys
    
    if len(sys.argv) > 1:
        if sys.argv[1] == "--demo":
            await demo_queries()
        elif sys.argv[1] == "--status":
            assistant = OllamaCarAssistant()
            assistant.check_ollama_status()
        else:
            print("Usage:")
            print("  python ollama_car_client.py          # Interactive mode")
            print("  python ollama_car_client.py --demo   # Demo mode")
            print("  python ollama_car_client.py --status # Check Ollama status")
    else:
        # Interactive mode
        assistant = OllamaCarAssistant()
        
        # Check status first
        if assistant.check_ollama_status():
            await assistant.interactive_session()
        else:
            print("\n⚠️  Please set up Ollama first:")
            print("1. Install Ollama: https://ollama.ai")
            print("2. Start server: ollama serve")
            print("3. Pull model: ollama pull llama3.2:1b")


if __name__ == "__main__":
    asyncio.run(main())
