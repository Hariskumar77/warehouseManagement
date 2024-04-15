package com.bosch.whm.model;

import javax.persistence.*;

@Entity
public class InBoundRequesitionForm {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer productInboundId;
	@ManyToOne
	@JoinColumn(name="productId")
    private Product product;
	@Column(name="productQty")
    private int ProductQty; 
	@Column(name="dateOfPOIssuance")
    private String dateOfPOIssuance;
	@Column(name="purchaseOrderNo")
    private int purchaseOrderNo;
	@Column(name="dateOfDelivery")
    private String dateOfDelivery;
    
	public InBoundRequesitionForm(Integer productInboundId, Product product, int productQty,
			String dateOfPOIssuance, int purchaseOrderNo, String dateOfDelivery) {
		super();
		this.productInboundId = productInboundId;
		this.product = product;
		ProductQty = productQty;
		this.dateOfPOIssuance = dateOfPOIssuance;
		this.purchaseOrderNo = purchaseOrderNo;
		this.dateOfDelivery = dateOfDelivery;
	}

	public Integer getProductInboundId() {
		return productInboundId;
	}

	public Product getProduct() {
		return product;
	}

//	public Supplier getSupplier() {
//		return supplier;
//	}

	public int getProductQty() {
		return ProductQty;
	}

	public String getDateOfPOIssuance() {
		return dateOfPOIssuance;
	}

	public int getPurchaseOrderNo() {
		return purchaseOrderNo;
	}

	public String getDateOfDelivery() {
		return dateOfDelivery;
	}

	public void setProductInboundId(Integer productInboundId) {
		this.productInboundId = productInboundId;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

//	public void setSupplier(Supplier supplier) {
//		this.supplier = supplier;
//	}

	public void setProductQty(int productQty) {
		ProductQty = productQty;
	}

	public void setDateOfPOIssuance(String dateOfPOIssuance) {
		this.dateOfPOIssuance = dateOfPOIssuance;
	}

	public void setPurchaseOrderNo(int purchaseOrderNo) {
		this.purchaseOrderNo = purchaseOrderNo;
	}

	public void setDateOfDelivery(String dateOfDelivery) {
		this.dateOfDelivery = dateOfDelivery;
	} 
}
