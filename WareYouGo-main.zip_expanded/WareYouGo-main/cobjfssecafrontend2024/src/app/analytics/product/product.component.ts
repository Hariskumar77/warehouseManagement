import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../../services/plotly.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isPlotClicked: boolean = false;
  constructor(private plotlyService: PlotlyService) { 

   }
  

  ngOnInit() {
    
  }

  plotClicked(){
    this.isPlotClicked = true;
  }

  plot(){
    this.isPlotClicked = true;
    this.plotlyService.plotBarChart('Product Flow Comparison','Products',
    'Quantity of Products','plotDiv','stack')
  }

  plotCostDistribution(){
    this.isPlotClicked = true;
    this.plotlyService.plotHistogram('Product Cost Distribution',
    'Unit Cost','Count of Products','plotDiv')
  }

}
