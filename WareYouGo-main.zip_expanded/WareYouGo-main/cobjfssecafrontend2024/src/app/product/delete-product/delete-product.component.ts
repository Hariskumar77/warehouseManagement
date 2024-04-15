import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import {ProductService} from "../product.service";
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  products:Product[]=[];
  product:Product;
  selectedProduct:Product=null;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.product=new Product();
    this.productService.getAllProduct()
        .subscribe(product => this.products = product);
  }
  getAllProducts(): void {
    this.productService.getAllProduct()
        .subscribe(product => this.products = product);
}
onDelete(id: number) {
  this.productService.getProduct(id).subscribe(
    (product) => {
      this.product = product;
      

      // Delete product properties
      this.productService.deleteProduct(this.product.productId).subscribe(() => {
      console.log("Product deleted")
      alert("Product deleted successfully\n\nThe deleted product ID : "+product.productId)
      window.location.replace("/product-inbound")
      });
    },
    (error) => {
      console.log("Product not found error",error)
      alert("Product id is not valid");
    }
  );
}
  
  }

