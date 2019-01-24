import {Ingredient} from "./ingredient.model";
import { User } from './user.model';

export class Recipe {
  id: number;
  name: string;
  preparation: string;
  imageUrl: string;
  difficulty: string;
  totalLikes: number;
  ingredients: Ingredient[];
  categories: string[];
  preparationTime: number;
  creationDate: Date;
  user: User;


  constructor(id: number, name: string, preparation: string, imageUrl: string, difficulty: string, totalLikes: number, ingredients: Ingredient[], categories: string[], preparationTime: number, creationDate: Date, user: User) {
    this.id = id;
    this.name = name;
    this.preparation = preparation;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
    this.totalLikes = totalLikes;
    this.ingredients = ingredients;
    this.categories = categories;
    this.preparationTime = preparationTime;
    this.creationDate = creationDate;
    this.user = user;
  }
}
