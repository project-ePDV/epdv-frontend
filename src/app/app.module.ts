import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared-module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthConfig, AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { callbackUri, clientId, domain } from './common/configs/auth.config';

const config: AuthConfig = {
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: callbackUri,
  },
  useRefreshTokens: true,
  useRefreshTokensFallback: false,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot(config),
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
