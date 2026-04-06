"""Main entry point for the temperature converter MCP server"""

import asyncio
from . import main

if __name__ == "__main__":
    asyncio.run(main())
