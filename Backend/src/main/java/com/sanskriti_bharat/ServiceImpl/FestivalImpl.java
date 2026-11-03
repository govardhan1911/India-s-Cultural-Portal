package com.sanskriti_bharat.ServiceImpl;

import com.sanskriti_bharat.Repository.FestivalRepository;
import com.sanskriti_bharat.entity.Festival;
import com.sanskriti_bharat.service.FestivalService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FestivalImpl implements FestivalService {

    private final FestivalRepository festivalRepository;

    public FestivalImpl(FestivalRepository festivalRepository) {
        this.festivalRepository = festivalRepository;
    }

    @Override
    public Festival addFestival(Festival festival) {
        return festivalRepository.save(festival);
    }

    @Override
    public List<Festival> addFestivals(List<Festival> festivals) {
        return festivalRepository.saveAll(festivals);
    }

    @Override
    public List<Festival> getAllFestivals() {
        return festivalRepository.findAll();
    }

    @Override
    public Festival getFestivalById(Long id) {
        return festivalRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Festival not found"));
    }

    @Override
    public List<Festival> getFestivalsByStateId(Long stateId) {
        return festivalRepository.findByStateId(stateId);
    }

    @Override
    public Festival updateFestival(Long id, Festival festival) {

        Festival existingFestival = getFestivalById(id);

        existingFestival.setName(festival.getName());
        existingFestival.setFestivalType(festival.getFestivalType());
        existingFestival.setMonth(festival.getMonth());
        existingFestival.setDescription(festival.getDescription());
        existingFestival.setHistory(festival.getHistory());
        existingFestival.setSignificance(festival.getSignificance());
        existingFestival.setImageUrl(festival.getImageUrl());
        existingFestival.setState(festival.getState());

        return festivalRepository.save(existingFestival);
    }

    @Override
    public void deleteFestival(Long id) {
        festivalRepository.deleteById(id);
    }
}