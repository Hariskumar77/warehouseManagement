import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-home',
  templateUrl: './analytics-home.component.html',
  styleUrls: ['./analytics-home.component.css']
})
export class AnalyticsHomeComponent implements OnInit {
  navMode: boolean = false;
  topCards = [
    {title: 'Product Statistics', content: 'empty', imgSrc: '../../assets/images/product.png', link: '/analytics/products'},
    {title: 'Warehouse Movements', content: 'empty', imgSrc: '../../assets/images/ledger.png', link: '/analytics/warehouse-movement'},
    {title: 'Product Placements', content: 'empty', imgSrc: '../../assets/images/location.png', link: '/analytics/location-analytics'},
  ]
  bottomCards = [
    {title: 'Truck Analytics', content: 'empty', imgSrc: '../../assets/images/forklift.png', link: '/analytics/robot-analytics'},
    {title: 'User Analytics', content: 'empty', imgSrc: '../../assets/images/users.png', link: '/analytics/users'},
    {title: 'Inventory Analytics', content: 'empty', imgSrc: '../../assets/images/inventory.png', link: '/analytics/inventory-analytics'}
  ]
  allCards: any[] = [
    {title: 'Product Statistics', content: 'empty', imgSrc: '../../assets/images/product.png', link: '/analytics/products'},
    {title: 'Warehouse Movements', content: 'empty', imgSrc: '../../assets/images/ledger.png', link: '/analytics/warehouse-movement'},
    {title: 'Product Placements', content: 'empty', imgSrc: '../../assets/images/location.png', link: '/analytics/location-analytics'},
    {title: 'Truck Analytics', content: 'empty', imgSrc: '../../assets/images/forklift.png', link: '/analytics/robot-analytics'},
    {title: 'User Analytics', content: 'empty', imgSrc: '../../assets/images/users.png', link: '/analytics/users'},
    {title: 'Inventory Analytics', content: 'empty', imgSrc: '../../assets/images/inventory.png', link: '/analytics/inventory-analytics'}
  ];

  constructor() { 
   }

  ngOnInit() {
  }

  navModeToggle(){
    this.navMode = true;
  }
}
