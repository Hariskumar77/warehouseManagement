package com.bosch.whm.service;
 
import java.util.ArrayList;
 
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
 
import javax.transaction.Transactional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.bosch.whm.repository.LedgerRepository;
import com.bosch.whm.repository.ProductRepository;
import com.bosch.whm.repository.LocationRepository;
import com.bosch.whm.model.StatusCode;
import com.bosch.whm.model.Product;
import com.bosch.whm.model.Location;
import com.bosch.whm.model.Ledger;
import com.bosch.whm.model.LedgerMode;
import com.bosch.whm.dto.SalesDTO;
import com.bosch.whm.dto.ProductInventoryDTO;
import com.bosch.whm.dto.LocationDTO;
import com.bosch.whm.dto.InventoryDTO;
 
@Service
public class InventoryService {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private LedgerRepository ledgerRepository;
	@Autowired
	private SalesService salesService;
	@Autowired
	private LocationRepository locationRepository;
	@Transactional
	public void updateInventory(Ledger ledger) {
		// Getting all the ledger details
		Integer productId = ledger.getProduct().getProductId();
		Integer quantity = ledger.getQuantity();
		LedgerMode ledgerMode = ledger.getLedgerMode();
		Product product = productRepository.findById(productId).orElse(null);
		if (product == null) {
			return;
		}
		double currentStock = product.getCurrentStock();
		double damagedStock = product.getDamagedStock();
		switch (ledgerMode.name()) {
			case "INBOUND":
				currentStock += quantity;
				product.setCurrentStock(currentStock);
				break;
			case "OUTBOUND":
				// Validate if there are enough products for outbound
				if ((quantity - currentStock) > 0) {
					return;
				}
				currentStock -= quantity;
				product.setCurrentStock(currentStock);
				break;
			case "DAMAGED":
				// Validate if the damaged stock is always less than
				// or equal to current stock
				if (quantity > currentStock) {
					return;
				}
				damagedStock += quantity;
				product.setDamagedStock(damagedStock);
				break;
			default:
				break;
		}
		productRepository.save(product);
	}
 
	public InventoryDTO getInventoryDetails() {
		List<Product> products = productRepository.findAll();
        InventoryDTO inventoryDTO = new InventoryDTO();
        inventoryDTO.setProductInventoryDTOs(new ArrayList<ProductInventoryDTO>());
        // Initialize cumulative values
        int totalStock = 0;
        int totalInboundLedgers = 0;
        int totalOutboundLedgers = 0;
        double inventoryValue = 0.0;
        double salesValue = 0.0;
        double totalDamagedStock = 0.0;
        for (Product product : products) {
            ProductInventoryDTO productInventoryDTO = new ProductInventoryDTO();
            productInventoryDTO.setProduct(product);
            productInventoryDTO.setProductStock((int) product.getCurrentStock());
            productInventoryDTO.setProductInventoryValue(product.getCurrentStock() * product.getUnitCost());
            productInventoryDTO.setProductSalesValue(getProductSalesValue(product.getProductId()));
            productInventoryDTO.setProductDamagedStock(product.getDamagedStock());
 
            // Fetch inbound ledgers for the current product
            List<Ledger> inboundLedgers = ledgerRepository.findByProductProductIdAndLedgerMode(product.getProductId(), LedgerMode.INBOUND);
            productInventoryDTO.setProductInboundLedgers(inboundLedgers.size());
 
            // Fetch outbound ledgers for the current product
            List<Ledger> outboundLedgers = ledgerRepository.findByProductProductIdAndLedgerMode(product.getProductId(), LedgerMode.OUTBOUND);
            productInventoryDTO.setProductOutboundLedgers(outboundLedgers.size());
 
            // Accumulate cumulative values
            totalStock += product.getCurrentStock();
            totalInboundLedgers += inboundLedgers.size();
            totalOutboundLedgers += outboundLedgers.size();
            inventoryValue += productInventoryDTO.getProductInventoryValue();
            salesValue += productInventoryDTO.getProductSalesValue();
            totalDamagedStock += productInventoryDTO.getProductDamagedStock();
 
            inventoryDTO.getProductInventoryDTOs().add(productInventoryDTO);
        }
 
        // Set cumulative values to the InventoryDTO object
        inventoryDTO.setTotalStock(totalStock);
        inventoryDTO.setTotalInboundLedgers(totalInboundLedgers);
        inventoryDTO.setTotalOutboundLedgers(totalOutboundLedgers);
        inventoryDTO.setInventoryValue(inventoryValue);
        inventoryDTO.setSalesValue(salesValue);
        inventoryDTO.setTotalDamagedStock(totalDamagedStock);
 
        return inventoryDTO;
	}
	private Double getProductSalesValue(Integer productId) {
		SalesDTO productSalesDTO = salesService.getProductSales(productId);
		Double sum = 0.0;
		for (Ledger outboundLedger : productSalesDTO.getOutbound()) {
			sum += outboundLedger.getQuantity();
		}
		return sum;
	}
 
	
	public List<LocationDTO> getLocationDTOs() {
	    List<Location> locations = locationRepository.findAll();
	    List<LocationDTO> locationDTOs = new ArrayList<>();
 
	    for (Location location : locations) {
	        Map<String, Double> shelfRackQuantityMap = new HashMap<>();
 
	        // Retrieve all ledgers for the current location
	        List<Ledger> inboundLedgers = ledgerRepository.findByLedgerModeAndLocationLocationId(
	        		LedgerMode.INBOUND, location.getLocationId());
	        List<Ledger> outboundLedgers = ledgerRepository.findByLedgerModeAndLocationLocationId(
	        		LedgerMode.OUTBOUND, location.getLocationId());
 
	        // Calculate quantity for inbound ledgers
	        calculateQuantity(inboundLedgers, shelfRackQuantityMap);
 
	        // Subtract quantity for outbound ledgers
	        calculateQuantity(outboundLedgers, shelfRackQuantityMap);
 
	        // Create LocationDTO objects
	        for (Map.Entry<String, Double> entry : shelfRackQuantityMap.entrySet()) {
	            LocationDTO locationDTO = new LocationDTO();
	            String[] parts = entry.getKey().split("_");
	            locationDTO.setRackId(Integer.parseInt(parts[0]));
	            locationDTO.setShelfId(Integer.parseInt(parts[1]));
	            locationDTO.setQuantity(entry.getValue().intValue());
	            locationDTOs.add(locationDTO);
	        }
	    }
 
	    return locationDTOs;
	}
	private void calculateQuantity(List<Ledger> ledgers, Map<String, Double> shelfRackQuantityMap) {
	    for (Ledger ledger : ledgers) {
	        String key = getShelfRackKey(ledger);
	        Double quantity = shelfRackQuantityMap.getOrDefault(key, 0.0);
	        quantity += ledger.getQuantity();
	        shelfRackQuantityMap.put(key, quantity);
	    }
	}
 
	private String getShelfRackKey(Ledger ledger) {
	    return ledger.getLocation().getShelfId() + "_" + ledger.getLocation().getRackId();
	}

}