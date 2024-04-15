package com.bosch.whm.model;

import java.util.List;

//import product class
public class SafetyStockIndicator {



	 private Integer productId;
	 private String name;
	 private double currentStock = 0.0;
	 private int threshold = 1000;
	 private String supplier;
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getCurrentStock() {
		return currentStock;
	}
	public void setCurrentStock(double currentStock) {
		this.currentStock = currentStock;
	}
	public int getThreshold() {
		return threshold;
	}
	public void setThreshold(int threshold) {
		this.threshold = threshold;
	}
	public String getSupplier() {
		return supplier;
	}
	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	public SafetyStockIndicator(Integer productId, String name, double currentStock, int threshold, String supplier) {
		super();
		this.productId = productId;
		this.name = name;
		this.currentStock = currentStock;
		this.threshold = threshold;
		this.supplier = supplier;
	}
	public SafetyStockIndicator() {
		super();
	}


	


}