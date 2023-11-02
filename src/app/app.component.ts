import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";

import {AuthActions} from "./auth/store/auth.actions";
import {loggedIn, loggedOut} from "./auth/store/auth.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loading$: Observable<boolean> = of(true);
    loggedIn$: Observable<boolean> = of(false);
    loggedOut$: Observable<boolean> = of(true);

    constructor(
      private router: Router,
      private store: Store,
    ) {
    }

    ngOnInit() {
      this.store.dispatch(AuthActions.initLogin());
      this.loading$ = this.router.events.pipe(map(event  => event instanceof NavigationStart));
      this.loggedIn$ = this.store.select(loggedIn);
      this.loggedOut$ = this.store.select(loggedOut);
    }

    logout() {
      this.store.dispatch(AuthActions.logout());
    }
}
