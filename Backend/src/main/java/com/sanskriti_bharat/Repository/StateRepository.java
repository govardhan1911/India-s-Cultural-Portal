package com.sanskriti_bharat.Repository;

import com.sanskriti_bharat.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StateRepository extends JpaRepository<State ,Long> {
}
