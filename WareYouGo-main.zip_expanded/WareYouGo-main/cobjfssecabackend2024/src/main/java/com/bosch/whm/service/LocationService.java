package com.bosch.whm.service;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.whm.model.Location;
import com.bosch.whm.model.StatusCode;
import com.bosch.whm.repository.LocationRepository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
public class LocationService {
	
	@Autowired
	private LocationRepository locationRepository;
	
	@Transactional
	public Location addLocation(Location location) {
		return locationRepository.save(location);
	}
	
	public Location getLocation(int id) {
		return locationRepository.getById(id);
	}
	
	public List<Location> getAllLocations() {
		return locationRepository.findAll();
	}
	
	@Transactional
    public Location updateLocationStatusCode(Integer id, StatusCode newStatusCode) {
        Location location = locationRepository.getById(id);
        if (location != null) {
            location.setStatusCode(newStatusCode);
            return locationRepository.save(location);
        } else {
            throw new RuntimeException("Location not found with id: " + id);
        }
    }
	
	public Location updateLocation(Location location) {
        return locationRepository.save(location);
    }
 
    
    public void deleteLocation(int id) {
        locationRepository.deleteById(id);
    }
}
