import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, switchMap, tap} from "rxjs/operators";
import {Router} from "@angular/router";

import {AuthActions} from "./action-types";
import {login, logout} from "./auth.actions";
import {EMPTY, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthEffects {
  init = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.init),
    switchMap(() => {
      const userItem = localStorage.getItem('user');
      if (!userItem) {
        this.router.navigateByUrl("/login");
        return EMPTY;
      }
      const user = JSON.parse(userItem);
      return of(login({user}));
    }),
    catchError(() => of(logout())),
  ), {functional: true});

  login = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    tap(({user}) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl("/courses")
    }),
  ), {functional: true, dispatch: false});

  logout = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl("/login");
    }),
  ), {functional: true, dispatch: false});

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {
  }
}

