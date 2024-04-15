package com.bosch.whm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.whm.model.RobotLogs;
import com.bosch.whm.service.RobotLogsService;

@RestController
@RequestMapping("/robotLogs")
@CrossOrigin(origins = "*")
public class RobotLogsController {

	 @Autowired
	 private RobotLogsService robotLogsService;
	 
	 @GetMapping("/{robot_id}")
	    public List<RobotLogs> getTaskById(@PathVariable Integer robot_id) {
	        return robotLogsService.getLogsByRobotId(robot_id);
	    }
	 
	 @GetMapping
		public List<RobotLogs> getAllRobots(){
			return robotLogsService.getAllRobotLogs();
		}

		@PostMapping
		public RobotLogs createRobotLogs(@RequestBody RobotLogs robotLogs) {
			return robotLogsService.createRobotLogs(robotLogs);
		}
}
