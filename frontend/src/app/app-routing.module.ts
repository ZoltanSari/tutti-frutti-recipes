import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeListComponent} from "./components/recipe/recipe-list/recipe-list.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
