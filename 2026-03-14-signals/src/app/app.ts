import { Component, effect, inject } from '@angular/core';
import { FormLoginComponent } from "./auth/form-login-component/form-login-component";
import { NavbarAppComponent } from "./layout/navbar-app-component/navbar-app-component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [NavbarAppComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
