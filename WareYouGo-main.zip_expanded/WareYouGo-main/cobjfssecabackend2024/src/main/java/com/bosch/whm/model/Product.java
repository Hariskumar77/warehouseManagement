package com.bosch.whm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer productId;
    @Column(name="name")
	private String name;
    @Column(name="unit_of_measurement")
    private String UOM;
    @Column(name="unit_cost")
    private double unitCost;
    @Column(name="current_stock")
    private double currentStock = 0.0;
    @Column(name = "damaged_stock")
    private double damagedStock = 0.0;
    @Column(name="length")
    private double length;
    @Column(name="width")
    private double width;
    @Column(name="height")
    private double height;
    @Column(name="weight")
    private double weight;
    @Column(name = "threshold")
    private int threshold = 1000;
    
    public Product() {}

	public Product(Integer productId, String name, String uOM, double unitCost, double currentStock,
			double damagedStock, double length, double width, double height, double weight, int threshold) {

		this.productId = productId;
		this.name = name;
		UOM = uOM;
		this.unitCost = unitCost;
		this.currentStock = currentStock;
		this.damagedStock = damagedStock;
		this.length = length;
		this.width = width;
		this.height = height;
		this.weight = weight;
		this.threshold = threshold;
	}

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

	public String getUOM() {
		return UOM;
	}

	public void setUOM(String uOM) {
		UOM = uOM;
	}

	public double getUnitCost() {
		return unitCost;
	}

	public void setUnitCost(double unitCost) {
		this.unitCost = unitCost;
	}

	public double getCurrentStock() {
		return currentStock;
	}

	public void setCurrentStock(double currentStock) {
		this.currentStock = currentStock;
	}

	public double getDamagedStock() {
		return damagedStock;
	}

	public void setDamagedStock(double damagedStock) {
		this.damagedStock = damagedStock;
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

	public Double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public int getThreshold() {
		return threshold;
	}

	public void setThreshold(int threshold) {
		this.threshold = threshold;
	}
}
