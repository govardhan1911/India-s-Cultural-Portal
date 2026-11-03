package com.sanskriti_bharat.controller;


import com.sanskriti_bharat.entity.State;
import com.sanskriti_bharat.service.StateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/states")
@CrossOrigin(origins = "*")
public class StateController {

    private final StateService stateService;

    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    @GetMapping
    public List<State> getAllStates() {
        return stateService.getAllStates();
    }

    @PostMapping
    public State addState(@RequestBody State state) {
        return stateService.addState(state);
    }

    @PostMapping("/bulk")
    public List<State> addAllStates(@RequestBody List<State> states) {
        return stateService.addAllStates(states);
    }
}
