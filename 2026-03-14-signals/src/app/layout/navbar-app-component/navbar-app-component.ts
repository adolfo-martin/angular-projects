import { Component } from '@angular/core';
import { ButtonLoginComponent } from "../button-login-component/button-login-component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'navbar-app',
  imports: [ButtonLoginComponent, RouterLink],
  templateUrl: './navbar-app-component.html',
  styleUrl: './navbar-app-component.css',
})
export class NavbarAppComponent {

}
