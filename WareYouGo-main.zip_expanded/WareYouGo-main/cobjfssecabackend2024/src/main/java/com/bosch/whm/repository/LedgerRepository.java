package com.bosch.whm.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.Location;
import com.bosch.whm.model.LedgerMode;

@Repository
public interface LedgerRepository extends JpaRepository<Ledger, Integer> {
	List<Ledger> findByProductProductId(Integer productId);
	
	List<Ledger> findByLocationLocationId(Integer locationId);
	
	
	List<Ledger> findByProductProductIdAndLedgerMode(Integer productId,
			LedgerMode ledgerMode);
	
	List<Ledger> findByLedgerModeAndLocationLocationId(
			LedgerMode ledgerMode,
			Integer locationId);
}
