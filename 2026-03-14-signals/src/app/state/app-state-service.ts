import { computed, Injectable, signal } from '@angular/core';

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

export type AppStateT = {
  user: UserT | null,
  isLoading: boolean,
  isLogged: boolean,
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private readonly initialState = {
    user: null,
    isLoading: false,
    isLogged: false,
  }

  private readonly appState = signal<AppStateT>(this.initialState);

  public readonly token = computed(() => this.appState().user?.accessToken);

  public readonly isLogged = computed(() => this.appState().isLogged);

  public readonly isLoading = computed(() => this.appState().isLoading);

  public readonly fullname = computed(() => 
    this.appState().user 
      ? `${this.appState().user?.firstname} ${this.appState().user?.lastname}`
      : 'Usuario no identificado'
  );

  public readonly shortname = computed(() =>
    this.appState().user
      ? `${this.appState().user?.firstname[0]}${this.appState().user?.lastname[0]}`
      : 'Usuario no identificado'
  );

  public setUser(user: UserT | null) {
    if (user)
      this.appState.update(state => ({ ...state, isLogged: true, user }));
    else 
      this.appState.update(state => ({ ...state, isLogged: false, user: null }));
  }

  public closeUserSession() {
    this.setUser(null);
  }

  public setLoading(value: boolean) {
    this.appState.update(state => ({ ...state, isLoading: value }))
  }
}
