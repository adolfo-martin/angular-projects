import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';

export type Pizza = {
  codigo: string,
  nombre: string,
  foto: string,
  precio: number
}

export type Ingrediente = {
  codigo: string,
  nombre: string,
  foto: string
}

@Injectable({
  providedIn: 'root'
})

export class TratoriaService {

  constructor(private _http: HttpClient) { }

  public getPizzas$(): Observable<Pizza[]> {
    const url = "http://localhost:24080/controlador.php?operacion=recuperar_pizzas";

    return this._http.get(url).pipe(
      //@ts-ignore
      map(response => response.pizzas.map(pizza => ({
        clave: pizza.codigo,
        nombre: pizza.nombre,
        foto: pizza.foto,
        precio: pizza.precio
      })))
    );
  }

  public getPizza$(): Observable<Pizza> {
    const url = "http://localhost:24080/controlador.php?operacion=recuperar_pizzas";

    return this._http.get(url).pipe(
      //@ts-ignore
      map(response => response.pizzas.map(pizza => ({
        clave: pizza.codigo,
        nombre: pizza.nombre,
        foto: pizza.foto,
        precio: pizza.precio
      })))
    );
  }




}

