import { Component, input } from '@angular/core';

@Component({
  selector: 'card-pokemon',
  imports: [],
  templateUrl: './card-pokemon.html',
  styleUrl: './card-pokemon.css',
  host: { class: 'inline-flex flex-col gap-2 border-2 border-blue-500' },
})
export class CardPokemon {
  public pokemonId = input.required<number>({alias: 'pokemon-id'});
  public pokemonName = input.required<string>({alias: 'pokemon-name'});
}
