import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared-module';
import { AuthRoutingModule } from './auth-routing.module';
import { HomePage } from './pages/home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class AuthModule {}
