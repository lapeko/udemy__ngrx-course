import {createAction, props} from "@ngrx/store";
import {Update} from "@ngrx/entity";

import {Course} from "./model/course";

export const loadAllCourses = createAction(
  "[COURSES] load all courses"
);

export const allCoursesLoaded = createAction(
  "[COURSES] all courses loaded",
  props<{courses: Course[]}>(),
);

export const courseUpdated = createAction(
  "[COURSES] updated",
  props<{update: Update<Course>}>(),
);

