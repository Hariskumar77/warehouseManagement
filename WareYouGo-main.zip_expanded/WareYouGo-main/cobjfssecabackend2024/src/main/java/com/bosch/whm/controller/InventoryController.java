package com.bosch.whm.controller;
 
import java.util.List;
 
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import com.bosch.whm.service.InventoryService;
import com.bosch.whm.dto.InventoryDTO;
import com.bosch.whm.dto.LocationDTO;
 
@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "*")
public class InventoryController {
	@Autowired
	private InventoryService inventoryService;
	@GetMapping
	public InventoryDTO getInventory() {
		return inventoryService.getInventoryDetails();
	} 
	@GetMapping("/locations")
	public List<LocationDTO> getLocationDTOs() {
		return inventoryService.getLocationDTOs();
	}
}