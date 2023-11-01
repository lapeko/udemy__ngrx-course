import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CoursesState, coursesStoreKey, selectAll} from "./reducers/courses.reducer";

export const coursesState = createFeatureSelector<CoursesState>(coursesStoreKey);
export const coursesLoaded = createSelector(
  coursesState,
  state => state.loaded,
);
export const allCourses = createSelector(
  coursesState,
  selectAll,
);
export const beginnerCourses = createSelector(
  allCourses,
  courses => courses.filter(course => course.category === "BEGINNER")
);
export const advancedCourses = createSelector(
  allCourses,
  courses => courses.filter(course => course.category === "ADVANCED")
);
export const promoTotal = createSelector(
  allCourses,
  courses => courses.filter(course => course.promo).length,
);
