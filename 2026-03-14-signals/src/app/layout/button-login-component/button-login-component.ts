import { Component, inject } from '@angular/core';
import { AppStateService } from '../../state/app-state-service';

@Component({
  selector: 'button-login',
  imports: [],
  templateUrl: './button-login-component.html',
  styleUrl: './button-login-component.css',
})
export class ButtonLoginComponent {
  protected readonly appStateService = inject(AppStateService);

  openButtonClickedHandler() {
    throw new Error('Method not implemented.');
  }

  closeButtonClickedHandler() {
    this.appStateService.closeUserSession();
  }
}
