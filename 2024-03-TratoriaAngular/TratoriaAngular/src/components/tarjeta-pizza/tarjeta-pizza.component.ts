import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza, TratoriaService } from '../../services/tratoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tarjeta-pizza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-pizza.component.html',
  styleUrl: './tarjeta-pizza.component.css'
})
export class TarjetaPizzaComponent implements OnInit{

  @Input("pizza") pizza: string = "";  
  pizza$: Observable<Pizza> = {} as Observable<Pizza>; 

  constructor(
    public _service: TratoriaService,
    public _route: ActivatedRoute,
    public _router: Router
  ) { 
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {
    this.pizza$ = this._service.getPizza$();
  }

  // public pizzas: Observable<Pizza> = {} as Observable<Pizza>; 
  
  // constructor(
  //   public _service: TratoriaService,
  //   public _route: ActivatedRoute,
  //   public _router: Router
  // ) { 
  //   this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  // }

  // ngOnInit(): void {
  //   this._service.getPizzas$().subscribe(pizzas => this.pizzas = pizzas);
  // }

}


// pizza$: Observable<Pizza> = {} as Observable<Pizza>; 
  
// constructor(public _service: TratoriaService) { }

// ngOnInit(): void {
//     this.pizza$ = this._service.getPizza$();
// }


// pizzas$: Observable<Pizza[]> = {} as Observable<Pizza[]>; 

// constructor(public _service: TratoriaService) { }

// ngOnInit(): void {
//     this.pizzas$ = this._service.getPizzas$();
// }