import { Routes } from '@angular/router';
import { FichaPortadaComponent } from '../components/ficha-portada/ficha-portada.component';
import { FichaNuestrasPizzasComponent } from '../components/ficha-nuestras-pizzas/ficha-nuestras-pizzas.component';
import { FichaSeleccionIngredientesComponent } from '../components/ficha-seleccion-ingredientes/ficha-seleccion-ingredientes.component';

export const routes: Routes = [
    {path: "portada", component: FichaPortadaComponent},
    {path: "pizzas", component: FichaNuestrasPizzasComponent},
    {path: "ingredientes/:codigo", component: FichaSeleccionIngredientesComponent},
];
