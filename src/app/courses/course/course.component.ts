import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {concatMap} from 'rxjs/operators';

import {Course} from '../model/course';
import {Lesson} from '../model/lesson';
import {CoursesHttpService} from '../services/courses-http.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  nextPage = 0;
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  displayedColumns = ['seqNo', 'description', 'duration'];

  constructor(
    private coursesService: CoursesHttpService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const courseUrl = this.route.snapshot.paramMap.get("courseUrl");
    this.course$ = this.coursesService.findCourseByUrl(courseUrl);
    this.lessons$ = this.course$.pipe(
      concatMap(course => this.coursesService.findLessons(course.id)),
    );
  }

  loadLessonsPage(course: Course) {
  }
}
