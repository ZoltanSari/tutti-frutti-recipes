package com.codecool.tuttifrutti.dto;

import com.codecool.tuttifrutti.model.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {

    private String name;
    private String preparation;
    private String imageUrl;
    private String difficulty;
    private Collection<IngredientDTO> ingredients = new ArrayList<>();
    private int preparationTime;
    private LocalDate creationDate;
    private Collection<Category> categories = new ArrayList<>();

}
