package com.bosch.whm.service;
 
import java.util.List;
 
 
import java.util.stream.Collectors;
 
import org.springframework.stereotype.Service;
 
import com.bosch.whm.repository.LedgerRepository;
import com.bosch.whm.repository.ProductRepository;
import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.Product;
import com.bosch.whm.dto.SalesDTO;
 
@Service
public class SalesService {
 
	private ProductRepository productRepository;
	private LedgerRepository ledgerRepository;
	public SalesService(ProductRepository productRepository, LedgerRepository ledgerRepository) {
		super();
		this.productRepository = productRepository;
		this.ledgerRepository = ledgerRepository;
	}
	public List<SalesDTO> getProductSales() {
		List<Product> products = productRepository.findAll();
		return products.stream().map(this::createProductSales)
				.collect(Collectors.toList());
	}
	private SalesDTO createProductSales(Product product) {
		List<Ledger> ledgers = ledgerRepository.findByProductProductId(product.getProductId());
		List<Ledger> inbound = ledgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("INBOUND"))
                .collect(Collectors.toList());
		List<Ledger> outbound = ledgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("OUTBOUND"))
                .collect(Collectors.toList());
 
        List<Ledger> damaged = ledgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("DAMAGED"))
                .collect(Collectors.toList());
 
        List<Ledger> relocated = ledgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("RELOCATE"))
                .collect(Collectors.toList());
        return new SalesDTO(product.getProductId(), product.getName(), inbound, outbound, damaged, relocated, 
        		product.getCurrentStock(), product.getUnitCost(), product.getDamagedStock());
	}
	public SalesDTO getProductSales(Integer productId) {
		Product product = productRepository.findById(productId).orElse(null);
        if (product == null) {
            return null; // Product not found
        }
		List<Ledger> ledgers = ledgerRepository.findByProductProductId(productId);
        List<Ledger> productLedgers = ledgers.stream()
                .filter(ledger -> ledger.getProduct().getProductId().equals(productId))
                .collect(Collectors.toList());
        List<Ledger> inbound = productLedgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("INBOUND"))
                .collect(Collectors.toList());
        List<Ledger> outbound = productLedgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("OUTBOUND"))
                .collect(Collectors.toList());
 
        List<Ledger> damaged = productLedgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("DAMAGED"))
                .collect(Collectors.toList());
 
        List<Ledger> relocated = productLedgers.stream()
                .filter(ledger -> ledger.getLedgerMode().name().equals("RELOCATE"))
                .collect(Collectors.toList());
        return new SalesDTO(product.getProductId(), product.getName(), inbound, outbound, damaged, relocated, 
        		product.getCurrentStock(), product.getUnitCost(), product.getDamagedStock());
	}
}