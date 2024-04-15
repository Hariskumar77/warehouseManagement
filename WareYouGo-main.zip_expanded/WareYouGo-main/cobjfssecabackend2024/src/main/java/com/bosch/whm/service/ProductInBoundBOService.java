package com.bosch.whm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.whm.model.Product;
import com.bosch.whm.repository.ProductRepository;

import java.util.List;

import javax.transaction.Transactional;

@Service
public class ProductInBoundBOService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
	@Transactional
	public Product addOrUpdateProduct(Product product) {
		return productRepository.save(product);
	}
	
	public Product getProduct(int id) {
		return productRepository.getById(id);
	}
	
	public Product updateProduct(Integer id , Product product)
	{
		if(productRepository.existsById(id))
		{
			product.setProductId(id);
			return productRepository.save(product);
		}
		return null;
	}
	public void deleteProduct(Integer id)
	{
		productRepository.deleteById(id);
	}
}
