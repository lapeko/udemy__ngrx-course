import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

import {AuthActions} from "./auth/store/auth.actions";
import {loggedIn, loggedOut} from "./auth/store/auth.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loading$: Observable<boolean> = this.router.events.pipe(map(event  => event instanceof NavigationStart));
    loggedIn$: Observable<boolean> = this.store.select(loggedIn);
    loggedOut$: Observable<boolean> = this.store.select(loggedOut);

    constructor(
      private router: Router,
      private store: Store,
    ) {
    }

    ngOnInit() {
      this.store.dispatch(AuthActions.initLogin());
    }

    logout() {
      this.store.dispatch(AuthActions.logout());
    }
}
