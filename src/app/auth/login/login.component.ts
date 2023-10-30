import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {noop} from "rxjs";
import {tap} from "rxjs/operators";
import {Store} from "@ngrx/store";


import {AuthService} from "../auth.service";
import {AppState} from "../../reducers";
import {AuthActions} from "../action-types";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private router: Router,
      private store: Store<AppState>,
  ) {
      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });
  }

  ngOnInit() {

  }

  login() {
    const {value} = this.form;
    this.auth.login(value.email, value.password)
      .pipe(
        tap((user) => {
          this.store.dispatch(AuthActions.login({user}));
        }),
      )
      .subscribe({
        next: noop,
        error: err => console.error("Login failed"),
      })
  }
}

