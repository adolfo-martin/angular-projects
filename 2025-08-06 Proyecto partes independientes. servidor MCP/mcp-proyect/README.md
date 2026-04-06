# Temperature Converter MCP Server

A Model Context Protocol (MCP) server that provides temperature conversion tools between Celsius and Fahrenheit degrees.

## Features

- **celsius_to_fahrenheit**: Convert temperature from Celsius to Fahrenheit
- **fahrenheit_to_celsius**: Convert temperature from Fahrenheit to Celsius

## Installation

1. Clone this repository
2. Create a virtual environment:
   ```bash
   python -m venv .venv
   ```
3. Activate the virtual environment:
   - Windows: `.venv\Scripts\activate`
   - macOS/Linux: `source .venv/bin/activate`
4. Install dependencies:
   ```bash
   pip install -e .
   ```

## Running the Server

```bash
python -m temperature_converter_mcp
```

## Configuration

### VS Code with Claude Desktop

Create an `mcp.json` file in your `.vscode` folder:

```json
{
  "servers": {
    "temperature-converter": {
      "type": "stdio",
      "command": "python",
      "args": ["-m", "temperature_converter_mcp"]
    }
  }
}
```

### Claude Desktop Configuration

Add to your Claude Desktop config file:

```json
{
  "mcpServers": {
    "temperature-converter": {
      "command": "python",
      "args": ["-m", "temperature_converter_mcp"],
      "cwd": "path/to/your/project"
    }
  }
}
```

## Usage

Once connected, you can use the following tools:
- Ask to convert temperatures: "Convert 25 degrees Celsius to Fahrenheit"
- Use the opposite conversion: "What is 77 degrees Fahrenheit in Celsius?"

## Development

This project uses Python 3.8+ and follows the Model Context Protocol specification.
