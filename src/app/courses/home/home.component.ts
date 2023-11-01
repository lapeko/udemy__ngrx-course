import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog} from '@angular/material/dialog';
import {Store} from "@ngrx/store";

import {Course} from '../model/course';
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import {AppState} from "../../reducers";
import {advancedCourses, beginnerCourses, coursesLoaded, promoTotal} from "../courses.selectors";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    promoTotal$ = this.store.select(promoTotal);
    loading$: Observable<boolean> = this.store.select(coursesLoaded);
    beginnerCourses$: Observable<Course[]> = this.store.select(beginnerCourses);
    advancedCourses$: Observable<Course[]> = this.store.select(advancedCourses);

    constructor(
      private dialog: MatDialog,
      private store: Store<AppState>,
    ) {
    }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
