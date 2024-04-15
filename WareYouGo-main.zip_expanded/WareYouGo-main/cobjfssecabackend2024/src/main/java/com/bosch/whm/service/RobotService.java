package com.bosch.whm.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.whm.model.Robot;
import com.bosch.whm.repository.RobotRepository;

@Service
public class RobotService {
   @Autowired
   private RobotRepository robotRepository;
   
   public List<Robot> getAllRobots(){
	   return robotRepository.findAll();
   }
   
   public Robot createRobot(Robot robot) {
	   return robotRepository.save(robot);
   }
   
   public Optional<Robot> getRobotById(int id) {
       return robotRepository.findById(id);
   }
   
   public void deleteRobot(int id) {
	   robotRepository.deleteById(id);
   }
   
   public Robot updateRobot(int id, Robot robot) {
	   if(robotRepository.existsById(id)) {
		   robot.setId(id);
		   return robotRepository.save(robot);
	   }
	   return null;
   }
   
   public Robot findRobotByCapacity(double requiredCapacity) {
       Optional<Robot> optionalRobot = robotRepository.findFirstByMaxCapacityGreaterThanEqual(requiredCapacity);
       return optionalRobot.orElse(null);
   }

}
