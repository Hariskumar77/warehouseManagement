package com.bosch.whm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.whm.model.Robot;
import com.bosch.whm.service.RobotService;

@RestController
@RequestMapping("/robots")
@CrossOrigin(origins = "*")
public class RobotController {

	@Autowired
	private RobotService robotService;
	
	@GetMapping
	public List<Robot> getAllRobots(){
		return robotService.getAllRobots();
	}

	 @GetMapping("/{id}")
	    public Robot getRobotById(@PathVariable int id) {
	        return robotService.getRobotById(id).orElse(null);
	    }
	 
	@PostMapping
	public Robot createRobot(@RequestBody Robot robot) {
		return robotService.createRobot(robot);
	}
	
	@DeleteMapping("/{id}")
	public void deleteRobot(@PathVariable int id) {
		robotService.deleteRobot(id);
	}
	
    @PutMapping("/{id}")
    public Robot updateRobot(@PathVariable int id, @RequestBody Robot robot) {
    	return robotService.updateRobot(id, robot);
    }
    
    @GetMapping("/robots1/{requiredCapacity}")
    public Robot getRobotByCapacity(@PathVariable double requiredCapacity) {
        return robotService.findRobotByCapacity(requiredCapacity);
    }
}


