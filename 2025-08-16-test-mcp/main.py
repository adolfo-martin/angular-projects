#!/usr/bin/env python3
"""
Main Python script for the Volkswagen Car Assistant project.
Terminal-based user interface for interacting with Ollama server and MCP tools.
"""

import asyncio
import sys
import os
from typing import Optional

# Import our components
try:
    from ollama_car_client import OllamaCarAssistant
    from volkswagen_repository import VolkswagenRepository
    from volkswagen_mcp_server import VolkswagenMCPServer
except ImportError as e:
    print(f"❌ Error importing modules: {e}")
    print("Please ensure all required files are in the same directory.")
    sys.exit(1)


class VolkswagenTerminalUI:
    """Terminal-based user interface for the Volkswagen car assistant."""
    
    def __init__(self):
        """Initialize the terminal UI."""
        self.assistant = None
        self.repository = None
        self.server = None
        
    async def initialize(self):
        """Initialize all components."""
        try:
            print("🔧 Initializing Volkswagen Car Assistant...")
            
            # Initialize components
            self.repository = VolkswagenRepository()
            self.server = VolkswagenMCPServer()
            self.assistant = OllamaCarAssistant()
            
            print("✅ Components initialized successfully!")
            return True
            
        except Exception as e:
            print(f"❌ Error initializing components: {e}")
            return False
    
    def show_welcome_banner(self):
        """Display the welcome banner."""
        print("\n" + "=" * 70)
        print("🚗🤖 VOLKSWAGEN AI CAR ASSISTANT")
        print("=" * 70)
        print("Welcome to your intelligent Volkswagen car information system!")
        print("Ask questions about our 10 Volkswagen models and get AI-powered answers.")
        print("\n📋 Available Information:")
        print("   • Complete car specifications (engine, fuel type, price)")
        print("   • Search by model, type, price range, or fuel type")
        print("   • Detailed information about specific vehicles")
        print("   • AI-powered recommendations and insights")
        print("\n💡 Example Questions:")
        print("   • 'Show me all available cars'")
        print("   • 'Tell me about electric vehicles'")
        print("   • 'What SUVs do you have under $40,000?'")
        print("   • 'Give me details about the Golf'")
        print("   • 'Which car has the best fuel efficiency?'")
        print("\n🔤 Commands:")
        print("   • 'help' - Show this information again")
        print("   • 'status' - Check Ollama server status")
        print("   • 'list' - Show all cars without AI processing")
        print("   • 'quit' or 'exit' - Exit the application")
        print("=" * 70)
    
    def show_help(self):
        """Show help information."""
        print("\n📖 HELP - How to use the Volkswagen Car Assistant")
        print("-" * 50)
        print("🎯 Purpose: Get information about Volkswagen cars using AI")
        print("\n🔍 Types of questions you can ask:")
        print("   1. General browsing: 'Show me all cars', 'What do you have?'")
        print("   2. Specific models: 'Tell me about the ID.4', 'Golf information'")
        print("   3. By criteria: 'Electric cars', 'SUVs under $35k', 'Sedans'")
        print("   4. Comparisons: 'Compare electric vs gas', 'Cheapest options'")
        print("\n🚗 Available Cars (IDs 1-10):")
        
        try:
            cars = self.repository.get_all_cars()
            for car in cars:
                print(f"   • {car['id']:2d}. {car['model']} ({car['year']}) - {car['type']} - ${car['price']:,}")
        except Exception as e:
            print(f"   ❌ Error loading car list: {e}")
        
        print("\n🤖 AI Features:")
        print("   • Natural language understanding")
        print("   • Contextual recommendations")
        print("   • Detailed explanations")
        print("   • Price and feature comparisons")
        print("\n💻 Technical Commands:")
        print("   • 'status' - Check if Ollama server is running")
        print("   • 'list' - Show raw car data without AI processing")
        print("   • 'quit'/'exit' - Close the application")
    
    async def handle_special_commands(self, user_input: str) -> bool:
        """Handle special commands. Returns True if command was handled."""
        command = user_input.lower().strip()
        
        if command == "help":
            self.show_help()
            return True
        
        elif command == "status":
            print("\n🔍 Checking system status...")
            if self.assistant:
                is_running = self.assistant.check_ollama_status()
                if not is_running:
                    print("\n⚠️  Ollama server is not running.")
                    print("📝 To start Ollama:")
                    print("   1. Install from: https://ollama.ai")
                    print("   2. Run: ollama serve")
                    print("   3. Pull model: ollama pull llama3.2:1b")
                    print("\n💡 You can still use basic features without Ollama!")
            return True
        
        elif command == "list":
            print("\n📋 Raw Car Data (without AI processing):")
            print("-" * 50)
            try:
                cars = self.repository.get_all_cars()
                for car in cars:
                    print(f"\n🚗 {car['model']} ({car['year']})")
                    print(f"   ID: {car['id']} | Type: {car['type']}")
                    print(f"   Engine: {car['engine']} | Fuel: {car['fuel_type']}")
                    print(f"   Price: ${car['price']:,} | Color: {car['color']}")
            except Exception as e:
                print(f"❌ Error loading cars: {e}")
            return True
        
        elif command in ["quit", "exit", "q"]:
            print("\n👋 Thank you for using Volkswagen Car Assistant!")
            print("🚗 Drive safely!")
            return True
        
        return False
    
    async def process_question(self, question: str) -> str:
        """Process a user question and return the response."""
        try:
            if self.assistant:
                # Try to use AI assistant first
                response = await self.assistant.get_car_info_with_ai(question)
                return response
            else:
                # Fallback to basic responses
                return await self.basic_question_handler(question)
                
        except Exception as e:
            # Fallback to basic handling if AI fails
            print(f"⚠️  AI processing failed: {e}")
            print("🔄 Falling back to basic search...")
            return await self.basic_question_handler(question)
    
    async def basic_question_handler(self, question: str) -> str:
        """Basic question handler without AI (fallback)."""
        question_lower = question.lower()
        
        try:
            # Simple keyword-based responses
            if any(word in question_lower for word in ["all", "show", "list", "available"]):
                response = await self.server.call_tool("get_all_volkswagen_cars")
                return response[0].text if response else "No data available"
            
            elif any(word in question_lower for word in ["electric", "ev", "battery"]):
                cars = self.repository.get_all_cars()
                electric_cars = [car for car in cars if car['fuel_type'] == 'Electric']
                result = "🔋 Electric Volkswagen Vehicles:\n\n"
                for car in electric_cars:
                    result += f"• {car['model']} ({car['year']}) - ${car['price']:,}\n"
                    result += f"  Type: {car['type']}, Color: {car['color']}\n\n"
                return result
            
            elif any(word in question_lower for word in ["suv", "sport utility"]):
                cars = self.repository.get_all_cars()
                suv_cars = [car for car in cars if "SUV" in car['type']]
                result = "🚙 Volkswagen SUVs:\n\n"
                for car in suv_cars:
                    result += f"• {car['model']} ({car['year']}) - ${car['price']:,}\n"
                    result += f"  Engine: {car['engine']}, Color: {car['color']}\n\n"
                return result
            
            # Try to find specific car by name
            cars = self.repository.get_all_cars()
            for car in cars:
                if car['model'].lower() in question_lower:
                    response = await self.server.call_tool("get_volkswagen_car_by_id", {"car_id": car['id']})
                    return response[0].text if response else f"Found {car['model']} but couldn't get details"
            
            # Default response
            return ("I'm not sure how to answer that question. Try asking about:\n"
                   "• 'Show me all cars'\n"
                   "• 'Tell me about electric vehicles'\n"
                   "• A specific model like 'Golf' or 'ID.4'\n"
                   "• Type 'help' for more information")
        
        except Exception as e:
            return f"❌ Error processing question: {e}"
    
    async def run_interactive_session(self):
        """Run the main interactive session."""
        print("\n🚀 Starting interactive session...")
        print("💬 Ask me anything about Volkswagen cars!")
        print("⌨️  Type your question below (or 'help' for assistance)")
        
        while True:
            try:
                # Get user input
                print("\n" + "-" * 50)
                user_input = input("🤔 Your question: ").strip()
                
                if not user_input:
                    print("💭 Please enter a question or command.")
                    continue
                
                # Handle special commands
                if await self.handle_special_commands(user_input):
                    if user_input.lower() in ["quit", "exit", "q"]:
                        break
                    continue
                
                # Process the question
                print("\n🔍 Processing your question...")
                response = await self.process_question(user_input)
                
                # Display response
                print(f"\n🤖 Assistant Response:")
                print("─" * 30)
                print(response)
                
            except KeyboardInterrupt:
                print("\n\n⚠️  Session interrupted by user.")
                print("👋 Goodbye!")
                break
            except Exception as e:
                print(f"\n❌ Unexpected error: {e}")
                print("🔄 Please try again or type 'quit' to exit.")


