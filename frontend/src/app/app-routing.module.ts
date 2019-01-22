import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeListComponent} from "./components/recipe/recipe-list/recipe-list.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RecipeDetailsComponent} from "./components/recipe/recipe-details/recipe-details.component";
import { UserComponent } from './components/user/user.component';
import { AddNewRecipeComponent } from './components/recipe/new-recipe/add-new-recipe.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserRecipeListComponent } from './components/user/user-recipe-list/user-recipe-list.component';
import { UserFavouriteRecipeComponent } from './components/user/user-favourite-recipe/user-favourite-recipe.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'user/new', component: AddNewRecipeComponent, canActivate: [AuthGuard]},
  { path: 'user-recipe', component: UserRecipeListComponent, canActivate: [AuthGuard]},
  { path: 'user-favourite', component: UserFavouriteRecipeComponent, canActivate: [AuthGuard]},
  { path: 'search', component: SearchComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  { path: ':id', component: RecipeDetailsComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
