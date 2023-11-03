import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, withLatestFrom} from 'rxjs/operators';

import {Course} from '../model/course';
import {Lesson} from '../model/lesson';
import {CoursesService} from "../store/courses.service";
import {LessonsService} from "../store/lessons.service";

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
  nextPage = 0;
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  displayedColumns = ['seqNo', 'description', 'duration'];

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private lessonsService: LessonsService,
  ) {
  }

  ngOnInit() {
    const courseUrl = this.route.snapshot.paramMap.get("courseUrl");
    this.course$ = this.coursesService.entities$.pipe(
      map(courses => courses.find(({url}) => courseUrl === url)),
    );
    this.lessons$ = this.lessonsService.entities$.pipe(
      withLatestFrom(this.course$),
      map(([lessons, course]) => {
          if (!this.nextPage) this.loadLessonsPage(course);
          return lessons;
      }),
    );
  }

  loadLessonsPage(course: Course) {
    this.lessonsService.getWithQuery({
      courseId: course.id,
      sortOrder: "asc",
      pageNumber: this.nextPage++,
      pageSize: 3,
    });
  }
}
