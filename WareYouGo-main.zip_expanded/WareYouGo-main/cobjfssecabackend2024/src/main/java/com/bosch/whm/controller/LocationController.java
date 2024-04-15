package com.bosch.whm.controller;

import java.util.List;
import java.util.Optional;

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

import com.bosch.whm.model.Location;
import com.bosch.whm.model.StatusCode;
import com.bosch.whm.service.LocationService;

@RestController
@RequestMapping("/location")
@CrossOrigin(originPatterns = "*")
public class LocationController {

	@Autowired
	private LocationService locationService;

	@GetMapping
	public List<Location> getAllLocations() {
		return locationService.getAllLocations();
	}

	@GetMapping("/{id}")
	public Location getLocation(@PathVariable int id) {
		Location location = locationService.getLocation(id);
		return new Location(location.getLocationId(), location.getDescription(), location.getStatusCode(),
				location.getShelfId(), location.getRackId(), location.getLength(), location.getWidth(),
				location.getHeight());
	}

	@PostMapping
	public Location addLocation(@RequestBody Location location) {
		Location savedLocation = locationService.addLocation(location);
		savedLocation.generateIds();  // generate shelf and rack id
		savedLocation = locationService.addLocation(location);
		return new Location(
				savedLocation.getLocationId(), 
				savedLocation.getDescription(), 
				savedLocation.getStatusCode(), 
				savedLocation.getShelfId(), 
				savedLocation.getRackId(),
				savedLocation.getLength(), 
				savedLocation.getWidth(), 
				savedLocation.getHeight()
		);
	}

	@PutMapping("/{id}")
	public Location updateLocation(@PathVariable int id, @RequestBody Location locationDetails) {
		Location location = locationService.getLocation(id);
		if (location == null) {
			// Handle the case where the location with the given ID is not found
			throw new RuntimeException("Location not found with id: " + id);
		}

		// Update the location details
		location.setDescription(locationDetails.getDescription());
		location.setStatusCode(locationDetails.getStatusCode());
		location.setShelfId(locationDetails.getShelfId());
		location.setRackId(locationDetails.getRackId());
		location.setLength(locationDetails.getLength());
		location.setWidth(locationDetails.getWidth());
		location.setHeight(locationDetails.getHeight());

		// Save the updated location
		Location updatedLocation = locationService.updateLocation(location);
		return updatedLocation;
	}

	@DeleteMapping("/{id}")
	public void deleteLocation(@PathVariable int id) {
		

		locationService.deleteLocation(id);
		
	}

}
