import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {filter, first, tap} from "rxjs/operators";

import {CoursesService} from "./store/courses.service";

export const coursesResolver: ResolveFn<boolean> = () => {
  const coursesService = inject(CoursesService);

  return coursesService.loaded$.pipe(
    tap(loaded => {
      if (!loaded) coursesService.getAll();
    }),
    filter(loaded => !!loaded),
    first(),
  );
}
