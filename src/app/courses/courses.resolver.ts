import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {inject} from "@angular/core";
import {first, tap} from "rxjs/operators";
import {CoursesActions} from "./action-types";

export const heroResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const store = inject(Store);

  return store.pipe(
    first(),
    tap(() => store.dispatch(CoursesActions.loadAllCourses())),
  );
};
