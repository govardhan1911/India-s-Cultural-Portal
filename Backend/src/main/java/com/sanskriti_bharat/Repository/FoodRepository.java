package com.sanskriti_bharat.Repository;

import com.sanskriti_bharat.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food,Long> {
    List<Food> findByStateId(Long stateId);
}
