import { inject, Injectable } from '@angular/core';
import { find, map, Observable, of, switchMap, tap, zip } from 'rxjs';
import Category from '../models/category';
import { HttpClient } from '@angular/common/http';
import { AppStateService } from '../state/app-state-service';



@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly appState = inject(AppStateService);
  private readonly http = inject(HttpClient);

  public retrieveFirstImageOfCategory(categoryId: string, categoryName: string): Observable<{slug: string, name: string, thumbnail: string}> {
    const url = `https://dummyjson.com/products/category/${categoryId}`;
    type ResponseT = {
      products: {
        thumbnail: string,
      } []
    };
    const options = {
      headers: {
        'Authorization': `Bearer ${this.appState.token()}`,
      }
    }
    return this.http.get<ResponseT>(url, options).pipe(
      map(response => response.products),
      map(products => products[0]),
      map(product => ({
        slug: categoryId,
        name: categoryName,
        thumbnail: product.thumbnail
      })),
    );
  }

  public retrieveCategories(): Observable<Category[]> {
    const url = 'https://dummyjson.com/products/categories';
    type ResponseT = {
      slug: string,
      name: string,
      url: string,
    }[];
    const options = {
      headers: {
      'Authorization': `Bearer ${this.appState.token()}`,
    }}
    return this.http.get<ResponseT>(url, options).pipe(
      switchMap(categories => zip(categories.map(category => 
        this.retrieveFirstImageOfCategory(category.slug, category.name)
      ))),
      map(categories => categories.map(({ slug, name, thumbnail }) =>
        new Category(slug, name, thumbnail))
      ),
    );
  }
}
