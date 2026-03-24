import { AfterViewInit, Component, ElementRef, inject, signal, ViewChild, ViewChildren, QueryList, AfterViewChecked } from '@angular/core';
import { PokemonModelT, PokemonsService } from '../../services/pokemons-service';
import { CardPokemon } from '../card-pokemon/card-pokemon';

@Component({
  selector: 'container-pokemons',
  imports: [CardPokemon],
  templateUrl: './container-pokemons.html',
  styleUrl: './container-pokemons.css',
  host: { class: 'flex flex-row gap-2 border-10 border-green-500' },
})
export class ContainerPokemons implements AfterViewInit, AfterViewChecked {
  private readonly pokemonsService = inject(PokemonsService);
  protected readonly pokemons = signal<PokemonModelT[]>([]);
  private offset = 0;
  private observer !: IntersectionObserver;

  @ViewChild('container') container!: ElementRef;
  @ViewChildren('cardPokemon', { read: ElementRef }) cardPokemons!: QueryList<ElementRef>;
  

  ngAfterViewInit(): void {
    this.pokemonsService.retrievePokemons().subscribe(pokemons => {
      this.pokemons.set(pokemons);
    });
  }

  ngAfterViewChecked(): void {
    // Get the last card-pokemon after view updates
    setTimeout(() => {
      const lastCard = this.cardPokemons?.last;
      if (lastCard) {
        this.addIntersectionObserverToLastItem(lastCard.nativeElement);
      }
    }, 1000)
  }
  
  private addIntersectionObserverToLastItem(lastItem: Element) {
    this.observer = new IntersectionObserver(this.cb.bind(this), {});
    this.observer.observe(lastItem);
  }

  private cb() {
    this.observer.disconnect();
    console.log('TRIGGED')
    this.offset += 20;
    this.pokemonsService.retrievePokemons(this.offset).subscribe(pokemons => {
      this.pokemons.update(state => [...state, ...pokemons]);
    });
  }

  public setPokemons(pokemons: PokemonModelT[]) { }
}
