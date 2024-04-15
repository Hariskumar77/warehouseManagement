package com.bosch.whm.dto;
 
import java.util.List;
 
 
import com.bosch.whm.model.Ledger;
 
public class SalesDTO {
	private Integer productId;
	private String productName;
	private Double stock;
	private Double cost;
	private Double damagedStock;
    private List<Ledger> inbound;
    private List<Ledger> outbound;
    private List<Ledger> damaged;
    private List<Ledger> relocated;
	public SalesDTO(Integer productId, String productName, List<Ledger> inbound, List<Ledger> outbound, List<Ledger> damaged,
			 List<Ledger> relocated, Double stock, Double cost, Double damagedStock) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.inbound = inbound;
		this.outbound = outbound;
		this.damaged = damaged;
		this.relocated = relocated;
		this.cost = cost;
		this.damagedStock = damagedStock;
		this.stock = stock;
	}
	public Integer getProductId() {
		return productId;
	}
 
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
 
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public List<Ledger> getInbound() {
		return inbound;
	}
	public void setInbound(List<Ledger> inbound) {
		this.inbound = inbound;
	}
	public List<Ledger> getOutbound() {
		return outbound;
	}
	public void setOutbound(List<Ledger> outbound) {
		this.outbound = outbound;
	}
	public List<Ledger> getDamaged() {
		return damaged;
	}
	public void setDamaged(List<Ledger> damaged) {
		this.damaged = damaged;
	}
	public List<Ledger> getRelocated() {
		return relocated;
	}
	public void setRelocated(List<Ledger> relocated) {
		this.relocated = relocated;
	}
 
	public Double getStock() {
		return stock;
	}
 
	public void setStock(Double stock) {
		this.stock = stock;
	}
 
	public Double getCost() {
		return cost;
	}
 
	public void setCost(Double cost) {
		this.cost = cost;
	}
 
	public Double getDamagedStock() {
		return damagedStock;
	}
 
	public void setDamagedStock(Double damagedStock) {
		this.damagedStock = damagedStock;
	}

}