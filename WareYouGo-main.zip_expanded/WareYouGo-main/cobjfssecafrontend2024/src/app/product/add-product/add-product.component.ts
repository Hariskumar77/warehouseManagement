import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ ProductService ]
})
export class AddProductComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService) {
    this.product = new Product();
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.productService.postProduct(this.product).subscribe(
      (response: Product) => {
        console.log(response);
        alert("Product Added with ID: " + response.productId)
        window.location.replace("/product-inbound")
      },
      (error) => {
        console.log(error);
        alert("Error: please check console")
      }
    );
  }

}
