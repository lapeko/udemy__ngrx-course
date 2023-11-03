import {EntityMetadataMap} from "@ngrx/data";

import {compareCourses} from "../model/course";
import {compareLessons} from "../model/lesson";

export const coursesEntityMetadataMap: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    }
  },
  Lesson: {
    sortComparer: compareLessons,
  }
};
