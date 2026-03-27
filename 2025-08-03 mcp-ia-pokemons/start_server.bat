@echo off
REM Pokemon MCP Server Startup Script
REM This script activates the virtual environment and runs the MCP server

echo 🚀 Starting Pokemon MCP Server...
echo.

REM Change to the project directory
cd /d "%~dp0"

REM Activate virtual environment and run server
".venv\Scripts\python.exe" pokemon_mcp_server.py

echo.
echo 🛑 Server stopped.
pause
