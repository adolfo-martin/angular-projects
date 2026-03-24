import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { StatusAppService } from '../../services/status-app-service';

@Component({
  selector: 'panel-auth',
  imports: [],
  templateUrl: './panel-auth.html',
  styleUrl: './panel-auth.css',
})
export class PanelAuth {

  private readonly serviceAuth = inject(AuthService);
  private readonly serviceAppStatus = inject(StatusAppService);
  
  protected fullname = this.serviceAppStatus.fullname;

  validateUserHandler($event: PointerEvent) {
    this.serviceAuth.validateUser$('emilys', 'emilyspass').subscribe(token =>
      this.serviceAppStatus.setToken(token)
    );
  }
}
