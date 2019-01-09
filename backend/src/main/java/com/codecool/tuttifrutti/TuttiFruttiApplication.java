package com.codecool.tuttifrutti;

import com.codecool.tuttifrutti.model.Recipe;
import com.codecool.tuttifrutti.model.User;
import com.codecool.tuttifrutti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

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
                .ingredient("Chicken")
                .ingredient("Greens")
                .build();

        Recipe recipe2 = Recipe.builder()
                .name("Burger")
                .difficulty("EASY")
                .imageUrl("dsadsadsa")
                .preparation("it is so easy")
                .user(user1)
                .ingredient("Beef")
                .ingredient("Buns")
                .build();

        user1.addNewRecipe(recipe1);
        user1.addNewRecipe(recipe2);

        this.userRepository.save(user1);
        this.userRepository.save(user2);
    }
}

