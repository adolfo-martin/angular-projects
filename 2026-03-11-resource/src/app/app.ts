import { Component, effect, inject } from '@angular/core';
import { AppStateService } from './auth/app-state-service';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <label>Usuario: 
        <input type="text" #txtUsuario>
    </label>

    <br>
    <label> Contraseña:
        <input type="text">
    </label>
    <div>{{this.appStatus.fullname()}}</div>
  `,
  styleUrl: './app.css'
})
export class App {
  appStatus = inject(AppStateService);

  constructor() {
    this.appStatus.validateUser('emilys', 'emilyspass');
    effect(() => {
      console.log(this.appStatus.fullname());
    });
  }
}
