package com.codecool.tuttifrutti.repository;

import com.codecool.tuttifrutti.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> findByNameContainingIgnoreCase(String substring);

    List<Recipe> findTop5ByOrderByTotalLikesDesc();

}
