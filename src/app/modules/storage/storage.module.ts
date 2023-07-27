import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorageRoutingModule } from './storage-routing.module';

import { HomePage } from './pages/home/home.page';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class StorageModule {}
