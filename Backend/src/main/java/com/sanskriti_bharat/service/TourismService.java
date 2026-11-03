package com.sanskriti_bharat.service;

import com.sanskriti_bharat.entity.Tourism;

import java.util.List;

public interface TourismService {

    Tourism addTourism(Tourism tourism);

    List<Tourism> addTourisms(List<Tourism> tourisms);

    List<Tourism> getAllTourism();

    Tourism getTourismById(Long id);

    List<Tourism> getTourismByStateId(Long stateId);

    Tourism updateTourism(Long id, Tourism tourism);

    void deleteTourism(Long id);
}