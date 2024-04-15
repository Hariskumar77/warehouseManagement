import { Component, OnInit } from '@angular/core';
//import {ProductService} from "../product.service";
import {FormGroup,Validators,FormBuilder, FormControl} from "@angular/forms";
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

 isFetched:boolean=false;
 
 product: Product;
 products:Product[];
  constructor(private productService:ProductService) {
    this.product=new Product();
  }

  ngOnInit() {
    this.productService.getAllProduct()
    .subscribe(product => this.products = product);
  }
  onSubmit(id: number) {
    this.productService.getProduct(id).subscribe(
      (product) => {
        this.product = product; //Fetched product
        this.isFetched = true; //set the fetched flag to true to display the fetched product details
  
       
      },
      (error) => {
        this.isFetched = false//set the fetched flag to false 
        alert("Product not found");
      }
    );
  }
  
 
  onUpdate() {

   
    const updatedProduct :Product =
    {
      productId : this.product.productId,
      name:this.product.name,
      uom:this.product.uom,
      unitCost:this.product.unitCost,
      weight:this.product.weight,
      length:this.product.length,
      width:this.product.width,
      height:this.product.height,
      currentStock:this.product.currentStock,
      damagedStock:this.product.damagedStock
      
    }
    this.productService.updateProduct(this.product.productId, updatedProduct)
            .subscribe(product => {
              // get the index of product id to be updated
                const index = this.products.findIndex(p => p.productId === this.product.productId);
                if (index !== -1) {
                    this.products[index] = product;
                }
                
                for(var i=0;i<this.products.length;i++){
                  console.log(this.products[i]);
                }
               
                alert("Product updated successfully\n\nThe updated product details are \nName : "+product.name+"\nUOM : "+product.uom+"\nUnit Cost : "+product.unitCost+"\nLength : "+product.length+"\nWidth : "+product.width+"\nHeight : "+product.height+"\n");
                window.location.replace("/product-inbound")
            }
            , error => {
              console.error("Error updating product:", error);
            });
           
            //console.log(this.products);
   //this.productService.updateProduct(this.product.productId,updatedProduct).subscribe(product=>this.product=product)

  }
  
}
