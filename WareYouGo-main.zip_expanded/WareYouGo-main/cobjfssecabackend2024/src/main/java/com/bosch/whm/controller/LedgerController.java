package com.bosch.whm.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.Location;
import com.bosch.whm.service.LedgerBOService;

@RestController
@RequestMapping("/ledger")
@CrossOrigin(origins = "*")
public class LedgerController {
	
	@Autowired
	private LedgerBOService ledgerBOService;
	
	@GetMapping
	public List<Ledger> getAllLedgers(@RequestParam(required = false) Integer productId) {
		if (productId != null) {
			return ledgerBOService.getProductLedgers(productId);
		}
		return ledgerBOService.getAllLedgers();
		
	}
	
	@GetMapping("/{ledgerId}")
	public Ledger getLedgerById(@PathVariable int ledgerId) {
		Ledger ledger = ledgerBOService.getLedgerById(ledgerId);
		return new Ledger(ledger.getLedgerId(),
				ledger.getInOutTime(),
				ledger.getLedgerMode(),
				ledger.getUser(),
				ledger.getProduct(),
				ledger.getLocation(),
				ledger.getSupplier(),
				ledger.getQuantity());
	}
	
	@PostMapping
	public Ledger createLedger(@RequestBody Ledger ledger) {
		
		return ledgerBOService.createLedger(ledger);
	}
	
	@PutMapping("/{id}")
	public Ledger updateLedger(@PathVariable Integer id,@RequestBody Ledger ledger) {
		Ledger updatedLedger = ledgerBOService.updateLedger(id,ledger);
		return updatedLedger;
	}
	
	@GetMapping("/location/{locationId}")
    public boolean isLocationPresentInLedger(@PathVariable Integer locationId) {
        return ledgerBOService.isLocationPresentInLedger(locationId);
    }
	@GetMapping("/product/{productId}")
    public boolean isProductPresentInLedger(@PathVariable Integer productId) {
        return ledgerBOService.isProductPresentInLedger(productId);
    }
}
