# Volkswagen MCP Server Configuration

## Overview
This is a Model Context Protocol (MCP) server that provides AI-powered access to Volkswagen car data using Ollama integration.

## Features
- **Two MCP Tools**:
  1. `get_all_volkswagen_cars` - Retrieves all 10 Volkswagen cars with detailed information
  2. `get_volkswagen_car_by_id` - Retrieves a specific car by ID (1-10)

- **Ollama Integration**: Optional AI insights for car recommendations and information
- **JSON-RPC Protocol**: Follows MCP specification for tool calling
- **Rich Responses**: Formatted text and JSON data for both human and programmatic use

## Usage

### Running the Server
```bash
# Demo mode (for testing)
python volkswagen_mcp_server.py --demo

# MCP mode (for integration with AI clients)
python volkswagen_mcp_server.py
```

### Example Tool Calls

#### Get All Cars
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "get_all_volkswagen_cars",
    "arguments": {}
  }
}
```

#### Get Car by ID
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "get_volkswagen_car_by_id",
    "arguments": {
      "car_id": 6
    }
  }
}
```

## Car Database
The server includes 10 Volkswagen models:
1. Golf (Hatchback)
2. Jetta (Sedan)
3. Passat (Sedan)
4. Tiguan (SUV)
5. Atlas (SUV)
6. ID.4 (Electric SUV)
7. Arteon (Sedan)
8. Taos (Compact SUV)
9. Beetle (Coupe)
10. ID.Buzz (Electric Van)

## Dependencies
- `ollama` - For AI integration (optional)
- `asyncio` - For async operations
- Standard Python libraries

## Integration
This server can be integrated with:
- Ollama AI models
- MCP-compatible AI assistants
- Custom applications requiring car data

## Files
- `volkswagen_mcp_server.py` - Main MCP server
- `volkswagen_repository.py` - Car data repository
- `main.py` - Basic Python script
- `requirements.txt` - Dependencies
