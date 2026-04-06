# 🔌 How External Apps Communicate with MCP Servers

This guide explains how external applications can communicate with your MCP server to use its tools.

## 🎯 Quick Answer

MCP servers use **JSON-RPC over STDIO** by default. External apps:
1. **Start** the MCP server as a subprocess
2. **Send** JSON-RPC requests via stdin
3. **Receive** JSON-RPC responses via stdout
4. **Call tools** using the `tools/call` method

## 📡 Communication Protocol

### Basic JSON-RPC Messages

**Initialize Connection:**
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
        "protocolVersion": "2024-11-05",
        "capabilities": {"tools": {}},
        "clientInfo": {"name": "my-app", "version": "1.0.0"}
    }
}
```

**List Available Tools:**
```json
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/list"
}
```

**Call a Tool:**
```json
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "tools/call",
    "params": {
        "name": "greet",
        "arguments": {"name": "World"}
    }
}
```

## 🏗️ Integration Patterns

### 1. 🖥️ Desktop Applications

**Best for:** Native apps, CLI tools, local integrations

```python
# Python example
import subprocess
import json

# Start MCP server
process = subprocess.Popen(
    ["python", "-m", "src.ollama_mcp_trainer"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    text=True
)

# Send request
request = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {"name": "greet", "arguments": {"name": "Desktop User"}}
}

process.stdin.write(json.dumps(request) + "\n")
process.stdin.flush()

# Read response
response = json.loads(process.stdout.readline())
print(response["result"])
```

### 2. 🌐 Web Applications

**Best for:** Web apps, APIs, microservices

Create an HTTP wrapper around your MCP server:

```python
# Flask/FastAPI wrapper example
from flask import Flask, request, jsonify
import subprocess
import json

app = Flask(__name__)

@app.route('/api/tools/<tool_name>', methods=['POST'])
def call_tool(tool_name):
    arguments = request.get_json()
    
    # Call MCP server
    process = subprocess.Popen(...)  # Start MCP server
    # Send request and get response
    
    return jsonify({"result": "Tool response"})
```

### 3. 📱 Mobile Applications

**Best for:** React Native, Flutter, native mobile apps

```javascript
// React Native example
import { exec } from 'child_process';

const callMCPTool = async (toolName, arguments) => {
    return new Promise((resolve, reject) => {
        const process = exec('python -m src.ollama_mcp_trainer');
        
        const request = {
            jsonrpc: "2.0",
            id: Date.now(),
            method: "tools/call",
            params: { name: toolName, arguments }
        };
        
        process.stdin.write(JSON.stringify(request) + '\n');
        
        process.stdout.on('data', (data) => {
            const response = JSON.parse(data);
            resolve(response.result);
        });
    });
};
```

### 4. 🔧 IDE Extensions

**Best for:** VS Code, IntelliJ, Vim plugins

```typescript
// VS Code extension example
import * as vscode from 'vscode';
import { spawn } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.callMCP', async () => {
        const mcpServer = spawn('python', ['-m', 'src.ollama_mcp_trainer']);
        
        // Send JSON-RPC request
        const request = {
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: { name: "greet", arguments: { name: "VS Code User" } }
        };
        
        mcpServer.stdin.write(JSON.stringify(request) + '\n');
        
        mcpServer.stdout.on('data', (data) => {
            const response = JSON.parse(data.toString());
            vscode.window.showInformationMessage(response.result);
        });
    });
    
    context.subscriptions.push(disposable);
}
```

## 🔧 Language-Specific Examples

### Python
```python
# See examples/mcp_communication.py for full implementation
from examples.mcp_communication import MCPJSONRPCClient

client = MCPJSONRPCClient(["python", "-m", "src.ollama_mcp_trainer"])
await client.start_server()
result = await client.call_tool("greet", {"name": "Python User"})
await client.stop_server()
```

### JavaScript/Node.js
```javascript
const { spawn } = require('child_process');

const mcpServer = spawn('python', ['-m', 'src.ollama_mcp_trainer']);

