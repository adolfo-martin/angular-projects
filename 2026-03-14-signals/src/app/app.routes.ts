import { Routes } from '@angular/router';
import { PanelLoginComponent } from './auth/panel-login-component/panel-login-component';
import { PanelCategoriesComponent } from './categories/panel-categories-component/panel-categories-component';

export const routes: Routes = [
    { path: 'login', component: PanelLoginComponent },
    { path: 'categories', component: PanelCategoriesComponent },
];
