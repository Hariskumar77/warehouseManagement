import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../../services/plotly.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isPlotClicked: boolean = false;
  constructor(private plotlyService: PlotlyService) { 

   }

  ngOnInit() {
    
  }

  plotClicked(){
    this.isPlotClicked = true;
  }

  plotUserDistribution(){
    this.isPlotClicked = true;
    this.plotlyService.plotSunburst('Users','plotDiv')
  }
}
