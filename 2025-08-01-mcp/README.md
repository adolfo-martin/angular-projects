# 🚀 Ollama & MCP Server Training Project

A comprehensive Python workspace for learning and practicing with **Ollama** and **MCP (Model Context Protocol) servers**.

## 🎯 What You'll Learn

- 🔧 Install and configure Ollama locally
- 📦 Set up the MCP Python SDK
- 🏗️ Build custom MCP servers from scratch
- 🔌 Connect Ollama with your MCP servers
- 🛠️ Implement advanced MCP tools and resources
- 🚀 Deploy and monitor MCP servers

## 📁 Project Structure

```
2025-08-01-mcp/
├── src/
│   └── ollama_mcp_trainer/          # Main MCP server implementation
│       └── __init__.py              # Ollama-integrated MCP server
├── examples/
│   ├── ollama_basics.py             # Basic Ollama usage examples
│   └── mcp_client_examples.py       # MCP client interaction examples
├── ollama_mcp_tutorial.ipynb        # Interactive Jupyter tutorial
├── pyproject.toml                   # Project dependencies
├── README.md                        # This file
└── .vscode/
    └── mcp.json                     # MCP server configuration
```

## 🚀 Quick Start

### 1. Install Ollama
First, install Ollama on your system:
- **Windows**: Download from [https://ollama.ai](https://ollama.ai)
- **macOS**: `brew install ollama`
- **Linux**: `curl -fsSL https://ollama.ai/install.sh | sh`

### 2. Start Ollama Service
```bash
ollama serve
```

### 3. Pull a Model for Testing
```bash
ollama pull llama3.2:1b
```

### 4. Install Python Dependencies
This project already has a virtual environment configured. The dependencies are:
- `mcp>=1.0.0` - Model Context Protocol SDK
- `ollama>=0.3.0` - Ollama Python client
- `httpx>=0.27.0` - HTTP client for async requests
- `pydantic>=2.0.0` - Data validation

### 5. Start Learning!
Open the interactive tutorial:
- **Jupyter Notebook**: `ollama_mcp_tutorial.ipynb`
- **Python Examples**: Check the `examples/` folder

## 🧪 Running Examples

### Basic Ollama Examples
```bash
python examples/ollama_basics.py
```

### MCP Client Examples
```bash
python examples/mcp_client_examples.py
```

### Run the MCP Server
```bash
python -m src.ollama_mcp_trainer
```

## 🛠️ Available MCP Tools

The training MCP server includes these tools:

### Basic Tools
- **`greet`** - Say hello to someone
- **`calculate`** - Perform simple math operations

### Ollama Integration Tools  
- **`list_models`** - List all available Ollama models
- **`generate_text`** - Generate text using an Ollama model
- **`chat`** - Have conversations with Ollama models
- **`pull_model`** - Download new models from Ollama registry

## 📚 Learning Path

1. **Start Here**: Open `ollama_mcp_tutorial.ipynb` for an interactive tutorial
2. **Basic Examples**: Run `examples/ollama_basics.py` to learn Ollama fundamentals
3. **MCP Concepts**: Explore `examples/mcp_client_examples.py` for MCP interactions
4. **Build Your Own**: Modify `src/ollama_mcp_trainer/__init__.py` to add custom tools
5. **Deploy**: Learn about production deployment and monitoring

## 🔧 Development

### Adding New Tools
1. Add the tool definition to the `list_tools()` handler
2. Implement the tool logic as a new method
3. Add the tool call to the `call_tool()` handler
4. Test your tool using the tutorial notebook

### Example: Adding a Weather Tool
```python
Tool(
    name="get_weather",
    description="Get current weather for a location",
    inputSchema={
        "type": "object",
        "properties": {
            "location": {"type": "string", "description": "City name"},
        },
        "required": ["location"],
    },
)
```

## 🐛 Troubleshooting

### Ollama Not Found
- Make sure Ollama is installed and in your PATH
- Try running `ollama --version` in your terminal
- On Windows, you may need to restart your terminal after installation

### MCP Server Connection Issues
- Ensure all dependencies are installed
- Check that your Python environment is activated
- Verify the MCP server script runs without errors

### Model Not Available
- Pull the model first: `ollama pull model-name`
- Check available models: `ollama list`
- Use smaller models for testing (e.g., `llama3.2:1b`)

## 📖 Resources

- **MCP Documentation**: [https://modelcontextprotocol.io](https://modelcontextprotocol.io)
- **Ollama Documentation**: [https://ollama.ai/docs](https://ollama.ai/docs)
- **Python MCP SDK**: [https://github.com/modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk)
- **MCP Examples**: [https://github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## 🤝 Contributing

This is a learning project! Feel free to:
- Add new example tools
- Improve the tutorial content
- Create additional training materials
- Share your custom MCP servers

## 📝 License

This project is for educational purposes. Feel free to use and modify for your learning journey!

---

**Happy Learning! 🎉**

Start with the Jupyter notebook tutorial and work your way through the examples. Before you know it, you'll be building powerful MCP servers that extend the capabilities of AI models!
