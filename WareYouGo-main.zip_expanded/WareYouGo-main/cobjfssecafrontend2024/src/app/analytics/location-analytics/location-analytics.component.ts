import { Component, OnInit } from '@angular/core';
import { PlotlyService } from 'src/app/services/plotly.service';

@Component({
  selector: 'app-location-analytics',
  templateUrl: './location-analytics.component.html',
  styleUrls: ['./location-analytics.component.css']
})
export class LocationAnalyticsComponent implements OnInit {

  isPlotClicked: boolean = false;
  constructor(private plotlyService: PlotlyService) { 

   }
  
  ngOnInit() {
    
  }

  plotClicked(){
    this.isPlotClicked = true;
  }

  plotStorageDistribution(){
    this.isPlotClicked = true;
    this.plotlyService.plotHeatmap('Space Distribution', 'Racks',
    'Shelves',true,true,'plot')
  }

  plotStorage3D(){
    this.isPlotClicked = true;
    this.plotlyService.plot3D(600,600)
  }


}
