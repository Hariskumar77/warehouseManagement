package com.bosch.whm.model;

import java.io.*;
import java.util.Date;

public class ProductRelocation  
{

	private String RelocationReason;
	private String ProductName;
	private int ProductCode;
    private int length;
    private int width;
    private int height;
	private Double productWeight;
	private int purchaseOrderNo;
	private Date dateOfDelivery;
	private String comments;
	
	public ProductRelocation() {
		
	}

	public ProductRelocation(String relocationReason, String productName, int productCode, int length, int width,
			int height, Double productWeight, int purchaseOrderNo, Date dateOfDelivery, String comments) {
		super();
		RelocationReason = relocationReason;
		ProductName = productName;
		ProductCode = productCode;
		this.length = length;
		this.width = width;
		this.height = height;
		this.productWeight = productWeight;
		this.purchaseOrderNo = purchaseOrderNo;
		this.dateOfDelivery = dateOfDelivery;
		this.comments = comments;
	}

	public String getRelocationReason() {
		return RelocationReason;
	}

	public void setRelocationReason(String relocationReason) {
		RelocationReason = relocationReason;
	}

	public String getProductName() {
		return ProductName;
	}

	public void setProductName(String productName) {
		ProductName = productName;
	}

	public int getProductCode() {
		return ProductCode;
	}

	public void setProductCode(int productCode) {
		ProductCode = productCode;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public Double getProductWeight() {
		return productWeight;
	}

	public void setProductWeight(Double productWeight) {
		this.productWeight = productWeight;
	}

	public int getPurchaseOrderNo() {
		return purchaseOrderNo;
	}

	public void setPurchaseOrderNo(int purchaseOrderNo) {
		this.purchaseOrderNo = purchaseOrderNo;
	}

	public Date getDateOfDelivery() {
		return dateOfDelivery;
	}

	public void setDateOfDelivery(Date dateOfDelivery) {
		this.dateOfDelivery = dateOfDelivery;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}	
   
//include getters and setters     
// create required constructors


      }
