package com.sanskriti_bharat.service;

import com.sanskriti_bharat.entity.Festival;

import java.util.List;

public interface FestivalService {

    Festival addFestival(Festival festival);

    List<Festival> addFestivals(List<Festival> festivals);

    List<Festival> getAllFestivals();

    Festival getFestivalById(Long id);

    List<Festival> getFestivalsByStateId(Long stateId);

    Festival updateFestival(Long id, Festival festival);

    void deleteFestival(Long id);
}