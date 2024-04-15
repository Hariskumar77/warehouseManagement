package com.bosch.whm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.whm.model.Robot;

@Repository
public interface RobotRepository extends JpaRepository<Robot, Integer> {
	Optional<Robot> findFirstByMaxCapacityGreaterThanEqual(double requiredCapacity);
}