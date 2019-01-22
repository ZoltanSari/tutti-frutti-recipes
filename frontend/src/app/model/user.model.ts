import { Recipe } from "./recipe.model";

export class User {
  public id: number;
  public name: string;
  public password: string;
  public registrationDate: Date;
  public recipes: Recipe[];
  public likedRecipes: Recipe[];


  constructor(id: number, name: string, password: string, registrationDate: Date, recipes: Recipe[], favourite: Recipe[]) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.registrationDate = registrationDate;
    this.recipes = recipes;
    this.likedRecipes = favourite;
  }
}
