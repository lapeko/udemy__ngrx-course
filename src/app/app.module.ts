import {BrowserModule} from '@angular/platform-browser';
import {NgModule, isDevMode} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EntityDataModule} from "@ngrx/data";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {EffectsModule} from "@ngrx/effects";

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot(),
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatToolbarModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
