import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

import {Course} from '../model/course';
import {CoursesService} from "../store/courses.service";

@Component({
  selector: 'course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseDialogComponent {
  form: FormGroup;
  dialogTitle: string;
  course: Course;
  mode: 'create' | 'update';
  loading$: Observable<boolean>;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    private coursesService: CoursesService,
  ) {

    this.dialogTitle = data.dialogTitle;
    this.course = data.course;
    this.mode = data.mode;

    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: ['', []]
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({...data.course});
    } else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required]
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const course: Course = {
      ...this.course,
      ...this.form.value,
    };

    this.mode === "create"
      ? this.coursesService.add(course)
      : this.coursesService.update(course);

    this.dialogRef.close();
  }
}
