package com.codecool.tuttifrutti.dto;

import com.codecool.tuttifrutti.model.Recipe;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String username;
    private String password;
    private LocalDate registrationDate;
    private Collection<Recipe> recipes = new ArrayList<>();
    private Collection<Recipe> likedRecipes = new ArrayList<>();

}
