export interface Course {
  id: number;
  seqNo: number;
  url: string;
  iconUrl: string;
  courseListIcon: string;
  description: string;
  longDescription?: string;
  category: "BEGINNER" | "ADVANCED";
  lessonsCount: number;
  promo: boolean;
}

export const compareCourses = (c1: Course, c2: Course) => c1.seqNo - c2.seqNo > 0 ? 1 : -1;