async def main():
    """Main function to run the application."""
    # Initialize the terminal UI
    ui = VolkswagenTerminalUI()
    
    # Show welcome banner
    ui.show_welcome_banner()
    
    # Initialize components
    print("\n🔧 Setting up the car assistant...")
    if not await ui.initialize():
        print("❌ Failed to initialize. Please check the error messages above.")
        print("💡 You can still try running with basic functionality.")
        
        # Ask if user wants to continue
        try:
            choice = input("\n❓ Continue with limited functionality? (y/N): ").strip().lower()
            if choice not in ['y', 'yes']:
                print("👋 Goodbye!")
                return
        except KeyboardInterrupt:
            print("\n👋 Goodbye!")
            return
    
    # Run the interactive session
    try:
        await ui.run_interactive_session()
    except Exception as e:
        print(f"\n❌ Fatal error: {e}")
        print("📞 Please report this issue if it persists.")
    
    print("\n🚗 Session ended. Thank you for using Volkswagen Car Assistant!")


if __name__ == "__main__":
    try:
        # Check Python version
        if sys.version_info < (3, 7):
            print("❌ Python 3.7 or higher is required")
            sys.exit(1)
        
        # Run the main application
        asyncio.run(main())
        
    except KeyboardInterrupt:
        print("\n👋 Application interrupted by user. Goodbye!")
    except Exception as e:
        print(f"\n💥 Critical error: {e}")
        print("📞 Please check your setup and try again.")
        sys.exit(1)
