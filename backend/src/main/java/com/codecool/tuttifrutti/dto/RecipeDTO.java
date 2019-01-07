package com.codecool.tuttifrutti.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Collection<String> ingredients = new ArrayList<>();

}
