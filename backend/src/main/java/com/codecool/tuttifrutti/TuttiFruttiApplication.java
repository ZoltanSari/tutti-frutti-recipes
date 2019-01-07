package com.codecool.tuttifrutti;

import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.model.User;
import com.codecool.tuttifrutti.repository.RecipeRepository;
import com.codecool.tuttifrutti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

@SpringBootApplication
public class TuttiFruttiApplication {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RecipeRepository recipeRepository;


    public static void main(String[] args) {
        SpringApplication.run(TuttiFruttiApplication.class, args);
    }


    @PostConstruct
    public void loadDatabase() {
//        User user1 = User.builder()
//                .username("Oli")
//                .password("123")
//                .registrationDate(LocalDate.now())
//                .build();
        User user1 = new User("Oli", "asd", LocalDate.now(), new ArrayList<>(), new ArrayList<>());

        User user2 = User.builder()
                .username("Zoli")
                .password("456")
                .registrationDate(LocalDate.now())
                .build();

        Recipe recipe1 = Recipe.builder()
                .name("Gyros")
                .difficulty("HARD")
                .imageUrl("asdasdasd")
                .preparation("it is very difficult")
                .user(user1)
                .ingredient("Chicken")
                .ingredient("Greens")
                .build();
//        recipe1.addIngredient("Chicken");
//        recipe1.addIngredient("Greens");

        Recipe recipe2 = Recipe.builder()
                .name("Burger")
                .difficulty("EASY")
                .imageUrl("dsadsadsa")
                .preparation("it is so easy")
                .user(user1)
                .build();
        recipe2.addIngredient("Beef");
        recipe2.addIngredient("Buns");

        user1.addNewRecipe(recipe1);
        user1.addNewRecipe(recipe2);

        this.userRepository.save(user1);
        this.userRepository.save(user2);
    }

}

