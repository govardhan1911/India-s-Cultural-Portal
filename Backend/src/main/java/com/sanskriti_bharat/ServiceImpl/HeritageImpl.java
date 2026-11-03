package com.sanskriti_bharat.ServiceImpl;

import com.sanskriti_bharat.Repository.HeritageRepository;
import com.sanskriti_bharat.entity.Heritage;
import com.sanskriti_bharat.service.HeritageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeritageImpl implements HeritageService {

    private final HeritageRepository heritageRepository;

    public HeritageImpl(HeritageRepository heritageRepository) {
        this.heritageRepository = heritageRepository;
    }

    @Override
    public Heritage addHeritage(Heritage heritage) {
        return heritageRepository.save(heritage);
    }

    @Override
    public List<Heritage> addHeritages(List<Heritage> heritages) {
        return heritageRepository.saveAll(heritages);
    }

    @Override
    public List<Heritage> getAllHeritages() {
        return heritageRepository.findAll();
    }

    @Override
    public Heritage getHeritageById(Long id) {
        return heritageRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Heritage not found"));
    }

    @Override
    public List<Heritage> getHeritagesByStateId(Long stateId) {
        return heritageRepository.findByStateId(stateId);
    }

    @Override
    public Heritage updateHeritage(Long id, Heritage heritage) {

        Heritage existingHeritage = getHeritageById(id);

        existingHeritage.setName(heritage.getName());
        existingHeritage.setHeritageType(heritage.getHeritageType());
        existingHeritage.setLocation(heritage.getLocation());
        existingHeritage.setDescription(heritage.getDescription());
        existingHeritage.setHistory(heritage.getHistory());
        existingHeritage.setSignificance(heritage.getSignificance());
        existingHeritage.setImageUrl(heritage.getImageUrl());
        existingHeritage.setState(heritage.getState());

        return heritageRepository.save(existingHeritage);
    }

    @Override
    public void deleteHeritage(Long id) {
        heritageRepository.deleteById(id);
    }
}