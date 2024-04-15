package com.bosch.whm.dto;
 
import java.util.List;
 
public class InventoryDTO {
	private Integer totalStock;
	private Integer totalInboundLedgers;
	private Integer totalOutboundLedgers;
	private Double inventoryValue;
	private Double salesValue;
	private Double totalDamagedStock;
	private List<ProductInventoryDTO> productInventoryDTOs;
	public InventoryDTO(Integer totalStock, Integer totalInboundLedgers, Integer totalOutboundLedgers,
			Double inventoryValue, Double salesValue, Double totalDamagedStock,
			List<ProductInventoryDTO> productInventoryDTOs) {
		super();
		this.totalStock = totalStock;
		this.totalInboundLedgers = totalInboundLedgers;
		this.totalOutboundLedgers = totalOutboundLedgers;
		this.inventoryValue = inventoryValue;
		this.salesValue = salesValue;
		this.totalDamagedStock = totalDamagedStock;
		this.productInventoryDTOs = productInventoryDTOs;
	}
	public InventoryDTO() {
		super();
	}
	public Integer getTotalStock() {
		return totalStock;
	}
	public void setTotalStock(Integer totalStock) {
		this.totalStock = totalStock;
	}
	public Integer getTotalInboundLedgers() {
		return totalInboundLedgers;
	}
	public void setTotalInboundLedgers(Integer totalInboundLedgers) {
		this.totalInboundLedgers = totalInboundLedgers;
	}
	public Integer getTotalOutboundLedgers() {
		return totalOutboundLedgers;
	}
	public void setTotalOutboundLedgers(Integer totalOutboundLedgers) {
		this.totalOutboundLedgers = totalOutboundLedgers;
	}
	public Double getInventoryValue() {
		return inventoryValue;
	}
	public void setInventoryValue(Double inventoryValue) {
		this.inventoryValue = inventoryValue;
	}
	public Double getSalesValue() {
		return salesValue;
	}
	public void setSalesValue(Double salesValue) {
		this.salesValue = salesValue;
	}
	public Double getTotalDamagedStock() {
		return totalDamagedStock;
	}
	public void setTotalDamagedStock(Double totalDamagedStock) {
		this.totalDamagedStock = totalDamagedStock;
	}
	public List<ProductInventoryDTO> getProductInventoryDTOs() {
		return productInventoryDTOs;
	}
	public void setProductInventoryDTOs(List<ProductInventoryDTO> productInventoryDTOs) {
		this.productInventoryDTOs = productInventoryDTOs;
	}
	
}
 