package com.bosch.whm.controller;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.Location;
import com.bosch.whm.model.LocationAnalyzer;
import com.bosch.whm.model.Product;
import com.bosch.whm.model.StatusCode;
import com.bosch.whm.service.LocationService;

@RestController
@RequestMapping("/analyze")
@CrossOrigin(origins = "*")
public class LocationAnalyzerController {
	@Autowired
	private LocationService locationService;
	
	@PostMapping
	public List<LocationAnalyzer> getAllAvailableLocations(@RequestBody Product product) {
		List<Location> availableLocations =  locationService.getAllLocations();
		List<LocationAnalyzer> locations = new ArrayList<LocationAnalyzer>();
		for(Location i:availableLocations) {
			if(i.getStatusCode()==StatusCode.DEFAULT) {
				LocationAnalyzer locationAnalyzer = new LocationAnalyzer(i);
				locationAnalyzer.setQuantityBasedOnProduct(product);
				locations.add(locationAnalyzer);
			}
		}
		return locations;
	}
	
	@PutMapping
	public Location updateLocation(@RequestBody Location location) throws Exception {
		Location currentLocation = locationService.getLocation(location.getLocationId());
		if(currentLocation==null) {
			throw new Exception("No location found with id : "+location.getLocationId());
		}
		else {
			currentLocation.setDescription(location.getDescription());
			currentLocation.setHeight(location.getHeight());
			currentLocation.setLength(location.getLength());
			currentLocation.setRackId(location.getRackId());
			currentLocation.setShelfId(location.getShelfId());
			currentLocation.setStatusCode(StatusCode.TEMPORARILY_BLOCKED);
			currentLocation.setWidth(location.getWidth());
			
			locationService.updateLocation(currentLocation);
			System.out.println("updated");
			return new Location(
					currentLocation.getLocationId(),
					currentLocation.getDescription(),
					currentLocation.getStatusCode(),
					currentLocation.getShelfId(),
					currentLocation.getRackId(),
					currentLocation.getLength(),
					currentLocation.getWidth(),
					currentLocation.getHeight()
					);
		}
	}
}
