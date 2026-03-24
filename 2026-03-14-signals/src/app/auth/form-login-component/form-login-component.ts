import { Component, inject } from '@angular/core';
import { AuthService } from '../auth-service';
import { firstValueFrom } from 'rxjs';
import { AppStateService } from '../../state/app-state-service';

@Component({
  selector: 'form-login',
  imports: [],
  templateUrl: './form-login-component.html',
  styleUrl: './form-login-component.css',
})
export class FormLoginComponent {
  private readonly authService = inject(AuthService);
  protected readonly appStateService = inject(AppStateService);
  
  async validateClickedHandler(username: string, password: string) {
    try {
      this.appStateService.setLoading(true);
      const user = await firstValueFrom(this.authService.validateUser(username, password));
      if (user) this.appStateService.setUser(user);
      this.appStateService.setLoading(false);
    } catch (e) {
      alert(e);
    }
  }
  
}
