package com.bosch.whm.dto;
 
 
public class LocationDTO {
	private Integer shelfId;
	private Integer rackId;
	private Integer quantity;
	public LocationDTO(Integer shelfId, Integer rackId, Integer quantity) {
		super();
		this.shelfId = shelfId;
		this.rackId = rackId;
		this.quantity = quantity;
	}
	public LocationDTO() {
		super();
	}
	public Integer getShelfId() {
		return shelfId;
	}
	public void setShelfId(Integer shelfId) {
		this.shelfId = shelfId;
	}
	public Integer getRackId() {
		return rackId;
	}
	public void setRackId(Integer rackId) {
		this.rackId = rackId;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	
	
}