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


    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return this.userService.getUser(username);
    }

    @PutMapping("/{username}/liked-recipes/recipes/{recipe_id}")
    public void likeRecipe(@PathVariable String username, @PathVariable long recipe_id) {
        this.userService.likeRecipe(username, recipe_id);
    }

    @PostMapping("/{username}/add-recipe")
    public void addUsersRecipe(@PathVariable String username, @RequestBody RecipeDTO recipeDTO) {
        this.userService.addUsersRecipe(username, recipeDTO);
    }

    @PutMapping("/{username}/recipes/{recipe_id}")
    public void editUsersRecipe(@PathVariable String username, @PathVariable long recipe_id, @RequestBody Recipe recipe) {
        this.userService.editUsersRecipe(username, recipe_id, recipe);
    }

    @DeleteMapping("/{username}/recipes/{recipe_id}")
    public void deleteUsersRecipe(@PathVariable String username, @PathVariable long recipe_id) {
        this.userService.deleteUsersRecipe(username, recipe_id);
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
