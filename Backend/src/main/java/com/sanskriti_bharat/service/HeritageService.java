package com.sanskriti_bharat.service;

import com.sanskriti_bharat.entity.Heritage;

import java.util.List;

public interface HeritageService {

    Heritage addHeritage(Heritage heritage);

    List<Heritage> addHeritages(List<Heritage> heritages);

    List<Heritage> getAllHeritages();

    Heritage getHeritageById(Long id);

    List<Heritage> getHeritagesByStateId(Long stateId);

    Heritage updateHeritage(Long id, Heritage heritage);

    void deleteHeritage(Long id);
}