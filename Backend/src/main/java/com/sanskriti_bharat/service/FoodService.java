package com.sanskriti_bharat.service;

import com.sanskriti_bharat.entity.Food;

import java.util.List;

public interface FoodService {

    Food addFood(Food food);
    List<Food> addFoods(List<Food> foods);
    List<Food> getAllFoods();

    Food getFoodById(Long id);

    List<Food> getFoodsByStateId(Long stateId);

    Food updateFood(Long id, Food food);

    void deleteFood(Long id);
}
