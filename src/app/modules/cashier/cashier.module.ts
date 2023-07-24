import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierRoutingModule } from './cashier-routing.module';

import { HomePage } from './pages/home/home.page';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierRoutingModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class CashierModule {}
