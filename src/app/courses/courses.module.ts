import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {EntityDataService, EntityDefinitionService} from "@ngrx/data";

import {HomeComponent} from './home/home.component';
import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import {EditCourseDialogComponent} from './edit-course-dialog/edit-course-dialog.component';
import {CourseComponent} from './course/course.component';
import {CoursesRoutingModule} from "./courses-routing.module";
import {coursesEntityMetadataMap} from "./store/course-metadata";
import {CoursesService} from "./store/courses.service";
import {CoursesDataService} from "./store/courses-data.service";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent,
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent,
  ],
  providers: [
    CoursesService,
    CoursesDataService,
  ]
})
export class CoursesModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    coursesDataService: CoursesDataService,
  ) {
    eds.registerMetadataMap(coursesEntityMetadataMap);
    entityDataService.registerService("Course", coursesDataService);
  }
}