function callTool(toolName, args) {
    const request = {
        jsonrpc: "2.0",
        id: Date.now(),
        method: "tools/call",
        params: { name: toolName, arguments: args }
    };
    
    mcpServer.stdin.write(JSON.stringify(request) + '\n');
    
    return new Promise((resolve) => {
        mcpServer.stdout.once('data', (data) => {
            const response = JSON.parse(data.toString());
            resolve(response.result);
        });
    });
}
```

### Java
```java
import java.io.*;
import java.lang.ProcessBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;

public class MCPClient {
    private Process mcpProcess;
    private ObjectMapper mapper = new ObjectMapper();
    
    public void startServer() throws IOException {
        ProcessBuilder pb = new ProcessBuilder("python", "-m", "src.ollama_mcp_trainer");
        mcpProcess = pb.start();
    }
    
    public String callTool(String toolName, Map<String, Object> arguments) throws IOException {
        Map<String, Object> request = Map.of(
            "jsonrpc", "2.0",
            "id", System.currentTimeMillis(),
            "method", "tools/call",
            "params", Map.of("name", toolName, "arguments", arguments)
        );
        
        String requestJson = mapper.writeValueAsString(request) + "\n";
        mcpProcess.getOutputStream().write(requestJson.getBytes());
        mcpProcess.getOutputStream().flush();
        
        BufferedReader reader = new BufferedReader(new InputStreamReader(mcpProcess.getInputStream()));
        String response = reader.readLine();
        
        return response; // Parse JSON to extract result
    }
}
```

### C#
```csharp
using System;
using System.Diagnostics;
using System.Text.Json;

public class MCPClient
{
    private Process mcpProcess;
    
    public async Task StartServerAsync()
    {
        mcpProcess = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "python",
                Arguments = "-m src.ollama_mcp_trainer",
                UseShellExecute = false,
                RedirectStandardInput = true,
                RedirectStandardOutput = true
            }
        };
        mcpProcess.Start();
    }
    
    public async Task<string> CallToolAsync(string toolName, object arguments)
    {
        var request = new
        {
            jsonrpc = "2.0",
            id = DateTimeOffset.Now.ToUnixTimeMilliseconds(),
            method = "tools/call",
            @params = new { name = toolName, arguments }
        };
        
        string requestJson = JsonSerializer.Serialize(request) + "\n";
        await mcpProcess.StandardInput.WriteAsync(requestJson);
        await mcpProcess.StandardInput.FlushAsync();
        
        string response = await mcpProcess.StandardOutput.ReadLineAsync();
        return response;
    }
}
```

## 🚀 Getting Started

1. **Try the examples:**
   ```bash
   python examples/mcp_communication.py
   python examples/mcp_integration_patterns.py
   ```

2. **Your MCP server provides these tools:**
   - `greet` - Say hello to someone
   - `calculate` - Perform math operations  
   - `list_models` - List Ollama models
   - `generate_text` - Generate text with Ollama
   - `chat` - Chat with Ollama models
   - `pull_model` - Download Ollama models

3. **Start building your integration:**
   - Choose the pattern that fits your app architecture
   - Use the language-specific examples above
   - Test with simple tools first (like `greet`)
   - Add error handling and proper JSON-RPC validation

## 🛠️ Advanced Topics

### Connection Pooling
For high-throughput applications, maintain a pool of MCP server processes.

### Error Handling
Always handle JSON-RPC errors and server process failures.

### Authentication
For production, add authentication to your MCP server calls.

### Monitoring
Log MCP requests/responses for debugging and monitoring.

### Performance
Consider caching frequently-used tool results.

## 📚 Next Steps

- 📓 Complete the interactive tutorial in `ollama_mcp_tutorial.ipynb`
- 🔧 Run the example code in `examples/`
- 🏗️ Build your own MCP client for your specific application
- 🚀 Deploy your MCP server for production use

---

**The key insight:** MCP servers are just processes that speak JSON-RPC. Any application that can spawn processes and handle JSON can integrate with MCP servers!
