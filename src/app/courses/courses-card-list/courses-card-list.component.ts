import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {EditCourseDialogComponent} from "../edit-course-dialog/edit-course-dialog.component";
import {Course} from "../model/course";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {CoursesService} from "../store/courses.service";

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesCardListComponent {
  @Input() courses: Course[];

  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
  ) {
  }

  editCourse(course: Course) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Edit Course",
      course,
      mode: 'update'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe();
  }

  onDeleteCourse(course: Course) {
    this.coursesService.delete(course);
  }
}
