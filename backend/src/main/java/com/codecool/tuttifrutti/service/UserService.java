package com.codecool.tuttifrutti.service;

import com.codecool.tuttifrutti.dto.RecipeDTO;
import com.codecool.tuttifrutti.dto.UserDTO;
import com.codecool.tuttifrutti.model.Ingredient;
import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.model.User;
import com.codecool.tuttifrutti.repository.RecipeRepository;
import com.codecool.tuttifrutti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public User getUser(long user_id) {
        Optional<User> user = this.userRepository.findById(user_id);
        return user.equals(Optional.empty()) ? null : user.get();
    }

    public void likeRecipe(long user_id, long recipe_id) {
        Optional<User> userOptional = this.userRepository.findById(user_id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Optional<Recipe> recipe = this.recipeRepository.findById(recipe_id);
            if (recipe.isPresent() && user.getLikedRecipes().contains(recipe.get())) {
                user.removeLikedRecipe(recipe.get());
            } else {
                user.addLikedRecipe(recipe.get());
            }
            this.userRepository.save(user);
        }
    }

    public void addUsersRecipe(long user_id, RecipeDTO recipeDTO) {
        Optional<User> user = this.userRepository.findById(user_id);
        if (user.isPresent()) {
            User userObject = user.get();
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
                    .user(userObject)
                    .build();

            List<Ingredient> newIngredients = new ArrayList<>();
            recipeDTO.getIngredients()
                    .forEach(ingredientDTO -> newIngredients.add(
                            new Ingredient(ingredientDTO.getName(),
                                    ingredientDTO.getAmount(),
                                    ingredientDTO.getUnit(),
                                    newRecipe)));
            newRecipe.setIngredients(newIngredients);

            userObject.getRecipes().add(newRecipe);
            newRecipe.setUser(userObject);
//            userObject.addNewRecipe(recipeDTO);
//            this.recipeRepository.save(newRecipe);
            this.userRepository.save(userObject);
        }
    }

    public void editUsersRecipe(long user_id, long recipe_id, Recipe recipe) {
        Optional<User> user = this.userRepository.findById(user_id);
        if (user.isPresent()) {
            User userObject = user.get();
            Recipe oldRecipe = userObject.getRecipes().stream()
                    .filter(currentRecipe -> currentRecipe.getId() == recipe_id)
                    .findFirst().get();
            oldRecipe = recipe;
            oldRecipe.setUser(userObject);
            this.recipeRepository.save(recipe);
//            this.userRepository.save(userObject);
        }
    }

    public void deleteUsersRecipe(long user_id, long recipe_id) {
        Optional<User> userOptional = this.userRepository.findById(user_id);
        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//            user.getRecipes().forEach(user::removeRecipe);
//            this.userRepository.save(user);

            Optional<Recipe> recipe = this.recipeRepository.findById(recipe_id);
            recipe.ifPresent(recipe1 -> this.recipeRepository.delete(recipe1));
        }
    }

    public void registration(UserDTO userDTO) {
        User newUser = User.builder()
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .registrationDate(userDTO.getRegistrationDate())
                .build();
        this.userRepository.save(newUser);
    }

    public User login(String username, String password) {
        User user = this.userRepository.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) return user;

        return null;
    }

}
