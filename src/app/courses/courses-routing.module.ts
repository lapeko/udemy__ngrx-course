import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {HomeComponent} from "./home/home.component";
import {CourseComponent} from "./course/course.component";

const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: ':courseUrl',
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {
}
