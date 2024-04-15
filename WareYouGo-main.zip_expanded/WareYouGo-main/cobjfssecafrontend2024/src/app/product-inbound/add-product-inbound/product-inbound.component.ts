import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductInbound } from '../product-inbound.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { ProductInboundService } from '../product-inbound.service';

@Component({
  selector: 'app-product-inbound',
  templateUrl: './product-inbound.component.html',
  styleUrls: ['./product-inbound.component.css'],
  providers: [ProductService, ProductInboundService]
})
export class ProductInboundComponent implements OnInit {

  productInbound: ProductInbound
  product: Product
  productId: number

  submittedProduct: any;
  submittedProductInbound: any;

  @Output() formSubmitted = new EventEmitter<{ product: any, productInbound: any }>();

  constructor(private router: Router, private productService: ProductService, private productInboundService: ProductInboundService) { }

  ngOnInit() {
    this.productInbound = new ProductInbound();
  }

  fetchProductDetails() {
    var product: Product

    this.productService.getProduct(this.productId).subscribe(
      (value) => {
        product = value
        this.productInbound.productName = product.name;
        this.productInbound.length = product.length;
        this.productInbound.width = product.width;
        this.productInbound.height = product.height;
        this.productInbound.productWeight = product.weight;
        this.product = product;
        console.log(product)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("prodInb", this.productInbound);

      this.formSubmitted.emit({ product: Product, productInbound: ProductInbound });

      //Move to locationAnalyser page
      this.router.navigate(['/display-locations'], {state: {product: this.product, productInbound: this.productInbound}});
    }
  }
}
