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
                .name("Pizza")
                .difficulty("HARD")
                .imageUrl("https://scontent-atl3-1.cdninstagram.com/vp/6554e58d71ac7609b8accf718206896e/5CB6CE96/t51.2885-15/e35/46985992_154096345561626_8824904335492512941_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com")
                .preparation("it is very difficult")
                .user(user1)
                .build();

        List<Ingredient> newIngredients1 = new ArrayList<>();
        newIngredients1.add(new Ingredient("Chicken", 2, "kg", recipe1));
        newIngredients1.add(new Ingredient("Greens", 5, "kg", recipe1));
        recipe1.setIngredients(newIngredients1);

        Recipe recipe2 = Recipe.builder()
                .name("Pancake")
                .difficulty("EASY")
                .imageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DXy_GcEBvK6nPlQefXcqDOWxOHzBY_HvC5UXdnw1gtHYV-mp")
                .preparation("it is so easy")
                .user(user1)
                .build();

        List<Ingredient> newIngredients2 = new ArrayList<>();
        newIngredients2.add(new Ingredient("Beef", 6, "pound", recipe2));
        newIngredients2.add(new Ingredient("Beef", 6, "pound", recipe2));
        recipe2.setIngredients(newIngredients2);

        Recipe recipe3 = Recipe.builder()
                .name("FishPie")
                .difficulty("HARD")
                .imageUrl("http://2.bp.blogspot.com/-Fbn90h16470/UieNcqeYHoI/AAAAAAAAAYQ/rSHQDsRCwSk/s1600/Photo(1).jpg")
                .preparation("it is very difficult")
                .user(user1)
                .build();

        List<Ingredient> newIngredients3 = new ArrayList<>();
        newIngredients3.add(new Ingredient("Chicken", 2, "kg", recipe3));
        newIngredients3.add(new Ingredient("Greens", 5, "kg", recipe3));
        recipe3.setIngredients(newIngredients3);

        Recipe recipe4 = Recipe.builder()
                .name("Chicken")
                .difficulty("HARD")
                .imageUrl("https://youimg1.c-ctrip.com/target/100c0l000000cna4nCA10.jpg")
                .preparation("it is very difficult")
                .user(user1)
                .build();

        List<Ingredient> newIngredients4 = new ArrayList<>();
        newIngredients4.add(new Ingredient("Chicken", 2, "kg", recipe4));
        newIngredients4.add(new Ingredient("Greens", 5, "kg", recipe4));
        recipe4.setIngredients(newIngredients4);

        Recipe recipe5 = Recipe.builder()
                .name("Gyoza")
                .difficulty("HARD")
                .imageUrl("https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2018/05/11/99/4726606.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600&exp=3600")
                .preparation("it is very difficult")
                .user(user1)
                .build();

        List<Ingredient> newIngredients5 = new ArrayList<>();
        newIngredients5.add(new Ingredient("Chicken", 2, "kg", recipe5));
        newIngredients5.add(new Ingredient("Greens", 5, "kg", recipe5));
        recipe5.setIngredients(newIngredients5);

        Recipe recipe6 = Recipe.builder()
                .name("Salmon")
                .difficulty("HARD")
                .imageUrl("https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*")
                .preparation("it is very difficult")
                .user(user1)
                .build();

        List<Ingredient> newIngredients6 = new ArrayList<>();
        newIngredients6.add(new Ingredient("Chicken", 2, "kg", recipe6));
        newIngredients6.add(new Ingredient("Greens", 5, "kg", recipe6));
        recipe6.setIngredients(newIngredients6);

        user1.addNewRecipe(recipe1);
        user1.addNewRecipe(recipe2);
        user1.addNewRecipe(recipe3);
        user2.addNewRecipe(recipe4);
        user2.addNewRecipe(recipe5);
        user2.addNewRecipe(recipe6);

        this.userRepository.save(user1);
        this.userRepository.save(user2);
    }

}

