import { Recipe } from "./recipe.model";

export class User {
  public name: string;
  public password: string;
  public registrationDate: Date;
  public recipes: Recipe[];
  public favourite: Recipe[];


  constructor(name: string, password: string, registrationDate: Date, recipes: Recipe[], favourite: Recipe[]) {
    this.name = name;
    this.password = password;
    this.registrationDate = registrationDate;
    this.recipes = recipes;
    this.favourite = favourite;
  }
}
