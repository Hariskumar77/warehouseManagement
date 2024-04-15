import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../../services/plotly.service';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  isPlotClicked: boolean = false;
  constructor(private plotlyService: PlotlyService) { 

   }
  

  ngOnInit() {
    
  }

  plotClicked(){
    this.isPlotClicked = true;
  }

  plotCostDistribution(){
    this.isPlotClicked = true;
    this.plotlyService.plotLine('Volume of Ledgers by Type',
    'plotDiv','Time','Count of Products')
  }

}
