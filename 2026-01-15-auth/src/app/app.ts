import { Component } from '@angular/core';
import { PanelAuth } from "./components/panel-auth/panel-auth";

@Component({
  selector: 'app-root',
  imports: [PanelAuth],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor() {
  }
}
