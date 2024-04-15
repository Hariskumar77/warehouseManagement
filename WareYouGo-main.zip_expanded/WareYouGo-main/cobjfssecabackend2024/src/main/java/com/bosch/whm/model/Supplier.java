package com.bosch.whm.model;

import javax.persistence.*;

@Entity
@Table(name="Supplier")
public class Supplier {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int supplierId;
    private String supplierName;
    private String supplierLocation;
   
    public Supplier(){}

	public Supplier(int supplierId, String supplierName, String supplierLocation) {
		super();
		this.supplierId = supplierId;
		this.supplierName = supplierName;
		this.supplierLocation = supplierLocation;
	}

	public int getSupplierId() {
		return supplierId;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public String getSupplierLocation() {
		return supplierLocation;
	}

	public void setSupplierId(int supplierId) {
		this.supplierId = supplierId;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public void setSupplierLocation(String supplierLocation) {
		this.supplierLocation = supplierLocation;
	}
}
