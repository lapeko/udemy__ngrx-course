import {EntityMetadataMap} from "@ngrx/data";

import {compareCourses} from "../model/course";

export const coursesEntityMetadataMap: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
  },
};


