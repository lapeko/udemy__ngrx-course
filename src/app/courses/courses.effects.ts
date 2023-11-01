import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap, map, switchMap} from "rxjs/operators";
import {Injectable} from "@angular/core";

import {CoursesActions} from "./action-types";
import {CoursesHttpService} from "./services/courses-http.service";

@Injectable()
export class CoursesEffects {
  loadAllCourses = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadAllCourses),
      switchMap(() => this.coursesService.findAllCourses()),
      map(courses => CoursesActions.allCoursesLoaded({courses})),
    );
  });

  courseUpdated = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.courseUpdated),
      concatMap(({update}) => this.coursesService.saveCourse(update.id, update.changes)),
    )
  }, {dispatch: false});

  constructor(
    private actions$: Actions,
    private coursesService: CoursesHttpService,
  ) {
  }
}
