import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {scan, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

import {AuthActions} from "./auth/store/auth.actions";
import {loggedIn, loggedOut} from "./auth/store/auth.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn$: Observable<boolean> = this.store.select(loggedIn);
  loggedOut$: Observable<boolean> = this.store.select(loggedOut);
  loading$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(AuthActions.initLogin());
    this.loading$ = this.router.events.pipe(
      startWith(new NavigationStart(0, this.router.url)),
      scan((isLoading, event) => {
        switch (true) {
          case event instanceof NavigationStart:
            return true;
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError:
            return false;
          default:
            return isLoading;
        }
      }, false)
    );
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
