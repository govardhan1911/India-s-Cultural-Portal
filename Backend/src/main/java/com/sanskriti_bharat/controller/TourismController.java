package com.sanskriti_bharat.controller;

import com.sanskriti_bharat.entity.Tourism;
import com.sanskriti_bharat.service.TourismService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tourism")
@CrossOrigin(origins = "http://localhost:5173")
public class TourismController {

    private final TourismService tourismService;

    public TourismController(TourismService tourismService) {
        this.tourismService = tourismService;
    }

    @PostMapping
    public ResponseEntity<Tourism> addTourism(
            @RequestBody Tourism tourism) {

        return ResponseEntity.ok(
                tourismService.addTourism(tourism)
        );
    }

    @PostMapping("/bulk")
    public ResponseEntity<List<Tourism>> addTourisms(
            @RequestBody List<Tourism> tourisms) {

        return ResponseEntity.ok(
                tourismService.addTourisms(tourisms)
        );
    }

    @GetMapping
    public List<Tourism> getAllTourism() {
        return tourismService.getAllTourism();
    }

    @GetMapping("/{id}")
    public Tourism getTourismById(
            @PathVariable Long id) {

        return tourismService.getTourismById(id);
    }

    @GetMapping("/state/{stateId}")
    public List<Tourism> getTourismByStateId(
            @PathVariable Long stateId) {

        return tourismService.getTourismByStateId(stateId);
    }

    @PutMapping("/{id}")
    public Tourism updateTourism(
            @PathVariable Long id,
            @RequestBody Tourism tourism) {

        return tourismService.updateTourism(id, tourism);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTourism(
            @PathVariable Long id) {

        tourismService.deleteTourism(id);

        return ResponseEntity.ok(
                "Tourism place deleted successfully"
        );
    }
}