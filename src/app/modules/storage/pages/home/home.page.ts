import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Product } from 'src/app/modules/shared/models/product.mode';
import { productListMock } from 'src/app/test-utils/product.mock';
import { ProductsService } from '../../services/products.service';
import { ProductsResponse } from '../../models/productsResponse.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products!: Product[];

  constructor(private menuCtrl: MenuController, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts({page: '1', size: '6'}).then((res) => {
      this.products = res.records
    })
  }

  openFilterMenu(): void {
    this.menuCtrl.enable(true, 'filter-menu');
    this.menuCtrl.open('filter-menu');
  }

  closeFilterMenu(): void {
    this.menuCtrl.close('filter-menu');
  }
}
