#!/usr/bin/env python3
"""
Servidor MCP para PokéAPI
Permite a Claude acceder a información de Pokémon a través de la PokéAPI
"""

import asyncio
import json
import logging
from typing import Any, Dict, List, Optional
import aiohttp
from mcp.server import Server, NotificationOptions
from mcp.server.models import InitializationOptions
from mcp.server.stdio import stdio_server
from mcp.types import (
    Resource,
    Tool,
    TextContent,
    ImageContent,
    EmbeddedResource,
)

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("pokeapi-mcp")

# URL base de PokéAPI
POKEAPI_BASE_URL = "https://pokeapi.co/api/v2"

class PokeAPIClient:
    """Cliente para interactuar con PokéAPI"""
    
    def __init__(self):
        self.session: Optional[aiohttp.ClientSession] = None
    
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    async def get_pokemon(self, name_or_id: str) -> Dict[str, Any]:
        """Obtener información de un Pokémon por nombre o ID"""
        if not self.session:
            raise RuntimeError("Cliente no inicializado")
        
        url = f"{POKEAPI_BASE_URL}/pokemon/{name_or_id.lower()}"
        async with self.session.get(url) as response:
            if response.status == 404:
                raise ValueError(f"Pokémon '{name_or_id}' no encontrado")
            response.raise_for_status()
            return await response.json()
    
    async def get_pokemon_species(self, name_or_id: str) -> Dict[str, Any]:
        """Obtener información de la especie de un Pokémon"""
        if not self.session:
            raise RuntimeError("Cliente no inicializado")
            
        url = f"{POKEAPI_BASE_URL}/pokemon-species/{name_or_id.lower()}"
        async with self.session.get(url) as response:
            if response.status == 404:
                raise ValueError(f"Especie de Pokémon '{name_or_id}' no encontrada")
            response.raise_for_status()
            return await response.json()
    
    async def get_ability(self, name_or_id: str) -> Dict[str, Any]:
        """Obtener información de una habilidad"""
        if not self.session:
            raise RuntimeError("Cliente no inicializado")
            
        url = f"{POKEAPI_BASE_URL}/ability/{name_or_id.lower()}"
        async with self.session.get(url) as response:
            if response.status == 404:
                raise ValueError(f"Habilidad '{name_or_id}' no encontrada")
            response.raise_for_status()
            return await response.json()
    
    async def get_move(self, name_or_id: str) -> Dict[str, Any]:
        """Obtener información de un movimiento"""
        if not self.session:
            raise RuntimeError("Cliente no inicializado")
            
        url = f"{POKEAPI_BASE_URL}/move/{name_or_id.lower()}"
        async with self.session.get(url) as response:
            if response.status == 404:
                raise ValueError(f"Movimiento '{name_or_id}' no encontrado")
            response.raise_for_status()
            return await response.json()
    
    async def get_type(self, name_or_id: str) -> Dict[str, Any]:
        """Obtener información de un tipo"""
        if not self.session:
            raise RuntimeError("Cliente no inicializado")
            
        url = f"{POKEAPI_BASE_URL}/type/{name_or_id.lower()}"
        async with self.session.get(url) as response:
            if response.status == 404:
                raise ValueError(f"Tipo '{name_or_id}' no encontrado")
            response.raise_for_status()
            return await response.json()

# Crear instancia del servidor
server = Server("pokeapi-mcp")

@server.list_tools()
async def handle_list_tools() -> List[Tool]:
    """Listar las herramientas disponibles"""
    return [
        Tool(
            name="get_pokemon",
            description="Obtener información detallada de un Pokémon por nombre o ID",
            inputSchema={
                "type": "object",
                "properties": {
                    "name_or_id": {
                        "type": "string",
                        "description": "Nombre o ID del Pokémon"
                    }
                },
                "required": ["name_or_id"]
            }
        ),
        Tool(
            name="get_pokemon_species",
            description="Obtener información de la especie de un Pokémon",
            inputSchema={
                "type": "object",
                "properties": {
                    "name_or_id": {
                        "type": "string",
                        "description": "Nombre o ID de la especie del Pokémon"
                    }
                },
                "required": ["name_or_id"]
            }
        ),
        Tool(
            name="get_ability",
            description="Obtener información de una habilidad Pokémon",
            inputSchema={
                "type": "object",
                "properties": {
                    "name_or_id": {
                        "type": "string",
                        "description": "Nombre o ID de la habilidad"
                    }
                },
                "required": ["name_or_id"]
            }
        ),
        Tool(
            name="get_move",
            description="Obtener información de un movimiento Pokémon",
            inputSchema={
                "type": "object",
                "properties": {
                    "name_or_id": {
                        "type": "string",
                        "description": "Nombre o ID del movimiento"
                    }
                },
                "required": ["name_or_id"]
            }
        ),
        Tool(
            name="get_type",
            description="Obtener información de un tipo Pokémon",
            inputSchema={
                "type": "object",
                "properties": {
                    "name_or_id": {
                        "type": "string",
                        "description": "Nombre o ID del tipo"
                    }
                },
                "required": ["name_or_id"]
            }
        )
    ]

