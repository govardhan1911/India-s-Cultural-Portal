package com.sanskriti_bharat.controller;

import com.sanskriti_bharat.entity.Food;
import com.sanskriti_bharat.service.FoodService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin(origins = "http://localhost:5173")
public class FoodController {

    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    // Add single food
    @PostMapping
    public ResponseEntity<Food> addFood(
            @RequestBody Food food) {

        return ResponseEntity.ok(
                foodService.addFood(food)
        );
    }

    // Add multiple foods
    @PostMapping("/bulk")
    public ResponseEntity<List<Food>> addFoods(
            @RequestBody List<Food> foods) {

        return ResponseEntity.ok(
                foodService.addFoods(foods)
        );
    }

    // Get all foods
    @GetMapping
    public List<Food> getAllFoods() {
        return foodService.getAllFoods();
    }

    // Get food by ID
    @GetMapping("/{id}")
    public Food getFoodById(
            @PathVariable Long id) {

        return foodService.getFoodById(id);
    }

    // Get foods by state
    @GetMapping("/state/{stateId}")
    public List<Food> getFoodsByStateId(
            @PathVariable Long stateId) {

        return foodService.getFoodsByStateId(stateId);
    }

    // Update food
    @PutMapping("/{id}")
    public Food updateFood(
            @PathVariable Long id,
            @RequestBody Food food) {

        return foodService.updateFood(id, food);
    }

    // Delete food
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFood(
            @PathVariable Long id) {

        foodService.deleteFood(id);

        return ResponseEntity.ok(
                "Food deleted successfully"
        );
    }
}