package com.bosch.whm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.whm.model.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {

}
