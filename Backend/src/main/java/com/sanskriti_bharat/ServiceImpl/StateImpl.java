package com.sanskriti_bharat.ServiceImpl;

import com.sanskriti_bharat.Repository.StateRepository;
import com.sanskriti_bharat.entity.State;
import com.sanskriti_bharat.service.StateService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateImpl implements StateService {

    private final StateRepository stateRepository;

    public StateImpl(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    // Add one State
    @Override
    public State addState(State state) {
        return stateRepository.save(state);
    }

    // Add multiple States
    @Override
    public List<State> addAllStates(List<State> states) {
        return stateRepository.saveAll(states);
    }

    // Get all States
    @Override
    public List<State> getAllStates() {
        return stateRepository.findAll();
    }

    // Get State by ID
    @Override
    public State getStateById(Long id) {
        return stateRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("State not found with ID: " + id)
                );
    }

    // Update State
    @Override
    public State updateState(Long id, State state) {

        State existingState = getStateById(id);

        existingState.setName(state.getName());
        existingState.setSlug(state.getSlug());
        existingState.setType(state.getType());
        existingState.setCapital(state.getCapital());
        existingState.setOfficialLanguage(state.getOfficialLanguage());
        existingState.setPopulation(state.getPopulation());
        existingState.setAreaSqKm(state.getAreaSqKm());
        existingState.setDescription(state.getDescription());
        existingState.setHistory(state.getHistory());
        existingState.setCulture(state.getCulture());
        existingState.setImageUrl(state.getImageUrl());

        return stateRepository.save(existingState);
    }

    // Delete State
    @Override
    public void deleteState(Long id) {

        State existingState = getStateById(id);

        stateRepository.delete(existingState);
    }
}