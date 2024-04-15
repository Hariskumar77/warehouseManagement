package com.bosch.whm.model;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="ledger")
public class Ledger {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer ledgerId;
 
	@Column(name = "in_out_time")
	private Timestamp inOutTime;
 
	@Column(name = "ledger_mode")
	private LedgerMode ledgerMode = LedgerMode.DEFAULT;
 
	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private Users user;
	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "product_id")
	private Product product;
	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "location_id")
	private Location location;
	@Column(name = "supplier")
	private String supplier;
	@Column(name = "quantity")
	private int quantity;
	
	public Ledger() {}
	
	public Ledger(Integer ledgerId, Timestamp inOutTime, LedgerMode ledgerMode, Users user, Product product,
			Location location, String supplier, int quantity) {
		super();
		this.ledgerId = ledgerId;
		this.inOutTime = inOutTime;
		this.ledgerMode = ledgerMode;
		this.user = user;
		this.product = product;
		this.location = location;
		this.supplier = supplier;
		this.quantity = quantity;
	}

	public Integer getLedgerId() {
		return ledgerId;
	}

	public Timestamp getInOutTime() {
		return inOutTime;
	}

	public LedgerMode getLedgerMode() {
		return ledgerMode;
	}

	public Users getUser() {
		return user;
	}

	public Product getProduct() {
		return product;
	}

	public Location getLocation() {
		return location;
	}

	public String getSupplier() {
		return supplier;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setLedgerId(Integer ledgerId) {
		this.ledgerId = ledgerId;
	}

	public void setInOutTime(Timestamp inOutTime) {
		this.inOutTime = inOutTime;
	}

	public void setLedgerMode(LedgerMode ledgerMode) {
		this.ledgerMode = ledgerMode;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}	
}
