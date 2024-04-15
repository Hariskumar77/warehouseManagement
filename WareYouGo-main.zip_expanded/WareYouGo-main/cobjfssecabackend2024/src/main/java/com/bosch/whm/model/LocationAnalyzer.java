package com.bosch.whm.model;


public class LocationAnalyzer {

	private Location location;
	private int quantityBasedOnProduct;

	public LocationAnalyzer(Location location) {
		super();
		this.location = location;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	
	public int getQuantityBasedOnProduct() {
		return quantityBasedOnProduct;
	}
	//Returns the remaining quantity after filling one location
	public void setQuantityBasedOnProduct(Product product) {
		// this.quantityBasedOnProduct = quantityBasedOnProduct;
		double productVolume = product.getLength()*product.getWidth()*product.getHeight();
		double locationVolume = this.location.getLength()*this.location.getWidth()*this.location.getHeight();
		
		this.quantityBasedOnProduct=(int) (locationVolume/productVolume);
		//return incomingQuantity-getQuantityBasedOnProduct();
	}

}
