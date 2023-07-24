import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params } from '../models/params.model';
import { Product } from '../../shared/models/product.mode';
import { ProductsResponse } from '../models/productsResponse.model';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiPath = environment.apiPath

  constructor(private httpClient: HttpClient) { }

  getProducts(params: Params) {
    return this.httpClient.get<ProductsResponse>(`${this.apiPath}products`, {
      params: {...params}
    });
  }
}
