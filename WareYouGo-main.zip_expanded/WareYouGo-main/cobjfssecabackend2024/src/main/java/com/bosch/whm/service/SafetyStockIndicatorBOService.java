package com.bosch.whm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.Product;
import com.bosch.whm.model.SafetyStockIndicator;
import com.bosch.whm.repository.LedgerRepository;
import com.bosch.whm.repository.ProductRepository;

@Service
public class SafetyStockIndicatorBOService {

	
	

	@Autowired
	private LedgerRepository ledgerRepository;
	
	public List<SafetyStockIndicator> getAllStockSafetyItems(){
		
		List<SafetyStockIndicator> stockSafetyItemsList = new ArrayList<>();
		
		
		List<Ledger> ledgers = ledgerRepository.findAll();
		
		
		for(Ledger ledger : ledgers)
		{
			if(ledger.getProduct().getCurrentStock() <= ledger.getProduct().getThreshold())
			{
				SafetyStockIndicator sIndicator = new SafetyStockIndicator();
				
				sIndicator.setProductId(ledger.getProduct().getProductId());
				sIndicator.setName(ledger.getProduct().getName());
				sIndicator.setCurrentStock(ledger.getProduct().getCurrentStock());
				sIndicator.setThreshold(ledger.getProduct().getThreshold());
				sIndicator.setSupplier(ledger.getSupplier());
				
				stockSafetyItemsList.add(sIndicator);
			}
		}
	
		return stockSafetyItemsList;
		
	}
}
