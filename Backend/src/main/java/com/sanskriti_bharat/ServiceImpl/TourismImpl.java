package com.sanskriti_bharat.ServiceImpl;

import com.sanskriti_bharat.Repository.TourismRepository;
import com.sanskriti_bharat.entity.Tourism;
import com.sanskriti_bharat.service.TourismService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourismImpl implements TourismService {

    private final TourismRepository tourismRepository;

    public TourismImpl(TourismRepository tourismRepository) {
        this.tourismRepository = tourismRepository;
    }

    @Override
    public Tourism addTourism(Tourism tourism) {
        return tourismRepository.save(tourism);
    }

    @Override
    public List<Tourism> addTourisms(List<Tourism> tourisms) {
        return tourismRepository.saveAll(tourisms);
    }

    @Override
    public List<Tourism> getAllTourism() {
        return tourismRepository.findAll();
    }

    @Override
    public Tourism getTourismById(Long id) {
        return tourismRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Tourism place not found"));
    }

    @Override
    public List<Tourism> getTourismByStateId(Long stateId) {
        return tourismRepository.findByStateId(stateId);
    }

    @Override
    public Tourism updateTourism(Long id, Tourism tourism) {

        Tourism existingTourism = getTourismById(id);

        existingTourism.setName(tourism.getName());
        existingTourism.setCategory(tourism.getCategory());
        existingTourism.setLocation(tourism.getLocation());
        existingTourism.setDescription(tourism.getDescription());
        existingTourism.setBestTimeToVisit(tourism.getBestTimeToVisit());
        existingTourism.setEntryFee(tourism.getEntryFee());
        existingTourism.setImageUrl(tourism.getImageUrl());
        existingTourism.setState(tourism.getState());

        return tourismRepository.save(existingTourism);
    }

    @Override
    public void deleteTourism(Long id) {
        tourismRepository.deleteById(id);
    }
}