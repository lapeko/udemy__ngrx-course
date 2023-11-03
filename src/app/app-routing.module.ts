import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {authGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [authGuard],
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
