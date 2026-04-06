import { from as observableDesdeArreglo } from 'rxjs';
import {
    filter as filtrar,
    tap as efectoLateral,
    map as mapear,
    delay as retrasar
} from 'rxjs/operators';

const dragones = [
    { id: 1, nombre: 'Acarion', longitud: 9, peso: 23000 },
    { id: 2, nombre: 'Besarion', longitud: 15, peso: 65000 },
    { id: 3, nombre: 'Cursarion', longitud: 7, peso: 15000 },
    { id: 4, nombre: 'Divirion', longitud: 14, peso: 54000 },
    { id: 5, nombre: 'Estocarion', longitud: 18, peso: 97000 },
];

const esGrande = ({ peso }) => peso > 49000;
const cambiarInformacion = dragon => `Soy ${dragon.nombre} y soy grande`;

const dragones$ = observableDesdeArreglo(dragones)
    .pipe(
        efectoLateral(console.log),
        filtrar(esGrande),
        efectoLateral(console.log),
        mapear(cambiarInformacion),
        retrasar(3000),
    );

dragones$.subscribe({
    next: console.log,
    complete: () => console.log('FINNNNNNNNN'),
    error: console.error
});