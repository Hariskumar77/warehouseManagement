import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { PlotlyService } from '../services/plotly.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit {

  products = []
  fetchedProducts = []
  inventory:any

  get heroes() { return this.products; }
  heroesTotal = -1;
  constructor(private backendService: BackendService,
    private plotlyService: PlotlyService) { }

  ngOnInit() {

    this.plotlyService.plot3D(400,475)

    this.backendService.getProducts().subscribe(
      products => {
        this.products = products
        this.fetchedProducts = products
      }
    )

    this.backendService.getInventory().subscribe(
      inventory => {
        this.inventory = inventory
      }
    )

    this.plotlyService.plotLine('Purchase vs Sales','linePlot',
    'Time','Value in Rupees')

    this.plotlyService.plotPieChart('inventory-pie','pie')

  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this.products = this.fetchedProducts.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.heroes.length;

    if (this.heroesTotal !== newTotal) {
      this.heroesTotal = newTotal;
    } else if (!criteria) {
      this.heroesTotal = -1;
    }
    
  }

  newProduct: boolean = true
  productClicked(id:number,name:string){

    this.plotlyService.plotLine(`product-${id}`,'linePlot',
    'Time','Value in Rupees',name)
    this.backendService.getProductSales(id).subscribe(
      productSales => {
        if(productSales.inbound.length == 0){
          this.newProduct = false
          return
        } else {
          this.newProduct = true
          this.plotlyService.plotPieChart(`product-${id}`,'pie')
        }
      }
    )
    
  }

}
