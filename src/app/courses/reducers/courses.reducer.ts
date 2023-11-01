import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";

import {Course} from "../model/course";
import {CoursesActions} from "../action-types";

export const coursesStoreKey = "courses";

export interface CoursesState extends EntityState<Course> {
  loaded: boolean;
}

const coursesComparator = (a: Course, b: Course) => a.seqNo > b.seqNo ? 1 : -1;

const adapter = createEntityAdapter<Course>({
  sortComparer: coursesComparator,
});

const initialState = adapter.getInitialState({
  loaded: false,
});

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.loadAllCourses, state => ({...state, loaded: false})),
  on(CoursesActions.allCoursesLoaded, (state, {courses}) => {
    return adapter.setAll(courses, {...state, loaded: true});
  }),
  on(CoursesActions.courseUpdated, (state, {update}) => adapter.updateOne(update, state)),
);

export const {
  selectAll,
} = adapter.getSelectors();
