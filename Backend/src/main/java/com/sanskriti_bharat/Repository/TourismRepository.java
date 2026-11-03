package com.sanskriti_bharat.Repository;

import com.sanskriti_bharat.entity.Tourism;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TourismRepository extends JpaRepository<Tourism, Long> {

    List<Tourism> findByStateId(Long stateId);
}