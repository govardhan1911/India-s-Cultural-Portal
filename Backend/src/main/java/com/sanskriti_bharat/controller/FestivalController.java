package com.sanskriti_bharat.controller;

import com.sanskriti_bharat.entity.Festival;
import com.sanskriti_bharat.service.FestivalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/festivals")
@CrossOrigin(origins = "http://localhost:5173")
public class FestivalController {

    private final FestivalService festivalService;

    public FestivalController(FestivalService festivalService) {
        this.festivalService = festivalService;
    }

    // Add ONE festival
    @PostMapping
    public ResponseEntity<Festival> addFestival(
            @RequestBody Festival festival) {

        return ResponseEntity.ok(
                festivalService.addFestival(festival)
        );
    }

    // Add MULTIPLE festivals
    @PostMapping("/bulk")
    public ResponseEntity<List<Festival>> addFestivals(
            @RequestBody List<Festival> festivals) {

        return ResponseEntity.ok(
                festivalService.addFestivals(festivals)
        );
    }

    @GetMapping
    public List<Festival> getAllFestivals() {
        return festivalService.getAllFestivals();
    }

    @GetMapping("/{id}")
    public Festival getFestivalById(
            @PathVariable Long id) {

        return festivalService.getFestivalById(id);
    }

    @GetMapping("/state/{stateId}")
    public List<Festival> getFestivalsByStateId(
            @PathVariable Long stateId) {

        return festivalService.getFestivalsByStateId(stateId);
    }

    @PutMapping("/{id}")
    public Festival updateFestival(
            @PathVariable Long id,
            @RequestBody Festival festival) {

        return festivalService.updateFestival(id, festival);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFestival(
            @PathVariable Long id) {

        festivalService.deleteFestival(id);

        return ResponseEntity.ok(
                "Festival deleted successfully"
        );
    }
}