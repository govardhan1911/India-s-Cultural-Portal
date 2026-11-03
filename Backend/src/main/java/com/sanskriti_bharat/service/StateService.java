package com.sanskriti_bharat.service;
import com.sanskriti_bharat.entity.State;

import java.util.List;



public interface StateService {

    State addState(State state);

    List<State> getAllStates();

    List<State> addAllStates(List<State> states);

    State getStateById(Long id);

    State updateState(Long id, State state);

    void deleteState(Long id);
}
