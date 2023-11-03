import {EntityMetadataMap} from "@ngrx/data";

import {compareCourses} from "../model/course";
import {compareLessons} from "../model/lesson";

export const coursesEntityMetadataMap: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
  },
  Lesson: {
    sortComparer: compareLessons,
  }
};
