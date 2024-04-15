package com.bosch.whm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PostLoad;
import javax.persistence.Table;


@Entity
@Table(name="location")
public class Location {
	
	@Id
	@Column(name="location_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer locationId;
	@Column(name = "description")
	private String description;
	@Column(name = "status_code")
	private StatusCode statusCode = StatusCode.DEFAULT;
	@Column(name = "shelf_id")
	private int shelfId;
	@Column(name = "rack_id")
	private int rackId;
	@Column(name = "length")
    private double length;
	@Column(name = "width")
    private double width;
	@Column(name = "height")
    private double height;
	
	private static int SHELF_RACKS = 5;
		
	public Location() {}

	public Location(Integer locationId, String description, StatusCode statusCode, int shelfId, int rackId,
			double length, double width, double height) {
		super();
		this.locationId = locationId;
		this.description = description;
		this.statusCode = statusCode;
		this.shelfId = shelfId;
		this.rackId = rackId;
		this.length = length;
		this.width = width;
		this.height = height;
	}
	
	@PostLoad
	public void generateIds() {
		this.shelfId = generateShelfId(locationId);
		this.rackId = generateRackId(locationId);
	}
	
	private int generateShelfId(Integer locationId) {
		Integer temp = (locationId % SHELF_RACKS) + 1;
		if (temp == 0) {
			return SHELF_RACKS;
		}
		return temp;
	}

	private int generateRackId(Integer locationId) {
		return (locationId / SHELF_RACKS) + 1;
	}

	public Integer getLocationId() {
		return locationId;
	}


	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public StatusCode getStatusCode() {
		return statusCode;
	}


	public void setStatusCode(StatusCode statusCode) {
		this.statusCode = statusCode;
	}


	public int getShelfId() {
		return shelfId;
	}


	public void setShelfId(int shelfId) {
		this.shelfId = shelfId;
	}


	public int getRackId() {
		return rackId;
	}


	public void setRackId(int rackId) {
		this.rackId = rackId;
	}


	public double getLength() {
		return length;
	}


	public void setLength(double length) {
		this.length = length;
	}


	public double getWidth() {
		return width;
	}


	public void setWidth(double width) {
		this.width = width;
	}


	public double getHeight() {
		return height;
	}


	public void setHeight(double height) {
		this.height = height;
	}
	
	

}

