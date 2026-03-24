import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { Pizza, TratoriaService } from '../../services/tratoria.service';
// import { Observable } from 'rxjs';
import { TarjetaPizzaComponent } from '../tarjeta-pizza/tarjeta-pizza.component';

@Component({
  selector: 'ficha-nuestras-pizzas',
  standalone: true,
  imports: [CommonModule, TarjetaPizzaComponent],
  templateUrl: './ficha-nuestras-pizzas.component.html',
  styleUrl: './ficha-nuestras-pizzas.component.css'
})
export class FichaNuestrasPizzasComponent {

}