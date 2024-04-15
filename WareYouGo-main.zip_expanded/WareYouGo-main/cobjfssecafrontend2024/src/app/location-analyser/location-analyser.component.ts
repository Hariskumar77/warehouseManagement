import { Component, OnInit } from '@angular/core';
import { LocationAnalyzer } from '../models/locationAnalyzer';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';
import { ProductInbound } from '../product-inbound/product-inbound.model';
import { LocationAnalyzerService } from './location-analyzer.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-location-analyser',
  templateUrl: './location-analyser.component.html',
  styleUrls: ['./location-analyser.component.css'],
  providers: [ LocationAnalyzerService ]
})
export class LocationAnalyserComponent implements OnInit {
  product: Product;
  productInbound: ProductInbound
  availableLocations:LocationAnalyzer[] = [];
  constructor(private router: Router, private productService:ProductService,
    private locationAnalyzerService:LocationAnalyzerService, private loginService: LoginService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {product: Product, productInbound: ProductInbound};

    this.product = state.product
    this.productInbound = state.productInbound

  }

  ngOnInit() {
    console.log("ngoninit -> ", this.product)
    this.locationAnalyzerService.getAllAvailableLocations(this.product).subscribe(
      (response:LocationAnalyzer[])=>{
        if(response){
          console.log(response);
          //alert("Product Added with ID: " + response.productId)
          this.availableLocations=response;
        }
        //console.log(response);
      },
      (error) => {
        console.log(error);
        // alert("Error: please check console")
      }
    );

    
  }
  // none="";
  // displayedColumns = ['rackId', 'shelfId', 'isAvailable'];
  // dataSource = locations;

  // product = {
  //   name: "Ball",
  //   quantity: 100,
  // }
  // remainingQuantity = this.product.quantity;
  // title = 'table';
  // flag = false;
  // locations = [
  //   { rackId: 1, shelfId: 1, selected: false, capacity: 50 },
  //   { rackId: 1, shelfId: 2, selected: false, capacity: 20 },
  //   { rackId: 2, shelfId: 1, selected: false, capacity: 50 },
  //   { rackId: 2, shelfId: 2, selected: false, capacity: 20 },
  // ];



  getTotalSelectedCapacity(): number {
    return this.availableLocations.reduce((total, loc) => total + (loc.selected ? loc.quantityBasedOnProduct : 0), 0); 
  }
  isCheckboxDisabled(location: any): boolean {
    const selectedShelves = this.availableLocations.filter(loc => loc.selected);
    const totalRequiredUnits = this.productInbound.quantity;
    let totalCapacity = 0;

    for (const shelf of selectedShelves) {
      totalCapacity += shelf.quantityBasedOnProduct;
    }
    return totalCapacity >= totalRequiredUnits && !location.selected;
  }
  
  isButtonDisabled(): boolean {
    return this.getTotalSelectedCapacity() < this.productInbound.quantity;
  }
  
  redirect(){
    let selectedShelfs = this.availableLocations.filter((loc)=>loc.selected);

    // var user:any = {
    //   empId: 25,
    //   name: "Anush",
    //   email: "a@gmail",
    //   password: "pass",
    //   mobileNumber: "1234567890",
    //   userType: null
    // }

    var user = this.loginService.getCookie()

    for(let shelf of selectedShelfs){
      console.log(shelf.location);
      this.locationAnalyzerService.createNewLedger(user,this.product,shelf.location,this.productInbound)
      .subscribe(
        (value) => {
          console.log(value)
          // alert("Product Inbound Done")
          // window.location.replace("")
        },
        (error) => {console.log(error)}
      );
      //break;
      this.locationAnalyzerService.updateLocation(shelf.location).subscribe(
        (value)=>console.log(value),
        (error)=>console.log(error)
      )

      this.productService.updateCurrentStock(this.product.productId, this.productInbound.quantity).subscribe(
        (value)=>console.log(value),
        (error)=>console.log(error)
      )
    }
    alert("Product Inbound Done");

    window.location.replace("/dashboard")
  }
}
