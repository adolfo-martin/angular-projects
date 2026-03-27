# Pokemon MCP Server

A Model Context Protocol (MCP) server for managing Pokemon data. This project demonstrates how to create an MCP server with tools for retrieving Pokemon information.

## 🎯 Features

- **Get All Pokemon**: Retrieve the complete list of Pokemon with their details
- **Filter by Type**: Get Pokemon filtered by their type (Electric, Fire, Water, etc.)
- **Pokemon Details**: Get detailed information about a specific Pokemon by name or ID

## 📊 Pokemon Data

The server includes a mock data store with 10 Pokemon, each containing:
- **ID**: Unique identifier
- **Name**: Pokemon name
- **Type**: Pokemon type (Electric, Fire, Water, Grass, Psychic, Fighting, Ghost, Dragon)
- **Weight**: Weight in kilograms
- **Height**: Height in meters  
- **Image URL**: Link to Pokemon sprite image

### Available Pokemon:
1. Pikachu (Electric) - 6.0kg, 0.4m
2. Charizard (Fire) - 90.5kg, 1.7m
3. Blastoise (Water) - 85.5kg, 1.6m
4. Venusaur (Grass) - 100.0kg, 2.0m
5. Gyarados (Water) - 235.0kg, 6.5m
6. Alakazam (Psychic) - 48.0kg, 1.5m
7. Machamp (Fighting) - 130.0kg, 1.6m
8. Gengar (Ghost) - 40.5kg, 1.5m
9. Dragonite (Dragon) - 210.0kg, 2.2m
10. Mewtwo (Psychic) - 122.0kg, 2.0m

## 🚀 Setup

### Prerequisites
- Python 3.8 or higher
- Virtual environment (already configured)

### Installation
The virtual environment and dependencies are already set up in this project.

### Installed Packages
- `pydantic` - For data validation and serialization
- `fastapi` - Web framework (available if needed)
- `uvicorn` - ASGI server (available if needed)
- `aiofiles` - Async file operations

## 🛠️ Available Tools

### 1. get_all_pokemon
- **Description**: Retrieve all Pokemon from the data store
- **Parameters**: None
- **Returns**: List of all Pokemon with their complete information

### 2. get_pokemon_by_type
- **Description**: Retrieve Pokemon filtered by their type
- **Parameters**: 
  - `pokemon_type` (string): The type to filter by (e.g., "Electric", "Fire", "Water")
- **Returns**: List of Pokemon matching the specified type

### 3. get_pokemon_details
- **Description**: Get detailed information about a specific Pokemon
- **Parameters**:
  - `identifier` (string): Pokemon name or ID
- **Returns**: Detailed information about the specified Pokemon, including BMI calculation

## 🎮 Usage

### Running the MCP Server
The server follows the Model Context Protocol specification and communicates via JSON-RPC 2.0 over stdin/stdout.

```bash
# Activate the virtual environment (Windows)
.venv\Scripts\activate

# Run the server
python pokemon_mcp_server.py
```

### Running the Demo
To see the server in action with a simple demonstration:

```bash
python demo.py
```

### Running Tests
To test the server functionality:

```bash
python test_mcp_server.py
```

## 📡 Protocol Details

The server implements the Model Context Protocol (MCP) using JSON-RPC 2.0. It supports:

- **initialize**: Server initialization and capability negotiation
- **tools/list**: List available tools
- **tools/call**: Execute a specific tool

### Example Requests

#### Initialize the server:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "capabilities": {},
    "clientInfo": {
      "name": "client-name",
      "version": "1.0.0"
    }
  }
}
```

#### Get all Pokemon:
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "get_all_pokemon",
    "arguments": {}
  }
}
```

#### Get Pokemon by type:
```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "get_pokemon_by_type",
    "arguments": {
      "pokemon_type": "Electric"
    }
  }
}
```

#### Get Pokemon details:
```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "tools/call",
  "params": {
    "name": "get_pokemon_details",
    "arguments": {
      "identifier": "Pikachu"
    }
  }
}
```

## 📁 Project Structure

```
pokemon-mcp-server/
├── .venv/                    # Virtual environment
├── pokemon_mcp_server.py     # Main MCP server implementation
├── demo.py                   # Interactive demonstration
├── test_mcp_server.py        # Test script
├── requirements.txt          # Python dependencies
└── README.md                 # This file
```

## 🔧 Development

### Virtual Environment
The project uses a Python virtual environment located in `.venv/`. To activate it:

**Windows:**
```bash
.venv\Scripts\activate
```

**macOS/Linux:**
```bash
source .venv/bin/activate
```

### Adding New Pokemon
To add new Pokemon to the data store, modify the `POKEMON_DATA` list in `pokemon_mcp_server.py`:

```python
POKEMON_DATA.append(
    Pokemon(
        id=11,
        name="NewPokemon",
        type="SomeType",
        weight=50.0,
        height=1.0,
        image_url="https://example.com/image.png"
    )
)
```

### Adding New Tools
To add new tools to the MCP server:

1. Add the tool definition in the `tools/list` response
2. Implement the tool logic in the `handle_tool_call` method
3. Update this README with the new tool documentation

## 🤝 Contributing

This is a learning project for understanding MCP server development. Feel free to experiment with:

- Adding new Pokemon data
- Implementing additional tools
- Improving error handling
- Adding data persistence
- Creating a web interface

## 📚 Learning Resources

- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [Pydantic Documentation](https://docs.pydantic.dev/)
- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)

## 🐛 Common Issues

1. **Import errors**: Make sure the virtual environment is activated
2. **JSON parsing errors**: Ensure requests follow JSON-RPC 2.0 format
3. **Tool not found**: Check that the tool name matches exactly

## 📄 License

This project is for educational purposes. Pokemon names and data are used for demonstration only.
