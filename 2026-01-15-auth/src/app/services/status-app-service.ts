import { computed, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusAppService {
  private token = signal<string | null>(null);

  public userId = computed(() => {
    if (this.token()) {
      // @ts-ignore
      const {id} = this.decodeToken(this.token());
      return id;
    } else {
      return '';
    }
  });

  public username = computed(() => {
    if (this.token()) {
      // @ts-ignore
      const {username} = this.decodeToken(this.token());
      return username;
    } else {
      return '';
    }
  });

  public fullname = computed(() => {
    if (this.token()) {
      // @ts-ignore
      const {firstName, lastName} = this.decodeToken(this.token());
      return `${firstName} ${lastName}`
    } else {
      return '';
    }
  });

  public setToken(value: string) {
    this.token.set(value);
  }

  private decodeToken(token: string) {
    const parseJwt = (token: string) => {
      try {
        return JSON.parse(atob(token.split('.')[1]));
      } catch (error) {
        // @ts-ignore
        throw new Error(`Problem decoding token "${token}": ${error.message}.`);
      }
    }
    const tokenDecodificado = parseJwt(token);
    return tokenDecodificado;
  }
}
