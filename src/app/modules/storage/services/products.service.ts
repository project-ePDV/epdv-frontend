import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params } from '../models/params.model';
import { environment } from 'src/environments/environment'
import { CapacitorHttp } from '@capacitor/core';
import { StorageService } from 'src/app/common/services/storage/storage.service';
import { ProductsResponse } from '../models/productsResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiPath = environment.apiPath
  token!: string | null;

  constructor(private storageService: StorageService) {
    this.token = this.storageService.get('token')
  }

  async getProducts(params: Params): Promise<ProductsResponse> {
    
    const requestOptions = {
      url: `${environment.apiPath}/products`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      params
    };

    return (await CapacitorHttp.get(requestOptions)).data;
  }
}
