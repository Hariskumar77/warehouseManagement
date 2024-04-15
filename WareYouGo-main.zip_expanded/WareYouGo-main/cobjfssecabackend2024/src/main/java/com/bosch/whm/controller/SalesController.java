package com.bosch.whm.controller;
 
import java.util.List;
 
 
import javax.websocket.server.PathParam;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
 
import com.bosch.whm.service.SalesService;
import com.bosch.whm.model.Ledger;
import com.bosch.whm.dto.SalesDTO;
 
@RestController
@RequestMapping("/sales")
@CrossOrigin(origins = "*")
public class SalesController {
	@Autowired
	private SalesService salesService;
	@GetMapping
	public List<SalesDTO> getAllSales(@RequestParam(required = false) Integer productId){
		return salesService.getProductSales();
	}
	@GetMapping("/{productId}")
	public SalesDTO getProductSales(@PathVariable Integer productId){
			return salesService.getProductSales(productId);
	}
}
