package com.codecool.tuttifrutti.model;

import com.codecool.tuttifrutti.dto.RecipeDTO;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
@Builder
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true, nullable = false, name = "username")
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(name = "registration_date", nullable = false)
    private LocalDate registrationDate;

    @OneToMany(mappedBy = "user", cascade = { CascadeType.PERSIST, CascadeType.REMOVE, CascadeType.MERGE })
    @LazyCollection(LazyCollectionOption.TRUE)
    @ToString.Exclude
//    @Singular
    @JsonManagedReference
    private Collection<Recipe> recipes = new ArrayList<>();

    @ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.REMOVE, CascadeType.MERGE })
    @LazyCollection(LazyCollectionOption.TRUE)
    @JoinTable(joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    @ToString.Exclude
    @JsonManagedReference
//    @Singular
    private Collection<Recipe> likedRecipes = new ArrayList<>();

//    @Builder
    public User(String username,
                String password,
                LocalDate registrationDate,
                Collection<Recipe> recipes,
                Collection<Recipe> likedRecipes) {
        this.username = username;
        this.password = password;
        this.registrationDate = registrationDate;
        this.recipes = recipes;
        this.likedRecipes = likedRecipes;
    }

    public void addNewRecipe(RecipeDTO recipeDTO) {
        Recipe newRecipe = Recipe.builder()
                .name(recipeDTO.getName())
                .preparation(recipeDTO.getPreparation())
                .imageUrl(recipeDTO.getImageUrl())
                .difficulty(recipeDTO.getDifficulty())
                .ingredients(recipeDTO.getIngredients())
                .user(this)
                .build();
//        this.recipes = new ArrayList<>(this.recipes);
        this.recipes.add(newRecipe);
//        newRecipe.setUser(this);
    }

    public void addNewRecipe(Recipe recipe) {
//        this.recipes = new ArrayList<>(this.recipes);
        this.recipes.add(recipe);
        recipe.setUser(this);
    }

    public void removeRecipe(Recipe recipe) {
        this.recipes.remove(recipe);
    }

    public void addLikedRecipe(Recipe recipe) {
        this.likedRecipes.add(recipe);
        recipe.increaseTotalLiked();
    }

    public void removeLikedRecipe(Recipe recipe) {
        this.likedRecipes.remove(recipe);
        recipe.decreaseTotalLiked();
    }

}
