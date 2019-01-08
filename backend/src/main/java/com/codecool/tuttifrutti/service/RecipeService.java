package com.codecool.tuttifrutti.service;

import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;


    public List<Recipe> getAllRecipes() {
        return this.recipeRepository.findAll();
    }

    public List<Recipe> getRecipesBySubstring(String substring) {
        return this.recipeRepository.findByNameContainingIgnoreCase(substring);
    }

    public List<Recipe> getTop5MostLikedRecipes() {
        return this.recipeRepository.findTop5ByOrderByTotalLikesDesc();
    }

    public Recipe getSingleRecipe(long id) {
        Optional<Recipe> recipe = this.recipeRepository.findById(id);
        return recipe.equals(Optional.empty()) ? null : recipe.get();
    }

}
