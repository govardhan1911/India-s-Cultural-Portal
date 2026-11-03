package com.sanskriti_bharat.controller;

import com.sanskriti_bharat.entity.Heritage;
import com.sanskriti_bharat.service.HeritageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/heritage")
@CrossOrigin(origins = "http://localhost:5173")
public class HeritageController {

    private final HeritageService heritageService;

    public HeritageController(HeritageService heritageService) {
        this.heritageService = heritageService;
    }

    // Add one heritage place
    @PostMapping
    public ResponseEntity<Heritage> addHeritage(
            @RequestBody Heritage heritage) {

        return ResponseEntity.ok(
                heritageService.addHeritage(heritage)
        );
    }

    // Add multiple heritage places
    @PostMapping("/bulk")
    public ResponseEntity<List<Heritage>> addHeritages(
            @RequestBody List<Heritage> heritages) {

        return ResponseEntity.ok(
                heritageService.addHeritages(heritages)
        );
    }

    // Get all heritage places
    @GetMapping
    public List<Heritage> getAllHeritages() {
        return heritageService.getAllHeritages();
    }

    // Get heritage by ID
    @GetMapping("/{id}")
    public Heritage getHeritageById(
            @PathVariable Long id) {

        return heritageService.getHeritageById(id);
    }

    // Get heritage by state
    @GetMapping("/state/{stateId}")
    public List<Heritage> getHeritagesByStateId(
            @PathVariable Long stateId) {

        return heritageService.getHeritagesByStateId(stateId);
    }

    // Update heritage
    @PutMapping("/{id}")
    public Heritage updateHeritage(
            @PathVariable Long id,
            @RequestBody Heritage heritage) {

        return heritageService.updateHeritage(id, heritage);
    }

    // Delete heritage
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHeritage(
            @PathVariable Long id) {

        heritageService.deleteHeritage(id);

        return ResponseEntity.ok(
                "Heritage deleted successfully"
        );
    }
}