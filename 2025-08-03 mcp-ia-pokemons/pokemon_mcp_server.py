#!/usr/bin/env python3
"""
Pokemon MCP Server

A Model Context Protocol server that provides tools for managing Pokemon data.
This server includes tools to retrieve all Pokemon, filter by type, and get specific Pokemon details.
"""

import asyncio
import json
import sys
from typing import Any, Dict, List, Optional, Union
from pydantic import BaseModel


# Pokemon data model
class Pokemon(BaseModel):
    id: int
    name: str
    type: str
    weight: float  # in kg
    height: float  # in meters
    image_url: str


# Mock Pokemon data store
POKEMON_DATA: List[Pokemon] = [
    Pokemon(
        id=1,
        name="Pikachu",
        type="Electric",
        weight=6.0,
        height=0.4,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    ),
    Pokemon(
        id=2,
        name="Charizard",
        type="Fire",
        weight=90.5,
        height=1.7,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    ),
    Pokemon(
        id=3,
        name="Blastoise",
        type="Water",
        weight=85.5,
        height=1.6,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    ),
    Pokemon(
        id=4,
        name="Venusaur",
        type="Grass",
        weight=100.0,
        height=2.0,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    ),
    Pokemon(
        id=5,
        name="Gyarados",
        type="Water",
        weight=235.0,
        height=6.5,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    ),
    Pokemon(
        id=6,
        name="Alakazam",
        type="Psychic",
        weight=48.0,
        height=1.5,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    ),
    Pokemon(
        id=7,
        name="Machamp",
        type="Fighting",
        weight=130.0,
        height=1.6,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    ),
    Pokemon(
        id=8,
        name="Gengar",
        type="Ghost",
        weight=40.5,
        height=1.5,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    ),
    Pokemon(
        id=9,
        name="Dragonite",
        type="Dragon",
        weight=210.0,
        height=2.2,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    ),
    Pokemon(
        id=10,
        name="Mewtwo",
        type="Psychic",
        weight=122.0,
        height=2.0,
        image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    )
]


class MCPRequest(BaseModel):
    jsonrpc: str = "2.0"
    id: Optional[Union[str, int]] = None
    method: str
    params: Optional[Dict[str, Any]] = None


class MCPResponse(BaseModel):
    jsonrpc: str = "2.0"
    id: Optional[Union[str, int]] = None
    result: Optional[Any] = None
    error: Optional[Dict[str, Any]] = None


