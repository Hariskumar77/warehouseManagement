package com.bosch.whm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.Location;
import com.bosch.whm.model.Product;
import com.bosch.whm.model.StatusCode;
import com.bosch.whm.service.LedgerBOService;
import com.bosch.whm.service.LocationService;
import com.bosch.whm.service.ProductInBoundBOService;

@RestController
@RequestMapping("/relocation")
@CrossOrigin(origins = "*")
public class ProductRelocationController {
	@Autowired
	private LedgerBOService ledgerBOService;
	
	@Autowired
	private LocationService locationService;


	@GetMapping("/product/{productId}")
	public List<Location> getLocationsByProductId(@PathVariable int productId) {
		List<Location> locations = ledgerBOService.getLocationsByProductId(productId);
		return locations;
	}
	
	@GetMapping("/productDetails/{productId}/location/{locationId}")
	public Ledger getProduct(@PathVariable int productId,@PathVariable int locationId) {		
		List<Ledger> ledgers = ledgerBOService.getLedgerDetailsByProductId(productId);
		Ledger led = null;
		for(Ledger ledger : ledgers) {
			if(ledger.getLocation().getLocationId()==locationId) {
				led = ledger;
			}
		}
		return led;
	}
	
	
	@PutMapping("/location/{id}/status/{newStatusCode}")
	public Location updateLocationStatusCode(@PathVariable("id") Integer id, @PathVariable("newStatusCode") StatusCode newStatusCode) {
	    return locationService.updateLocationStatusCode(id, newStatusCode);
	}


}
