import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeListComponent} from "./components/recipe/recipe-list/recipe-list.component";
import {LoginComponent} from "./components/login/login.component";
import {RecipeDetailsComponent} from "./components/recipe/recipe-details/recipe-details.component";
import { UserComponent } from './components/user/user.component';
import { AddNewRecipeComponent } from './components/recipe/new-recipe/add-new-recipe.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: LoginComponent},
  { path: 'user', component: UserComponent },
  { path: 'user/new', component: AddNewRecipeComponent},
  { path: 'search', component: SearchComponent },
  { path: ':id', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
