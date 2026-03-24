import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import Product from '../models/product';

export type UserT = {
  id: number,
  username: string,
  email: string,
  firstname: string,
  lastname: string,
  gender: string,
  image: string,
  accessToken: string,
  refreshToken: string,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  public validateUser(username: string, password: string): Observable<UserT | null> {
    type ResponseT = {
      id: number,
      username: string,
      email: string,
      firstName: string,
      lastName: string,
      gender: string,
      image: string,
      accessToken: string,
      refreshToken: string,
    }

    return this.http.post<ResponseT>('https://dummyjson.com/auth/login', { username, password }).pipe(
      map(({ firstName: firstname, lastName: lastname, ...rest}) => ({...rest, firstname, lastname})),
      delay(2000),
      catchError(error => of(null)),
    );
  }

  // public retrieveProducts(): Observable<Product[]> {
  //   return this.http.get<{products: {id: number, title: string}[]}>('https://dummyjson.com/products').pipe(
  //     map(response => response.products),
  //     map(products => products.map(({id, title}) => new Product(id, title))),
  //     delay(2000),
  //   );
  // }
}
