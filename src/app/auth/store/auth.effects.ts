import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, filter, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

import {AuthActions} from "./auth.actions";
import {User} from "../model/user.model";
import {AuthService} from "../auth.service";

@Injectable()
export class AuthEffects {
  initLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.initLogin),
    map(() => {
      const serializedUser = localStorage.getItem("user");
      if (!serializedUser) return AuthActions.logout();
      const user = JSON.parse(serializedUser) as User;
      return AuthActions.loggedIn({user});
    }),
    catchError(() => of(AuthActions.logout())),
  ));

  login = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(({credentials: {email, password}}) => this.authService.login(email, password)),
    filter(user => !!user),
    map(user => AuthActions.loggedIn({user}))
  ));

  loggedIn = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loggedIn),
    tap(({user}) => {
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigateByUrl("/courses");
    }),
  ), {dispatch: false});

  logout = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      localStorage.removeItem("user");
      this.router.navigateByUrl("/login");
    }),
  ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {
  }
}
