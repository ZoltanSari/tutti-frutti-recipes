package com.codecool.tuttifrutti.service;

import com.codecool.tuttifrutti.dto.RecipeDTO;
import com.codecool.tuttifrutti.dto.UserDTO;
import com.codecool.tuttifrutti.model.Ingredient;
import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.model.User;
import com.codecool.tuttifrutti.repository.RecipeRepository;
import com.codecool.tuttifrutti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    public void likeRecipe(String username, long recipe_id) {
        User user = this.userRepository.findByUsername(username);
        if (user != null) {
            Optional<Recipe> recipe = this.recipeRepository.findById(recipe_id);
            if (recipe.isPresent() && user.getLikedRecipes().contains(recipe.get())) {
                user.removeLikedRecipe(recipe.get());
            } else {
                user.addLikedRecipe(recipe.get());
            }
            this.userRepository.save(user);
        }
    }

    public void addUsersRecipe(String username, RecipeDTO recipeDTO) {
        User user = this.userRepository.findByUsername(username);
        if (user!= null) {
            Recipe newRecipe = Recipe.builder()
                    .name(recipeDTO.getName())
                    .preparation(recipeDTO.getPreparation())
                    .imageUrl(recipeDTO.getImageUrl())
                    .difficulty(recipeDTO.getDifficulty())
                    .ingredients(recipeDTO.getIngredients()
                            .stream()
                            .map(ingredientDTO -> new Ingredient(ingredientDTO.getName(),
                                    ingredientDTO.getAmount(),
                                    ingredientDTO.getUnit()))
                            .collect(Collectors.toList()))
                    .user(user)
                    .build();

            List<Ingredient> newIngredients = new ArrayList<>();
            recipeDTO.getIngredients()
                    .forEach(ingredientDTO -> newIngredients.add(
                            new Ingredient(ingredientDTO.getName(),
                                    ingredientDTO.getAmount(),
                                    ingredientDTO.getUnit(),
                                    newRecipe)));
            newRecipe.setIngredients(newIngredients);

            user.getRecipes().add(newRecipe);
            newRecipe.setUser(user);
//            userObject.addNewRecipe(recipeDTO);
//            this.recipeRepository.save(newRecipe);
            this.userRepository.save(user);
        }
    }

    public void editUsersRecipe(String username, long recipe_id, Recipe recipe) {
        User user = this.userRepository.findByUsername(username);
        if (user != null) {
            Recipe oldRecipe = user.getRecipes().stream()
                    .filter(currentRecipe -> currentRecipe.getId() == recipe_id)
                    .findFirst().get();
            oldRecipe = recipe;
            oldRecipe.setUser(user);
            this.recipeRepository.save(recipe);
//            this.userRepository.save(userObject);
        }
    }

    public void deleteUsersRecipe(String username, long recipe_id) {
        User user = this.userRepository.findByUsername(username);
        ArrayList<Recipe> recipes = new ArrayList<Recipe>();
        if (user != null) {
            for (Recipe recipe : user.getRecipes()) {
                if (recipe.getId() == recipe_id) {
                    recipes.add(recipe);
                }
            }
            user.getRecipes().remove(recipes.get(0));
            this.userRepository.save(user);

            Optional<Recipe> recipe = this.recipeRepository.findById(recipe_id);
            recipe.ifPresent(recipe1 -> this.recipeRepository.delete(recipe1));
        }
    }

    public void registration(UserDTO userDTO) {
        User newUser = User.builder()
                .username(userDTO.getUsername())
                .password(this.bCryptPasswordEncoder.encode(userDTO.getPassword()))
//                .registrationDate(userDTO.getRegistrationDate())
                .registrationDate(LocalDate.now())
                .build();
        this.userRepository.save(newUser);
    }

    public User login(String username, String password) {
        User user = this.userRepository.findByUsername(username);
        System.out.println(user != null && user.getPassword().equals(password));
        if (user != null && user.getPassword().equals(password)) return user;

        return null;
    }
}
