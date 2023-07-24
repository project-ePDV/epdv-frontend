import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared-module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPage } from './pages/auth/auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [AuthPage]
})
export class AuthModule {}
