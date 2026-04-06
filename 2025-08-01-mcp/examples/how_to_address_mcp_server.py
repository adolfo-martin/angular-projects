"""
MCP Server Addressing Guide
===========================

This guide shows the exact ways to address and connect to your MCP server
from different types of applications.
"""

import asyncio
import subprocess
import json
import sys
from pathlib import Path

# ============================================================================
# METHOD 1: Direct Command Line (Terminal/Shell)
# ============================================================================

def method_1_command_line():
    """
    How to address the MCP server from command line or shell scripts
    """
    print("🖥️  METHOD 1: Command Line Address")
    print("=" * 50)
    
    print("From Windows Command Prompt:")
    print("   cd C:\\Users\\adolfo\\Desktop\\2025-08-01-mcp")
    print("   python -m src.ollama_mcp_trainer")
    print()
    
    print("From PowerShell:")
    print("   Set-Location 'C:\\Users\\adolfo\\Desktop\\2025-08-01-mcp'")
    print("   python -m src.ollama_mcp_trainer")
    print()
    
    print("From VS Code Terminal:")
    print("   python -m src.ollama_mcp_trainer")
    print()
    
    print("💡 The server will wait for JSON-RPC input on stdin")

# ============================================================================
# METHOD 2: Python Subprocess (Programmatic)
# ============================================================================

class Method2PythonSubprocess:
    """
    How to address the MCP server from Python applications
    """
    
    def __init__(self):
        self.server_address = [
            sys.executable,  # Path to Python executable
            "-m", 
            "src.ollama_mcp_trainer"
        ]
        self.working_directory = Path(__file__).parent.parent
    
    async def demonstrate_addressing(self):
        """Show how to address the server from Python"""
        print("\n🐍 METHOD 2: Python Subprocess Address")
        print("=" * 50)
        
        print(f"Server Address (command): {' '.join(self.server_address)}")
        print(f"Working Directory: {self.working_directory}")
        print()
        
        # Show how to start the server
        print("Starting server process...")
        process = await asyncio.create_subprocess_exec(
            *self.server_address,
            stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            cwd=self.working_directory
        )
        
        print(f"✅ Server process started with PID: {process.pid}")
        print(f"   stdin: {process.stdin}")
        print(f"   stdout: {process.stdout}")
        print(f"   stderr: {process.stderr}")
        
        # Initialize MCP connection
        init_message = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {"tools": {}},
                "clientInfo": {"name": "address-demo", "version": "1.0.0"}
            }
        }
        
        # Send initialization
        init_json = json.dumps(init_message) + "\n"
        process.stdin.write(init_json.encode())
        await process.stdin.drain()
        
        # Read response
        response_line = await process.stdout.readline()
        response = json.loads(response_line.decode().strip())
        
        print(f"✅ Server responded: {response.get('result', {}).get('protocolVersion', 'OK')}")
        
        # Clean up
        process.terminate()
        await process.wait()
        print("🛑 Server stopped")

# ============================================================================
# METHOD 3: Configuration File Address
# ============================================================================

def method_3_configuration_file():
    """
    How to address the server via configuration files (like VS Code settings)
    """
    print("\n⚙️  METHOD 3: Configuration File Address")
    print("=" * 50)
    
    print("In .vscode/mcp.json:")
    mcp_config = {
        "servers": {
            "ollama-mcp-trainer": {
                "type": "stdio",
                "command": "python",
                "args": ["-m", "src.ollama_mcp_trainer"]
            }
        }
    }
    print(json.dumps(mcp_config, indent=2))
    print()
    
    print("In VS Code settings.json:")
    vscode_config = {
        "mcp.servers": {
            "ollama-mcp-trainer": {
                "command": "python",
                "args": ["-m", "src.ollama_mcp_trainer"],
                "cwd": "${workspaceFolder}"
            }
        }
    }
    print(json.dumps(vscode_config, indent=2))

# ============================================================================
# METHOD 4: Environment Variables Address
# ============================================================================

def method_4_environment_variables():
    """
    How to address the server using environment variables
    """
    print("\n🌍 METHOD 4: Environment Variables Address")  
    print("=" * 50)
    
    print("Set environment variables:")
    print("   MCP_SERVER_COMMAND=python")
    print("   MCP_SERVER_ARGS=-m src.ollama_mcp_trainer")
    print("   MCP_SERVER_CWD=C:\\Users\\adolfo\\Desktop\\2025-08-01-mcp")
    print()
    
    print("Then use in code:")
    print("   import os")
    print("   command = os.environ.get('MCP_SERVER_COMMAND')")
    print("   args = os.environ.get('MCP_SERVER_ARGS').split()")
    print("   server_address = [command] + args")

# ============================================================================
# METHOD 5: HTTP Wrapper Address (Advanced)
# ============================================================================

