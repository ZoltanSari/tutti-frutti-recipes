package com.codecool.tuttifrutti.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDTO {

    private String name;
    private int amount;
    private String unit;

}
