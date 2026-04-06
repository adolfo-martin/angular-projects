import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductI } from "../entities/product-i";

class Product implements ProductI {
    constructor(readonly uuid: string, readonly name: string, readonly price: number) { }
}

@Injectable({
    providedIn: 'root'
})
export class ProductsRepository {
    private static products: ProductI[] = [
        new Product('a1-01', 'Teclado Logi', 18.90),
        new Product('a2-02', 'Ratón Corsair', 27.95),
        new Product('a3-03', 'Monitor BenQ', 175.50),
    ]

    public retrieveProducts$(): Observable<ProductI[]> {
        return of(ProductsRepository.products)
    }
}
