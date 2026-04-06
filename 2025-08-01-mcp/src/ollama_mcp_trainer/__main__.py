"""
Main entry point for the Ollama MCP trainer server.
This allows the package to be run with: python -m src.ollama_mcp_trainer
"""

import asyncio
from . import main

if __name__ == "__main__":
    asyncio.run(main())
