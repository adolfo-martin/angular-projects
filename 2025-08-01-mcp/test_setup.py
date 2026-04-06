"""
Test script to verify the Ollama MCP trainer setup is working correctly.
"""

import subprocess
import sys
import os
import asyncio
from pathlib import Path

def test_python_environment():
    """Test that Python environment is set up correctly"""
    print("🐍 Testing Python Environment...")
    
    # Check Python version
    print(f"   Python version: {sys.version}")
    
    # Check virtual environment
    venv_path = Path(".venv")
    if venv_path.exists():
        print("   ✅ Virtual environment found")
    else:
        print("   ❌ Virtual environment not found")
    
    return venv_path.exists()

def test_dependencies():
    """Test that all required dependencies are installed"""
    print("\n📦 Testing Dependencies...")
    
    required_packages = ["mcp", "ollama", "httpx", "pydantic"]
    all_installed = True
    
    for package in required_packages:
        try:
            __import__(package)
            print(f"   ✅ {package} is installed")
        except ImportError:
            print(f"   ❌ {package} is NOT installed")
            all_installed = False
    
    return all_installed

def test_mcp_server():
    """Test that the MCP server can be imported"""
    print("\n🔧 Testing MCP Server...")
    
    try:
        # Try to import our MCP server
        sys.path.insert(0, "src")
        from ollama_mcp_trainer import OllamaMCPServer
        print("   ✅ MCP server can be imported")
        
        # Try to create an instance
        server = OllamaMCPServer()
        print("   ✅ MCP server can be instantiated")
        
        return True
    except Exception as e:
        print(f"   ❌ MCP server error: {e}")
        return False

def test_ollama_connection():
    """Test connection to Ollama (if running)"""
    print("\n🦙 Testing Ollama Connection...")
    
    try:
        import ollama
        client = ollama.Client()
        
        # Try to list models
        models = client.list()
        print("   ✅ Ollama is running and accessible")
        
        model_count = len(models.get('models', []))
        print(f"   📊 Found {model_count} models")
        
        if model_count == 0:
            print("   💡 Tip: Pull a model with 'ollama pull llama3.2:1b'")
        
        return True
    except Exception as e:
        print(f"   ❌ Ollama connection error: {e}")
        print("   💡 Make sure Ollama is installed and running:")
        print("      - Install from: https://ollama.ai")
        print("      - Start with: ollama serve")
        return False

def test_project_files():
    """Test that all project files are present"""
    print("\n📁 Testing Project Files...")
    
    required_files = [
        "pyproject.toml",
        "README.md", 
        "src/ollama_mcp_trainer/__init__.py",
        "src/ollama_mcp_trainer/__main__.py",
        "examples/ollama_basics.py",
        "examples/mcp_client_examples.py",
        "ollama_mcp_tutorial.ipynb",
        ".github/copilot-instructions.md",
        ".vscode/mcp.json"
    ]
    
    all_present = True
    for file_path in required_files:
        if os.path.exists(file_path):
            print(f"   ✅ {file_path}")
        else:
            print(f"   ❌ {file_path} (missing)")
            all_present = False
    
    return all_present

def main():
    """Run all tests"""
    print("🧪 Ollama MCP Trainer - Setup Verification")
    print("=" * 50)
    
    tests = [
        ("Python Environment", test_python_environment),
        ("Dependencies", test_dependencies),
        ("MCP Server", test_mcp_server),
        ("Project Files", test_project_files),
        ("Ollama Connection", test_ollama_connection),
    ]
    
    results = {}
    for test_name, test_func in tests:
        try:
            results[test_name] = test_func()
        except Exception as e:
            print(f"   ❌ Unexpected error in {test_name}: {e}")
            results[test_name] = False
    
    # Summary
    print("\n" + "=" * 50)
    print("📋 Test Summary:")
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"   {status} {test_name}")
    
    print(f"\n🎯 Overall: {passed}/{total} tests passed")
    
    if passed == total:
        print("\n🎉 Everything is working perfectly!")
        print("👉 Next steps:")
        print("   1. Open 'ollama_mcp_tutorial.ipynb' for the interactive tutorial")
        print("   2. Run 'python examples/ollama_basics.py' for basic examples")
        print("   3. Try 'python examples/mcp_client_examples.py' for MCP examples")
    else:
        print("\n🔧 Some issues need to be fixed before you can start training.")
        print("📖 Check the README.md file for troubleshooting tips.")

if __name__ == "__main__":
    main()
