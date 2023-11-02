import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {CourseComponent} from "./course/course.component";
import {NgModule} from "@angular/core";

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
