import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";

import {LoginComponent} from './login/login.component';
import {AuthService} from "./auth.service";
import * as fromAuth from "./store/auth.reducer";
import {AuthEffects} from "./store/auth.effects";
import {authStateKey} from "./store/auth.actions";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    AuthRoutingModule,
    StoreModule.forFeature(authStateKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService
      ]
    }
  }
}
