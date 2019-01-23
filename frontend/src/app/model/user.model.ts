import { Recipe } from "./recipe.model";

export class User {
  public id: number;
  public username: string;
  public password: string;
  public registrationDate: Date;
  public recipes: Recipe[];
  public likedRecipes: Recipe[];


  constructor(id: number, username: string, password: string, registrationDate: Date, recipes: Recipe[], favourite: Recipe[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.registrationDate = registrationDate;
    this.recipes = recipes;
    this.likedRecipes = favourite;
  }
}
