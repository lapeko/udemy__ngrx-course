import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {inject} from "@angular/core";

import {isLoggedIn} from "./auth.selectors";
import {tap} from "rxjs/operators";


export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const store = inject(Store);
    const router = inject(Router);

    return store.select(isLoggedIn)
      .pipe(
        tap(isLoggedIn => {
          if (!isLoggedIn) router.navigateByUrl("/login");
        })
      );
};
