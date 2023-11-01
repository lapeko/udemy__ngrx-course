import {createAction} from "@ngrx/store";

export const loadAllCourses = createAction(
  "[COURSES] load all courses"
);

export const allCoursesLoaded = createAction(
  "[COURSES] all courses loaded"
);