@server.call_tool()
async def handle_call_tool(name: str, arguments: dict) -> List[TextContent]:
    """Manejar llamadas a herramientas"""
    
    async with PokeAPIClient() as client:
        try:
            if name == "get_pokemon":
                pokemon_data = await client.get_pokemon(arguments["name_or_id"])
                
                # Formatear la información del Pokémon
                pokemon_info = {
                    "nombre": pokemon_data["name"].title(),
                    "id": pokemon_data["id"],
                    "altura": f"{pokemon_data['height'] / 10} m",
                    "peso": f"{pokemon_data['weight'] / 10} kg",
                    "tipos": [t["type"]["name"] for t in pokemon_data["types"]],
                    "habilidades": [a["ability"]["name"] for a in pokemon_data["abilities"]],
                    "estadísticas_base": {
                        stat["stat"]["name"]: stat["base_stat"] 
                        for stat in pokemon_data["stats"]
                    },
                    "sprite": pokemon_data["sprites"]["front_default"]
                }
                
                return [TextContent(
                    type="text",
                    text=f"Información del Pokémon:\n{json.dumps(pokemon_info, indent=2, ensure_ascii=False)}"
                )]
            
            elif name == "get_pokemon_species":
                species_data = await client.get_pokemon_species(arguments["name_or_id"])
                
                # Buscar descripción en español o inglés
                flavor_text = "No disponible"
                for entry in species_data.get("flavor_text_entries", []):
                    if entry["language"]["name"] == "es":
                        flavor_text = entry["flavor_text"].replace("\n", " ")
                        break
                    elif entry["language"]["name"] == "en":
                        flavor_text = entry["flavor_text"].replace("\n", " ")
                
                species_info = {
                    "nombre": species_data["name"].title(),
                    "descripción": flavor_text,
                    "color": species_data["color"]["name"],
                    "forma": species_data["shape"]["name"] if species_data["shape"] else "desconocida",
                    "habitat": species_data["habitat"]["name"] if species_data["habitat"] else "desconocido",
                    "tasa_captura": species_data["capture_rate"],
                    "es_legendario": species_data["is_legendary"],
                    "es_mítico": species_data["is_mythical"]
                }
                
                return [TextContent(
                    type="text",
                    text=f"Información de la especie:\n{json.dumps(species_info, indent=2, ensure_ascii=False)}"
                )]
            
            elif name == "get_ability":
                ability_data = await client.get_ability(arguments["name_or_id"])
                
                # Buscar descripción en español o inglés
                description = "No disponible"
                for entry in ability_data.get("flavor_text_entries", []):
                    if entry["language"]["name"] == "es":
                        description = entry["flavor_text"]
                        break
                    elif entry["language"]["name"] == "en":
                        description = entry["flavor_text"]
                
                ability_info = {
                    "nombre": ability_data["name"].title(),
                    "descripción": description,
                    "generación": ability_data["generation"]["name"],
                    "pokémon_con_esta_habilidad": [
                        p["pokemon"]["name"] for p in ability_data["pokemon"][:10]  # Limitar a 10
                    ]
                }
                
                return [TextContent(
                    type="text",
                    text=f"Información de la habilidad:\n{json.dumps(ability_info, indent=2, ensure_ascii=False)}"
                )]
            
            elif name == "get_move":
                move_data = await client.get_move(arguments["name_or_id"])
                
                # Buscar descripción en español o inglés
                description = "No disponible"
                for entry in move_data.get("flavor_text_entries", []):
                    if entry["language"]["name"] == "es":
                        description = entry["flavor_text"]
                        break
                    elif entry["language"]["name"] == "en":
                        description = entry["flavor_text"]
                
                move_info = {
                    "nombre": move_data["name"].title(),
                    "descripción": description,
                    "tipo": move_data["type"]["name"],
                    "clase_daño": move_data["damage_class"]["name"],
                    "poder": move_data["power"],
                    "precisión": move_data["accuracy"],
                    "pp": move_data["pp"],
                    "prioridad": move_data["priority"],
                    "efecto_secundario_probabilidad": move_data["effect_chance"]
                }
                
                return [TextContent(
                    type="text",
                    text=f"Información del movimiento:\n{json.dumps(move_info, indent=2, ensure_ascii=False)}"
                )]
            
            elif name == "get_type":
                type_data = await client.get_type(arguments["name_or_id"])
                
                type_info = {
                    "nombre": type_data["name"].title(),
                    "generación": type_data["generation"]["name"],
                    "clase_daño": type_data["move_damage_class"]["name"] if type_data["move_damage_class"] else "ninguna",
                    "super_efectivo_contra": [t["name"] for t in type_data["damage_relations"]["double_damage_to"]],
                    "no_muy_efectivo_contra": [t["name"] for t in type_data["damage_relations"]["half_damage_to"]],
                    "no_afecta_a": [t["name"] for t in type_data["damage_relations"]["no_damage_to"]],
                    "débil_contra": [t["name"] for t in type_data["damage_relations"]["double_damage_from"]],
                    "resistente_a": [t["name"] for t in type_data["damage_relations"]["half_damage_from"]],
                    "inmune_a": [t["name"] for t in type_data["damage_relations"]["no_damage_from"]]
                }
                
                return [TextContent(
                    type="text",
                    text=f"Información del tipo:\n{json.dumps(type_info, indent=2, ensure_ascii=False)}"
                )]
            
            else:
                raise ValueError(f"Herramienta desconocida: {name}")
                
        except Exception as e:
            logger.error(f"Error al ejecutar herramienta {name}: {e}")
            return [TextContent(
                type="text",
                text=f"Error: {str(e)}"
            )]

async def main():
    """Función principal del servidor"""
    # Configurar opciones de inicialización
    options = InitializationOptions(
        server_name="pokeapi-mcp",
        server_version="1.0.0",
        capabilities=server.get_capabilities(
            notification_options=NotificationOptions(),
            experimental_capabilities={}
        )
    )
    
    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            options
        )

if __name__ == "__main__":
    asyncio.run(main())