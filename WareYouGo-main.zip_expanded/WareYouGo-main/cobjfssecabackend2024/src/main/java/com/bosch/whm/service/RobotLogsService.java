package com.bosch.whm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.whm.model.RobotLogs;
import com.bosch.whm.repository.RobotLogsRepository;


@Service
public class RobotLogsService {
    
	@Autowired
	private RobotLogsRepository robotLogsRepository;
	

//	 public Optional<RobotLogs> getLogsById(int id) {
//	        return robotLogsApplicationRepository.findById(id);
//	    }
	 
	 public List<RobotLogs> getLogsByRobotId(int robotId) {
	        return robotLogsRepository.findByRobotId(robotId);
	    }
	 
	 public List<RobotLogs> getAllRobotLogs(){
		   return robotLogsRepository.findAll();
	   }
	   
	   public RobotLogs createRobotLogs(RobotLogs robotLogs) {
		   return robotLogsRepository.save(robotLogs);
	   }
}
