import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';

export type TokenT = string;

@Injectable({
  providedIn: 'root',
})
export class AuthRestService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://dummyjson.com/auth/login';

  validateUser(username: string, password: string): Observable<TokenT> {
    return this.http.post<{accessToken: string}>(this.BASE_URL, {username, password}).pipe(
      map(({ accessToken }) => accessToken),
      delay(2000),
      catchError(error => of('Cannot authenticate user')),
    );
  }
}
