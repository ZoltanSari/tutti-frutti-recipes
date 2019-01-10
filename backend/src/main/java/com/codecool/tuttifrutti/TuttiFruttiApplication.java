package com.codecool.tuttifrutti;

import com.codecool.tuttifrutti.model.Ingredient;
import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.model.User;
import com.codecool.tuttifrutti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class TuttiFruttiApplication {

    @Autowired
    private UserRepository userRepository;


    public static void main(String[] args) {
        SpringApplication.run(TuttiFruttiApplication.class, args);
    }


    @PostConstruct
    public void loadDatabase() {
        User user1 = new User("Oli", "asd", LocalDate.now(), new ArrayList<>(), new ArrayList<>());

        User user2 = new User("Zoli", "456", LocalDate.now(), new ArrayList<>(), new ArrayList<>());

        Recipe recipe1 = Recipe.builder()
                .name("Gyros")
                .difficulty("HARD")
                .imageUrl("asdasdasd")
                .preparation("it is very difficult")
                .user(user1)
                .build();

        List<Ingredient> newIngredients1 = new ArrayList<>();
        newIngredients1.add(new Ingredient("Chicken", 2, "kg", recipe1));
        newIngredients1.add(new Ingredient("Greens", 5, "kg", recipe1));
        recipe1.setIngredients(newIngredients1);

        Recipe recipe2 = Recipe.builder()
                .name("Burger")
                .difficulty("EASY")
                .imageUrl("dsadsadsa")
                .preparation("it is so easy")
                .user(user1)
                .build();

        List<Ingredient> newIngredients2 = new ArrayList<>();
        newIngredients2.add(new Ingredient("Beef", 6, "pound", recipe2));
        newIngredients2.add(new Ingredient("Beef", 6, "pound", recipe2));
        recipe2.setIngredients(newIngredients2);

        user1.addNewRecipe(recipe1);
        user1.addNewRecipe(recipe2);

        this.userRepository.save(user1);
        this.userRepository.save(user2);
    }

}

