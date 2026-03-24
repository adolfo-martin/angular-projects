import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FichaNuestrasPizzasComponent } from '../components/ficha-nuestras-pizzas/ficha-nuestras-pizzas.component';
// import { FichaPortadaComponent } from '../components/ficha-portada/ficha-portada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TratoriaAngular';
}
