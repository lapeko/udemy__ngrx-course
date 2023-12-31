import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";

const routes: Route[] = [
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
