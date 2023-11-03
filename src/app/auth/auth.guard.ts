import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {loggedIn} from "./store/auth.selectors";
import {tap} from "rxjs/operators";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loggedIn$ = inject(Store).select(loggedIn);

  return loggedIn$
    .pipe(tap(loggedIn => {
      if (!loggedIn) router.navigateByUrl("/login");
    }));
};
