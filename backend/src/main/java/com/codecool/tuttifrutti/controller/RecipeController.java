package com.codecool.tuttifrutti.controller;

import com.codecool.tuttifrutti.model.Category;
import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;


    @GetMapping
    public List<Recipe> getAllRecipes() {
        return this.recipeService.getAllRecipes();
    }

    @GetMapping("/top-5")
    public List<Recipe> getTop5MostLikedRecipes() {
        return this.recipeService.getTop5MostLikedRecipes();
    }

    @GetMapping("/search")
    public List<Recipe> getSeriesBySubstring(@RequestParam String substring) {
        return this.recipeService.getRecipesBySubstring(substring);
    }

    @GetMapping("/{id}")
    public Recipe getSingleRecipe(@PathVariable long id) {
        return this.recipeService.getSingleRecipe(id);
    }

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return this.recipeService.getCategories();
    }

}
