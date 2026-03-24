import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export type PokemonModelT = {
  id: number,
  name: string,
}

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly http = inject(HttpClient);

  public retrievePokemons(offset: number = 0, limit: number = 20): Observable<PokemonModelT[]> {
    type ResponseT = {
      results: { name: string, url: string }[],
    }
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return this.http.get<ResponseT>(url).pipe(
      map(response => response.results),
      map(pokemons => pokemons.map(({name, url}) => ({
        id: parseInt(url.split('/')[6]),
        name,
      })))
    );
  }
}