@echo off
REM Pokemon MCP Server Demo Script
REM This script runs the interactive demo

echo 🎮 Running Pokemon MCP Server Demo...
echo.

REM Change to the project directory
cd /d "%~dp0"

REM Activate virtual environment and run demo
".venv\Scripts\python.exe" demo.py

echo.
echo Demo completed. Press any key to exit...
pause
