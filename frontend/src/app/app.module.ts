import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { UserRecipeListComponent } from './components/user/user-recipe-list/user-recipe-list.component';
import { UserFavouriteRecipeComponent } from './components/user/user-favourite-recipe/user-favourite-recipe.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { RecipeStartComponent } from "./components/recipe/recipe-start/recipe-start.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    UserComponent,
    SearchComponent,
    LoginComponent,
    UserRecipeListComponent,
    UserFavouriteRecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeStartComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
