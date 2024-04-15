package com.bosch.whm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.whm.model.Product;
import com.bosch.whm.service.ProductInBoundBOService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class ProductController {
	
	@Autowired
	private ProductInBoundBOService productInboundService;
	
	@GetMapping
	public List<Product> getAllProducts() {
		return productInboundService.getAllProducts();
	}
	
	@GetMapping("/{id}")
	public Product getProduct(@PathVariable int id) {
		Product product =  productInboundService.getProduct(id);
		
		Product returnProduct = new Product(
			    product.getProductId(),
			    product.getName(),
			    product.getUOM(),
			    product.getUnitCost(),
			    product.getCurrentStock(),
			    product.getDamagedStock(),
			    product.getLength(),
			    product.getWidth(),
			    product.getHeight(),
			    product.getWeight(),
			    product.getThreshold()
			);

		
		return returnProduct;
		
	}
	
	@PostMapping
	public Product addOrUpdateProduct(@RequestBody Product product) {
		Product savedProduct = productInboundService.addOrUpdateProduct(product);
		Product returnProduct = new Product(
				savedProduct.getProductId(),
				savedProduct.getName(),
				savedProduct.getUOM(),
				savedProduct.getUnitCost(),
				savedProduct.getCurrentStock(),
			    savedProduct.getDamagedStock(),
			    savedProduct.getLength(),
			    savedProduct.getWidth(),
			    savedProduct.getHeight(),
			    savedProduct.getWeight(),
			    savedProduct.getThreshold()
			);
		return returnProduct;
	}
	
	@PostMapping("/{id}/addcurrentstock")
	public Product addStock(@PathVariable int id, @RequestBody Map<String, Double> stockRequest) {
	 double stock = stockRequest.get("stock");
	 Product product = getProduct(id);
	 product.setCurrentStock(product.getCurrentStock() + stock);
	 productInboundService.addOrUpdateProduct(product);
	 return product;
	}
	
	@PostMapping("/{id}/adddamagedstock")
	public Product addDamagedStock(@PathVariable int id, @RequestBody Map<String, Double> stockRequest) {
		double stock = stockRequest.get("stock");
		Product product = getProduct(id);
		product.setDamagedStock(product.getDamagedStock() + stock);
		productInboundService.addOrUpdateProduct(product);
		return product;
	}

	@PostMapping("/{id}/threshold")
	public Product setThreshold(@PathVariable int id, @RequestBody Map<String, Integer> thresholdRequest) {
		int threshold = thresholdRequest.get("threshold");
		Product product = getProduct(id);
		product.setThreshold(threshold);
		productInboundService.addOrUpdateProduct(product);
		return product;
		
	}
	@PutMapping("/{id}")
	public Product updateProduct(@PathVariable Integer id ,@RequestBody Product product)
	{
		return productInboundService.updateProduct(id , product);
	}
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable Integer id )
	{
		productInboundService.deleteProduct(id);
	}
}
