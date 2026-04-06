# AI Agents Learning Project

A Node.js project to learn how to use the AI library with Ollama local LLM.

## Prerequisites

1. **Install Ollama**: Download and install Ollama from [https://ollama.ai](https://ollama.ai)
2. **Pull a model**: After installing Ollama, pull a model (e.g., llama3.2):
   ```bash
   ollama pull llama3.2
   ```
3. **Start Ollama**: Make sure Ollama is running (it usually starts automatically)

## Setup

1. Clone or download this project
2. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```
3. (Optional) Modify the `.env` file to change the model or Ollama URL
4. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the interactive agent:
```bash
npm start
```

Or run in development mode with auto-restart:
```bash
npm run dev
```

## Features

- Interactive chat with a local AI agent using Ollama
- Uses the AI library with Ollama's local LLM
- No external API keys required - runs completely offline
- Environment variable configuration
- Error handling for Ollama connection issues
- Clean exit with "exit" command

## Configuration

The `.env` file supports:
- `OLLAMA_BASE_URL`: Ollama server URL (default: http://localhost:11434)
- `OLLAMA_MODEL`: Model to use (default: llama3.2)

## Available Models

Popular Ollama models you can use:
- `llama3.2` - Fast and efficient
- `llama3.1` - More capable
- `codellama` - Code-focused
- `mistral` - Alternative option
- `qwen2.5` - Multilingual

To change models, run:
```bash
ollama pull <model-name>
```
Then update the `OLLAMA_MODEL` in your `.env` file.

## Project Structure

- `index.js` - Main application file with the CodeAgent class
- `package.json` - Project dependencies and scripts
- `.env.example` - Environment variables template
- `AGENTS.md` - Project documentation and agent definitions

## Requirements

- Node.js 18 or higher
- Ollama installed and running locally
