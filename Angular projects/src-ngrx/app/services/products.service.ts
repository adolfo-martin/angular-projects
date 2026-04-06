import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from '../entities/product-i';
import { ProductsRepository } from '../repositories/products-repository';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _productsRepository: ProductsRepository) { }

  public retrieveProducts$(): Observable<ProductI[]> {
    return this._productsRepository.retrieveProducts$()
  }

}
