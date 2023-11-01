import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import {EditCourseDialogComponent} from './edit-course-dialog/edit-course-dialog.component';
import {CoursesHttpService} from './services/courses-http.service';
import {CourseComponent} from './course/course.component';
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
import {RouterModule, Routes} from '@angular/router';

import {heroResolver} from "./courses.resolver";
import {StoreModule} from "@ngrx/store";
import {coursesReducer, coursesStoreKey} from "./reducers/courses.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CoursesEffects} from "./courses.effects";

export const coursesRoutes: Routes = [
  {
    path: '',
    resolve: {
      courses: heroResolver,
    },
    component: HomeComponent

  },
  {
    path: ':courseUrl',
    component: CourseComponent
  }
];


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
    RouterModule.forChild(coursesRoutes),
    StoreModule.forFeature(coursesStoreKey, coursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  providers: [
    CoursesHttpService
  ]
})
export class CoursesModule {

  constructor() {

  }


}
