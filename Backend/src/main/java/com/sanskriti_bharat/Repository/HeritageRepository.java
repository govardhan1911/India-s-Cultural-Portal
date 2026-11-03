package com.sanskriti_bharat.Repository;

import com.sanskriti_bharat.entity.Heritage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HeritageRepository extends JpaRepository<Heritage,Long> {

    List<Heritage> findByStateId(Long stateId);
}
