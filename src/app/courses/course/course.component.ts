import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {Course} from '../model/course';
import {Lesson} from '../model/lesson';
import {CoursesService} from "../store/courses.service";

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
    private route: ActivatedRoute,
    private coursesService: CoursesService,
  ) {
  }

  ngOnInit() {
    const courseUrl = this.route.snapshot.paramMap.get("courseUrl");
    this.course$ = this.coursesService.entities$.pipe(
      map(courses => courses.find(({url}) => courseUrl === url)),
    );
    // this.lessons$ = this.course$.pipe(
    //   switchMap(course => this.coursesService.findLessons(course.id)),
    // );
  }

  loadLessonsPage(course: Course) {
  }
}