class MCPServer:
    def __init__(self):
        self.capabilities = {
            "tools": {
                "listChanged": True
            }
        }
        
    async def handle_request(self, request: MCPRequest) -> MCPResponse:
        """Handle incoming MCP requests"""
        try:
            if request.method == "initialize":
                return MCPResponse(
                    id=request.id,
                    result={
                        "protocolVersion": "2024-11-05",
                        "capabilities": self.capabilities,
                        "serverInfo": {
                            "name": "pokemon-server",
                            "version": "1.0.0"
                        }
                    }
                )
            
            elif request.method == "tools/list":
                return MCPResponse(
                    id=request.id,
                    result={
                        "tools": [
                            {
                                "name": "get_all_pokemon",
                                "description": "Retrieve all Pokemon from the data store",
                                "inputSchema": {
                                    "type": "object",
                                    "properties": {},
                                    "required": []
                                }
                            },
                            {
                                "name": "get_pokemon_by_type",
                                "description": "Retrieve Pokemon filtered by their type",
                                "inputSchema": {
                                    "type": "object",
                                    "properties": {
                                        "pokemon_type": {
                                            "type": "string",
                                            "description": "The type of Pokemon to filter by (e.g., Electric, Fire, Water, etc.)"
                                        }
                                    },
                                    "required": ["pokemon_type"]
                                }
                            },
                            {
                                "name": "get_pokemon_details",
                                "description": "Get detailed information about a specific Pokemon by name or ID",
                                "inputSchema": {
                                    "type": "object",
                                    "properties": {
                                        "identifier": {
                                            "type": "string",
                                            "description": "Pokemon name or ID to get details for"
                                        }
                                    },
                                    "required": ["identifier"]
                                }
                            }
                        ]
                    }
                )
            
            elif request.method == "tools/call":
                return await self.handle_tool_call(request)
            
            else:
                return MCPResponse(
                    id=request.id,
                    error={
                        "code": -32601,
                        "message": f"Method not found: {request.method}"
                    }
                )
                
        except Exception as e:
            return MCPResponse(
                id=request.id,
                error={
                    "code": -32603,
                    "message": f"Internal error: {str(e)}"
                }
            )
    
    async def handle_tool_call(self, request: MCPRequest) -> MCPResponse:
        """Handle tool call requests"""
        if not request.params:
            return MCPResponse(
                id=request.id,
                error={
                    "code": -32602,
                    "message": "Invalid params"
                }
            )
        
        tool_name = request.params.get("name")
        arguments = request.params.get("arguments", {})
        
        if tool_name == "get_all_pokemon":
            pokemon_list = []
            for pokemon in POKEMON_DATA:
                pokemon_list.append({
                    "id": pokemon.id,
                    "name": pokemon.name,
                    "type": pokemon.type,
                    "weight": pokemon.weight,
                    "height": pokemon.height,
                    "image_url": pokemon.image_url
                })
            
            result = {
                "total_count": len(pokemon_list),
                "pokemon": pokemon_list
            }
            
            return MCPResponse(
                id=request.id,
                result={
                    "content": [
                        {
                            "type": "text",
                            "text": f"Found {len(pokemon_list)} Pokemon:\n\n{json.dumps(result, indent=2)}"
                        }
                    ]
                }
            )
        
        elif tool_name == "get_pokemon_by_type":
            pokemon_type = arguments.get("pokemon_type", "").title()
            
            filtered_pokemon = [
                pokemon for pokemon in POKEMON_DATA 
                if pokemon.type.lower() == pokemon_type.lower()
            ]
            
            if not filtered_pokemon:
                available_types = list(set(p.type for p in POKEMON_DATA))
                return MCPResponse(
                    id=request.id,
                    result={
                        "content": [
                            {
                                "type": "text",
                                "text": f"No Pokemon found with type '{pokemon_type}'. Available types: {', '.join(available_types)}"
                            }
                        ]
                    }
                )
            
            pokemon_list = []
            for pokemon in filtered_pokemon:
                pokemon_list.append({
                    "id": pokemon.id,
                    "name": pokemon.name,
                    "type": pokemon.type,
                    "weight": pokemon.weight,
                    "height": pokemon.height,
                    "image_url": pokemon.image_url
                })
            
            result = {
                "type_filter": pokemon_type,
                "count": len(pokemon_list),
                "pokemon": pokemon_list
            }
            
            return MCPResponse(
                id=request.id,
                result={
                    "content": [
                        {
                            "type": "text",
                            "text": f"Found {len(pokemon_list)} Pokemon of type '{pokemon_type}':\n\n{json.dumps(result, indent=2)}"
                        }
                    ]
                }
            )
        
        elif tool_name == "get_pokemon_details":
            identifier = arguments.get("identifier", "").strip()
            
            found_pokemon = None
            
            # Try to find by ID first
            try:
                pokemon_id = int(identifier)
                found_pokemon = next((p for p in POKEMON_DATA if p.id == pokemon_id), None)
            except ValueError:
                # Not a number, try to find by name
                found_pokemon = next(
                    (p for p in POKEMON_DATA if p.name.lower() == identifier.lower()), 
                    None
                )
            
            if not found_pokemon:
                available_pokemon = [f"{p.name} (ID: {p.id})" for p in POKEMON_DATA]
                return MCPResponse(
                    id=request.id,
                    result={
                        "content": [
                            {
                                "type": "text",
                                "text": f"Pokemon '{identifier}' not found. Available Pokemon:\n{chr(10).join(available_pokemon)}"
                            }
                        ]
                    }
                )
            
            result = {
                "id": found_pokemon.id,
                "name": found_pokemon.name,
                "type": found_pokemon.type,
                "weight": found_pokemon.weight,
                "height": found_pokemon.height,
                "image_url": found_pokemon.image_url,
                "details": {
                    "weight_description": f"{found_pokemon.weight} kg",
                    "height_description": f"{found_pokemon.height} m",
                    "bmi": round(found_pokemon.weight / (found_pokemon.height ** 2), 2)
                }
            }
            
            return MCPResponse(
                id=request.id,
                result={
                    "content": [
                        {
                            "type": "text",
                            "text": f"Pokemon Details for {found_pokemon.name}:\n\n{json.dumps(result, indent=2)}"
                        }
                    ]
                }
            )
        
        else:
            return MCPResponse(
                id=request.id,
                error={
                    "code": -32601,
                    "message": f"Unknown tool: {tool_name}"
                }
            )


async def main():
    """Main server loop that handles stdio communication"""
    server = MCPServer()
    
    print("Pokemon MCP Server started. Listening for requests...", file=sys.stderr)
    
    while True:
        try:
            # Read request from stdin
            line = await asyncio.get_event_loop().run_in_executor(None, sys.stdin.readline)
            if not line:
                break
            
            line = line.strip()
            if not line:
                continue
            
            # Parse JSON-RPC request
            try:
                request_data = json.loads(line)
                request = MCPRequest(**request_data)
            except (json.JSONDecodeError, ValueError) as e:
                error_response = MCPResponse(
                    error={
                        "code": -32700,
                        "message": f"Parse error: {str(e)}"
                    }
                )
                print(json.dumps(error_response.model_dump(exclude_none=True)))
                continue
            
            # Handle request
            response = await server.handle_request(request)
            
            # Send response to stdout
            print(json.dumps(response.model_dump(exclude_none=True)))
            sys.stdout.flush()
            
        except KeyboardInterrupt:
            break
        except Exception as e:
            print(f"Error: {e}", file=sys.stderr)
            break


if __name__ == "__main__":
    asyncio.run(main())
