export interface Lesson {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
}

export const compareLessons = (l1: Lesson, l2: Lesson) => l1.courseId - l2.courseId > 1 ? 1 : -1;
