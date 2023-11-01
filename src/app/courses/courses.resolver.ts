import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {inject} from "@angular/core";
import {filter, first, tap} from "rxjs/operators";

import {CoursesActions} from "./action-types";
import {coursesLoaded} from "./courses.selectors";

export const heroResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const store = inject(Store);
  let loadCalled = false;

  return store.select(coursesLoaded).pipe(
    tap(() => {
      if (!loadCalled) {
        loadCalled = true;
        store.dispatch(CoursesActions.loadAllCourses());
      }
    }),
    filter(loaded => loaded),
    first(),
  );
};
