import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CoursesActions} from "./action-types";
import {map, switchMap} from "rxjs/operators";
import {CoursesHttpService} from "./services/courses-http.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CoursesEffects {
  loadAllCourses = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadAllCourses),
      switchMap(() => this.coursesService.findAllCourses()),
      map(courses => CoursesActions.allCoursesLoaded({courses})),
    );
  }, {functional: true});

  constructor(
    private actions$: Actions,
    private coursesService: CoursesHttpService,
  ) {
  }
}
