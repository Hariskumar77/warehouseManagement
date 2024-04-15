package com.bosch.whm.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.Location;
import com.bosch.whm.model.Product;
import com.bosch.whm.model.StatusCode;
import com.bosch.whm.repository.LedgerRepository;

@Service
public class LedgerBOService {
	
	@Autowired
	private LedgerRepository ledgerRepository;
	
	public List<Ledger> getAllLedgers() {
		return ledgerRepository.findAll();
	}
	
	public Ledger getLedgerById(int ledgerId) {	
		return ledgerRepository.getById(ledgerId);
	}
	
	@Transactional
	public Ledger createLedger(Ledger ledger) {
		return ledgerRepository.save(ledger);
	}
	
	public Ledger updateLedger(Integer id,Ledger ledger) {
		if(ledgerRepository.existsById(id)) {
			ledger.setLedgerId(id);
			return ledgerRepository.save(ledger);
		}
		return null;
	}
	
	public void deleteLedgerById(Integer id) {
		ledgerRepository.deleteById(id);
	}
	
	public List<Location> getLocationsByProductId(Integer productId) {
        List<Ledger> ledgers = ledgerRepository.findByProductProductId(productId);
        List<Location> locations = new ArrayList<>();
        for (Ledger ledger : ledgers) {
        	if(ledger.getLocation().getStatusCode()==StatusCode.PERMANENTLY_BLOCKED) {       		
        		locations.add(ledger.getLocation());
        	}
        }
        return locations;
    }
	
	public List<Ledger> getLedgerDetailsByProductId(Integer productId) {
		List<Ledger> ledgers = ledgerRepository.findByProductProductId(productId);
		return ledgers;
	}
	
	public boolean isProductPresentInLedger(Integer productId) {
        List<Ledger> ledgers = ledgerRepository.findByProductProductId(productId);
        return !ledgers.isEmpty();
    }
	public boolean isLocationPresentInLedger(Integer locationId) {
        List<Ledger> ledgers = ledgerRepository.findByLocationLocationId(locationId);
        return !ledgers.isEmpty();
    }
	
	public List<Ledger> getProductLedgers(Integer productId) {
		return ledgerRepository.findAll().stream()
                .filter(ledger -> ledger.getProduct().getProductId().equals(productId))
                .collect(Collectors.toList());
	}

}
