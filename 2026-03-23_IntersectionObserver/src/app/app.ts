import { Component, signal } from '@angular/core';
import { PanelPokemons } from "./components/panel-pokemons/panel-pokemons";

@Component({
  selector: 'app-root',
  imports: [PanelPokemons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
