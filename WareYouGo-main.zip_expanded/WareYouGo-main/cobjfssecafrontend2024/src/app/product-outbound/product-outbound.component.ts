import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ledger } from '../ledger/ledger.model';
import { LocationAnalyzerService } from '../location-analyser/location-analyzer.service';
import { Location } from '../location/location.model';
import { LoginService } from '../login/login.service';
import { ProductInbound } from '../product-inbound/product-inbound.model';
import { Product } from '../product/product.model';
import { ProductOutbound } from './product-outbound.model';
import { OutboundService } from './product-outbound.service';

@Component({
  selector: 'app-product-outbound',
  templateUrl: './product-outbound.component.html',
  styleUrls: ['./product-outbound.component.css']
})

export class ProductOutboundComponent implements OnInit {

  productOutbound: ProductOutbound;
  productInbound:ProductInbound={
    productID: "1",
    productName: "Ball",
    batchNumber: "45",
    length: 20,
    width: 20,
    height: 20,
    productWeight: 10,
    quantity: 5,
    supplierName: "karthik",
    // supplierLocation: string;
    purchaseOrderNumber: 200,
    dateOfPOInsurance: new Date(),
    dateOfDelivery: new Date()
  };
  status = true;
  flag = false;
  flag1 = false;
  disableFlag = false;
  checkFlag = false;
  product: Product[];
  locations:Location[]=[];
  l: Location[] = []; 
  ledger :Ledger[];
  newProduct: ProductOutbound = { productName: null, productID: null, productQuantity: 0, deliveryLocation: null };
  selectedProduct: ProductOutbound = null;
  checkboxValues: boolean[] = [];

  constructor(private productService: OutboundService,private loginService:LoginService) {}

  ngOnInit() {
 
    this.productOutbound = new ProductOutbound();

    this.getAllProducts();
    console.log(this.product);
    
  }
  updateProductCode() {
    // Find the selected product
    const selectedProduct = this.product.find(p => p.name === this.productOutbound.productName);
    // Assign the product ID to the product code
    if (selectedProduct) {
        this.productOutbound.productID = selectedProduct.productId; 
    }
}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.productOutbound);
      this.status = false;
      this.getLocationsByProductId(this.productOutbound.productID);
      //this.getLedgerByProductId(this.productOutbound.productID);

       this.checkboxValues = new Array(this.locations.length).fill(false);
       //this.disableFlag = true;
   
    
    } else {
      console.log('Form is invalid.');
    }

    // this.getAllProducts();
  }
  onCheckboxChange1(value: string, index: number) {
    if (value) {
        const location = this.locations[index];
        if (!this.l.includes(location)) {
            this.l.push(location);
            console.log("Selected locations:", this.l);
        }
    } else {
        const locationIndex = this.l.findIndex(loc => loc === this.locations[index]);
        if (locationIndex !== -1) {
            this.l.splice(locationIndex, 1);
        }
    }
    //console.log("Selected locations:", this.l);
}


  saveList() {
    this.flag1 = true;
    this.disableFlag = true;

 
  var user = this.loginService.getCookie();
  console.log("This is locations : ",this.l);
  for(let shelf of this.l){
    console.log("This is shelf",shelf);
    shelf.statusCode="TEMPORARILY_BLOCKED";
    
    this.productService.updateLocation(shelf).subscribe(
      (value)=>console.log(value),
      (error)=>console.log(error)      
    )

    this.productService.createNewLedger(user,this.product[0],shelf,this.productInbound,this.productOutbound)
    .subscribe(
      (value) => {
        console.log("this is value ",value)
        alert("Product Outbound Done")
        window.location.replace("/dashboard")
      },
      (error) => {console.log("This is error",error)}
    );
    //break;
  }


  }

  onCheckboxChange(value: string, index: number) {
    console.log(value);
    // this.checkboxValues[index] = value;
    // this.checkFlag = this.checkboxValues.some(val => val);
    // console.log(this.checkboxValues); 
  }

//   onCheckboxChange(checked: boolean, index: number) {
//     this.locations[index].selected = checked;
//     this.checkboxValues = this.locations.map(location => location.selected);
//     this.checkFlag = this.checkboxValues.some(val => val);
//     console.log(this.checkboxValues);
// }

  isAnyCheckboxChecked() {
    return this.checkboxValues.some(val => val);
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      products => {
        console.log('Products retrieved:', products);
        this.product = products;
      },
      error => {
        console.error('Error retrieving products:', error);
      }
    );
  }

  getLocationsByProductId(productId :Number) {
    this.productService.getLocationsByProductId(productId).subscribe(
        location => {
            console.log('Locations retrieved:', location);
            this.locations = location;
            console.log(this.locations.length);
            console.log(this.locations);

            if (this.locations.length === 0) {
              this.flag = true;
            }
        },
        error => {
            console.error('Error retrieving locations:', error);
        }
    );
}


// getLedgerByProductId(productId :Number) {
//   this.productService.getLedgerByProductId(productId).subscribe(
//       ledger => {
//           console.log('Ledger retrieved:', ledger);
//           this.ledger = ledger;
//           console.log(this.ledger.length);
//           console.log(this.ledger);

//       },
//       error => {
//           console.error('Error retrieving ledger:', error);
//       }
//   );
// }

}
  



