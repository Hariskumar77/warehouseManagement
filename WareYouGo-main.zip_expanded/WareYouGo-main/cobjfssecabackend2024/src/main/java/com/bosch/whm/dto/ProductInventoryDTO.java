package com.bosch.whm.dto;
 
import com.bosch.whm.model.Product;
 
public class ProductInventoryDTO {
	private Product product;
	private Integer productStock;
	private Integer productInboundLedgers;
	private Integer productOutboundLedgers;
	private Double productInventoryValue;
	private Double productSalesValue;
	private Double productDamagedStock;
	public ProductInventoryDTO(Product product, Integer productStock, Integer productInboundLedgers,
			Integer productOutboundLedgers, Double productInventoryValue, Double productSalesValue,
			Double productDamagedStock) {
		super();
		this.product = product;
		this.productStock = productStock;
		this.productInboundLedgers = productInboundLedgers;
		this.productOutboundLedgers = productOutboundLedgers;
		this.productInventoryValue = productInventoryValue;
		this.productSalesValue = productSalesValue;
		this.productDamagedStock = productDamagedStock;
	}
	
	public ProductInventoryDTO() {
		super();
	}
 
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Integer getProductStock() {
		return productStock;
	}
	public void setProductStock(Integer productStock) {
		this.productStock = productStock;
	}
	public Integer getProductInboundLedgers() {
		return productInboundLedgers;
	}
	public void setProductInboundLedgers(Integer productInboundLedgers) {
		this.productInboundLedgers = productInboundLedgers;
	}
	public Integer getProductOutboundLedgers() {
		return productOutboundLedgers;
	}
	public void setProductOutboundLedgers(Integer productOutboundLedgers) {
		this.productOutboundLedgers = productOutboundLedgers;
	}
	public Double getProductInventoryValue() {
		return productInventoryValue;
	}
	public void setProductInventoryValue(Double productInventoryValue) {
		this.productInventoryValue = productInventoryValue;
	}
	public Double getProductSalesValue() {
		return productSalesValue;
	}
	public void setProductSalesValue(Double productSalesValue) {
		this.productSalesValue = productSalesValue;
	}
	public Double getProductDamagedStock() {
		return productDamagedStock;
	}
	public void setProductDamagedStock(Double productDamagedStock) {
		this.productDamagedStock = productDamagedStock;
	}
	
}