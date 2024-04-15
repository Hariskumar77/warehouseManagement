package com.bosch.whm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


public class Dimension {
	
	
	private Integer id;
    private double length, width, height;
    
    public Dimension() {}
    
    public Dimension(int id, double length, double width, double height) {
    	this.id = id;
		this.length = length;
		this.width = width;
		this.height = height;
	}
    
    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
