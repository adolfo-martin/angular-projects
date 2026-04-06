import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from '../../entities/product-i';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products$!: Observable<ProductI[]>

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productsService.retrieveProducts$()
  }

}