def method_5_http_wrapper():
    """
    How to address the server via HTTP wrapper (for web applications)
    """
    print("\n🌐 METHOD 5: HTTP Wrapper Address")
    print("=" * 50)
    
    print("Create HTTP wrapper service that addresses MCP server:")
    print()
    print("1. Start HTTP server (e.g., Flask/FastAPI):")
    print("   http://localhost:8080")
    print()
    print("2. HTTP endpoints that forward to MCP:")
    print("   GET  /mcp/tools           -> List tools")
    print("   POST /mcp/tools/call      -> Call tool")
    print("   POST /mcp/chat            -> Chat with Ollama")
    print()
    print("3. External apps address via HTTP:")
    print("   curl http://localhost:8080/mcp/tools")
    print("   curl -X POST http://localhost:8080/mcp/tools/call \\")
    print("        -d '{\"tool\": \"greet\", \"args\": {\"name\": \"User\"}}'")

# ============================================================================
# PRACTICAL EXAMPLES
# ============================================================================

async def practical_example_1_simple_client():
    """
    Practical example: Simple MCP client that addresses the server
    """
    print("\n🛠️  PRACTICAL EXAMPLE 1: Simple Client")
    print("=" * 50)
    
    # Server address - THIS IS HOW YOU ADDRESS YOUR MCP SERVER
    server_address = [
        sys.executable,           # Python executable path
        "-m",                     # Module flag
        "src.ollama_mcp_trainer"  # Your MCP server module
    ]
    
    print(f"Server Address: {' '.join(server_address)}")
    
    try:
        # Start the server process
        print("📡 Connecting to MCP server...")
        process = await asyncio.create_subprocess_exec(
            *server_address,
            stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        
        print(f"✅ Connected! Server PID: {process.pid}")
        
        # Send a simple request
        request = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {"tools": {}},
                "clientInfo": {"name": "simple-client", "version": "1.0.0"}
            }
        }
        
        # Address the server by writing to its stdin
        request_json = json.dumps(request) + "\n"
        process.stdin.write(request_json.encode())
        await process.stdin.drain()
        
        # Read response from server's stdout
        response_line = await process.stdout.readline()
        if response_line:
            response = json.loads(response_line.decode().strip())
            print(f"✅ Server response: Connection established")
        
        # Clean up
        process.terminate()
        await process.wait()
        
    except Exception as e:
        print(f"❌ Error addressing server: {e}")

def practical_example_2_different_languages():
    """
    Show how to address the MCP server from different programming languages
    """
    print("\n🌍 PRACTICAL EXAMPLE 2: Different Languages")
    print("=" * 50)
    
    examples = {
        "JavaScript/Node.js": '''
const { spawn } = require('child_process');

// Server Address
const serverAddress = ['python', '-m', 'src.ollama_mcp_trainer'];

// Connect to server
const mcpServer = spawn(serverAddress[0], serverAddress.slice(1));
        ''',
        
        "Java": '''
// Server Address
String[] serverAddress = {"python", "-m", "src.ollama_mcp_trainer"};

// Connect to server
ProcessBuilder pb = new ProcessBuilder(serverAddress);
Process mcpServer = pb.start();
        ''',
        
        "C#": '''
// Server Address
string[] serverAddress = {"python", "-m", "src.ollama_mcp_trainer"};

// Connect to server
Process mcpServer = Process.Start(new ProcessStartInfo {
    FileName = serverAddress[0],
    Arguments = string.Join(" ", serverAddress.Skip(1))
});
        ''',
        
        "Go": '''
// Server Address
serverAddress := []string{"python", "-m", "src.ollama_mcp_trainer"}

// Connect to server
cmd := exec.Command(serverAddress[0], serverAddress[1:]...)
        ''',
        
        "Rust": '''
// Server Address
let server_address = vec!["python", "-m", "src.ollama_mcp_trainer"];

// Connect to server
let mut child = Command::new(&server_address[0])
    .args(&server_address[1..])
    .spawn()?;
        '''
    }
    
    for language, code in examples.items():
        print(f"{language}:")
        print(code)
        print()

async def main():
    """
    Demonstrate all the ways to address your MCP server
    """
    print("🎯 MCP SERVER ADDRESSING GUIDE")
    print("=" * 60)
    print("This shows you EXACTLY how to address your MCP server")
    print("from different applications and programming languages.")
    print()
    
    # Method 1: Command Line
    method_1_command_line()
    
    # Method 2: Python Subprocess  
    python_method = Method2PythonSubprocess()
    await python_method.demonstrate_addressing()
    
    # Method 3: Configuration Files
    method_3_configuration_file()
    
    # Method 4: Environment Variables
    method_4_environment_variables()
    
    # Method 5: HTTP Wrapper
    method_5_http_wrapper()
    
    # Practical Examples
    await practical_example_1_simple_client()
    practical_example_2_different_languages()
    
    print("=" * 60)
    print("🎯 KEY TAKEAWAYS:")
    print("1. 📍 Server Address: 'python -m src.ollama_mcp_trainer'")
    print("2. 📡 Communication: JSON-RPC over stdin/stdout")
    print("3. 🗂️  Working Directory: Your project root folder")
    print("4. 🔌 Connection: Spawn subprocess, then send JSON messages")
    print("5. 🌐 For web apps: Wrap in HTTP service")
    print()
    print("✨ Your MCP server is ready to be addressed by ANY application!")

if __name__ == "__main__":
    asyncio.run(main())
