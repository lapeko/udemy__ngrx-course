import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {map} from "rxjs/operators";

import {defaultDialogConfig} from '../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import {CoursesService} from "../store/courses.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  promoTotal$ = this.coursesService.entities$
    .pipe(map(courses => courses.filter(({promo}) => promo).length));
  beginnerCourses$ = this.coursesService.entities$
    .pipe(map(courses => courses.filter(({category}) => category === "BEGINNER")));
  advancedCourses$ = this.coursesService.entities$
    .pipe(map(courses => courses.filter(({category}) => category === "ADVANCED")));

  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
  ) {
  }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
