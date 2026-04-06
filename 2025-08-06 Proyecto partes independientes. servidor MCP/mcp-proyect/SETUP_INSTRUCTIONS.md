# 🎓 MCP Server Setup Instructions for Students

## Quick Start Guide

### 1. Environment Setup
```bash
# Navigate to project directory
cd C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect

# Activate virtual environment (Windows)
.venv\Scripts\activate

# Verify Python environment
python --version
```

### 2. Install Dependencies
```bash
# Install required packages
pip install mcp pydantic

# Verify installation
python -c "import mcp, pydantic; print('✅ All dependencies installed')"
```

### 3. Run the MCP Server

#### Method A: Command Line
```bash
# Run as module
python -m temperature_converter_mcp
```

#### Method B: VS Code Task
- Press `Ctrl+Shift+P`
- Type "Tasks: Run Task"
- Select "Run Temperature Converter MCP Server"

### 4. Test the Server

#### VS Code Integration
1. Ensure `.vscode/mcp.json` is configured correctly
2. Install MCP extension for VS Code (if available)
3. Connect and test temperature conversion tools

#### Claude Desktop Integration
1. Add configuration to `%APPDATA%/Claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "temperature-converter": {
      "command": "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect/.venv/Scripts/python.exe",
      "args": ["-m", "temperature_converter_mcp"],
      "cwd": "C:/Users/adolfo/Desktop/2025-08-06-only-mcp/mcp-proyect"
    }
  }
}
```

### 5. Troubleshooting

#### Common Issues:
- **ImportError**: Ensure virtual environment is activated
- **Path issues**: Use absolute paths in configurations
- **Permission errors**: Check file permissions on Windows

#### Debug Mode:
```bash
# Run with logging
python -m temperature_converter_mcp --log-level debug
```

### 6. Learning Resources

- 📖 **Tutorial Notebook**: `MCP_Temperature_Converter_Tutorial.ipynb`
- 📚 **Code Documentation**: `src/temperature_converter_mcp/__init__.py`
- 🔧 **Configuration Examples**: `.vscode/mcp.json`

## Project Structure
```
mcp-proyect/
├── .venv/                          # Virtual environment
├── src/temperature_converter_mcp/  # Main source code
│   ├── __init__.py                 # MCP server implementation
│   └── __main__.py                 # Module entry point
├── .vscode/                        # VS Code configuration
│   ├── mcp.json                    # MCP server config
│   └── tasks.json                  # Build tasks
├── .github/                        # GitHub configuration  
│   └── copilot-instructions.md     # AI assistant guidelines
├── pyproject.toml                  # Project configuration
├── README.md                       # Project documentation
└── MCP_Temperature_Converter_Tutorial.ipynb  # Learning notebook
```

## Next Steps
1. Open and run the tutorial notebook
2. Complete the exercises
3. Extend the server with additional tools
4. Share your implementations!

Happy learning! 🚀
