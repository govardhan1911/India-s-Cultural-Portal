package com.sanskriti_bharat.ServiceImpl;

import com.sanskriti_bharat.Repository.FoodRepository;
import com.sanskriti_bharat.entity.Food;
import com.sanskriti_bharat.service.FoodService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodImpl implements FoodService {

    private final FoodRepository foodRepository;

    public FoodImpl(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @Override
    public Food addFood(Food food) {
        return foodRepository.save(food);
    }

    @Override
    public List<Food> addFoods(List<Food> foods) {
        return foodRepository.saveAll(foods);
    }

    @Override
    public List<Food> getAllFoods() {
        return foodRepository.findAll();
    }

    @Override
    public Food getFoodById(Long id) {
        return foodRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Food not found"));
    }

    @Override
    public List<Food> getFoodsByStateId(Long stateId) {
        return foodRepository.findByStateId(stateId);
    }

    @Override
    public Food updateFood(Long id, Food food) {

        Food existingFood = getFoodById(id);

        existingFood.setName(food.getName());
        existingFood.setCategory(food.getCategory());
        existingFood.setOrigin(food.getOrigin());
        existingFood.setDescription(food.getDescription());
        existingFood.setIngredients(food.getIngredients());
        existingFood.setImageUrl(food.getImageUrl());
        existingFood.setState(food.getState());

        return foodRepository.save(existingFood);
    }

    @Override
    public void deleteFood(Long id) {
        foodRepository.deleteById(id);
    }
}