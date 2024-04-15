import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../../services/plotly.service';

@Component({
  selector: 'app-inventory-analytics',
  templateUrl: './inventory-analytics.component.html',
  styleUrls: ['./inventory-analytics.component.css']
})
export class InventoryAnalyticsComponent implements OnInit {

  isPlotClicked: boolean = false;
  constructor(private plotlyService: PlotlyService) { 

   }
  
  ngOnInit() {
    
  }

  plotClicked(){
    this.isPlotClicked = true;
  }

  plotStockvsThreshold(){
    this.isPlotClicked = true;
    this.plotlyService.plotBarChart('Product Threshold vs Current Stock',
    'Products','Count of Products','plotDiv','group')
  }
}
