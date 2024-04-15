package com.bosch.whm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.bosch.whm.model.SafetyStockIndicator;
import com.bosch.whm.service.SafetyStockIndicatorBOService;

@RestControllerAdvice
@RequestMapping("/safetystock")
@CrossOrigin(origins = "*")
public class SafetyStockIndicatorController {
	
	@Autowired
	private SafetyStockIndicatorBOService service;
	
	@GetMapping
	public List<SafetyStockIndicator> getThresholdItems(){
		return service.getAllStockSafetyItems();
		
	}
	
}