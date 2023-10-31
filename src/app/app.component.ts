import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

import {AppState} from "./reducers";
import {isLoggedIn, isLoggedOut} from "./auth/auth.selectors";
import {AuthActions} from "./auth/action-types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = true;
    isLoggedIn$ = this.store.select(isLoggedIn);
    isLoggedOut$ = this.store.select(isLoggedOut);

    constructor(
      private router: Router,
      private store: Store<AppState>,
    ) {
    }

    ngOnInit() {
      this.store.dispatch(AuthActions.init());

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

    }

    logout() {
      this.store.dispatch(AuthActions.logout());
    }

}
