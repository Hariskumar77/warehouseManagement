import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist';
@Component({
  selector: 'app-robot-analytics',
  templateUrl: './robot-analytics.component.html',
  styleUrls: ['./robot-analytics.component.css']
})
export class RobotAnalyticsComponent implements OnInit {

  isPlotClicked: boolean = false;
  constructor() { 

   }
  

  ngOnInit() {
    
  }

  plotClicked(){
    this.isPlotClicked = true;
  }

  plotRobotCapacity(){
    this.isPlotClicked = true;
    var data = [
      {
        x: [' Robot1', 'Robot2', 'Robot3',' Robot4', 'Robot5', 'Robot6',],
        y: [5000, 2000, 10000,3000 , 15000 , 7000 , 9000],
        marker:{
          color: ['rgba(204,204,204,1)','rgba(204,204,204,1)','rgba(204,204,204,1)','rgba(204,204,204,1)','rgba(204,204,204,1)','rgba(204,204,204,1)','rgba(204,204,204,1)']},
        type: 'bar'
      }
      
    ];
    var layout = {
      title: 'Robot Capacity',
      width : 700,
      xaxis: {
        title: 'Robots'
      },
      yaxis: {
        title: 'Capacity of Robot'
      }
    };
    
    Plotly.newPlot('plotDiv', data , layout);
  }

  plotRobotWorkload(){
    this.isPlotClicked = true;
    var Robot1 = {
      x: ["January", "Feb", "March", "April","May","June","July","August","September","October","November","December"],
      y: [10, 15, 13, 17,5 , 16 , 16 , 15 , 9 ,10 , 20 , 7 ,],
      mode: 'lines+markers',
      name : 'Robot1',
      type: 'scatter'
    };
    
    var Robot2 = {
      x: ["January", "Feb", "March", "April","May","June","July","August","September","October","November","December"],
      y: [16, 5, 11, 9,8 ,2 ,5 ,7 , 9, 11 , 15,10],
      mode: 'lines+markers',
      name : 'Robot2',
      type: 'scatter'
    };
    
    var Robot3= {
      x: ["January", "Feb", "March", "April","May","June","July","August","September","October","November","December"],
      y: [12, 9, 15, 12 , 10 , 4 , 8 ,17 , 11 , 14 , 6 , 8],
      mode: 'lines+markers',
      name : 'Robot3',
      type: 'scatter'
    };
    var layout = {
      width:700,
      title: 'Robot usage',
      xaxis: {
        title: 'Months'
      },
      yaxis: {
        title: 'Number of times robot used'
      }
    };
    
    var data = [Robot1, Robot2, Robot3];
    
    Plotly.newPlot('plotDiv', data ,layout);
    
  }
}
