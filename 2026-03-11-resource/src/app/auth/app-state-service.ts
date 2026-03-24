import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthRestService } from './auth-rest-service';


export type AppStateT = {
  isLoading: boolean,
  token: string | null,
}


@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private readonly restService = inject(AuthRestService);

  private readonly appState = signal<AppStateT>({
    isLoading: false,
    token: null,
  });

  public isLoading = computed(() => this.appState().isLoading);
  public token = computed(() => this.appState().token);
  public fullname = computed(() => {
    if (!this.appState().token) {
      return null;
    } else {
      // @ts-ignore
      const decodedToken = this.decodeToken(this.appState().token);
      // @ts-ignore
      return `${decodedToken.firstName} ${decodedToken.lastName}`;
    }
  });


  public validateUser(username: string, password: string) {
    this.appState.update(state => ({...state, isLoading: true}));
    this.restService.validateUser(username, password).subscribe(token => {
      this.appState.update(state => ({ ...state, isLoading: false, token }));
    });
  }


  /**
  * Decodifica el payload de un JWT.
  * @param token token JWT (header.payload.signature)
  * @returns el objeto decodificado o null si el formato es inválido
  */
  private decodeToken(token: string): object | null {
    if (!token) { return null; }
    const parts = token.split('.');
    if (parts.length !== 3) { return null; }             // no es un JWT válido

    try {
      const payload = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(payload);
    } catch {
      return null;  // error en la decodificación o en el JSON
    }
  }
}
