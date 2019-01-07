package com.codecool.tuttifrutti.controller;

import com.codecool.tuttifrutti.dto.RecipeDTO;
import com.codecool.tuttifrutti.dto.UserDTO;
import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.model.User;
import com.codecool.tuttifrutti.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/{user_id}")
    public User getUser(@PathVariable long user_id) {
        return this.userService.getUser(user_id);
    }

    @PutMapping("/{user_id}/liked-recipes/recipes/{recipe_id}")
    public void likeRecipe(@PathVariable long user_id, @PathVariable long recipe_id) {
        this.userService.likeRecipe(user_id, recipe_id);
    }

    @PostMapping("/{user_id}/add-recipe")
    public void addUsersRecipe(@PathVariable long user_id, @RequestBody RecipeDTO recipeDTO) {
        this.userService.addUsersRecipe(user_id, recipeDTO);
    }

    @PutMapping("/{user_id}/recipes/{recipe_id}")
    public void editUsersRecipe(@PathVariable long user_id, @PathVariable long recipe_id, @RequestBody Recipe recipe) {
        this.userService.editUsersRecipe(user_id, recipe_id, recipe);
    }

    @DeleteMapping("/{user_id}/recipes/{recipe_id}")
    public void deleteUsersRecipe(@PathVariable long user_id, @PathVariable long recipe_id) {
        this.userService.deleteUsersRecipe(user_id, recipe_id);
    }

    @PostMapping("/registration")
    public void registration(@RequestBody UserDTO userDTO) {
        this.userService.registration(userDTO);
    }

    @PostMapping("/login")
    public User login(@RequestBody Map<String, String> requestJson) {
        return this.userService.login(requestJson.get("username"), requestJson.get("password"));
    }

}
