import { Injectable } from '@angular/core';
import * as Plotly from 'plotly.js-dist';
import { PrepareDataService } from './prepare-data.service';

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {

  constructor(private prepDataService: PrepareDataService) { }

  plotLine(title: string, plotDiv: string, xlabel:string,
    ylabel:string,title1:string=''){     
  this.prepDataService.prepareForLineChart(title).then((
    data => {
      let trace1
      let trace2
      if(title==='Volume of Ledgers by Type'){
        console.log('correct')
         trace1 = {
          x:  data[0], 
          y:  data[1],
          type: 'scatter',
          fill: 'tonexty',
          name: 'purchase'     
        };
    
        trace2 = {
          x:  data[2], 
          y:  data[3],
          type: 'scatter',
          fill: 'tozeroy',
          name: 'sales'  
        };
      } else{
        trace1 = {
          x:  data[0], 
          y:  data[1],
          type: 'scatter',
          name: 'purchase'     
        };
    
        trace2 = {
          x:  data[2], 
          y:  data[3],
          type: 'scatter',
          name: 'sales'  
        };

      }
       
      let layout: any;
      if(title1 ===''){
        layout = {
          title:title,
          xaxis: {
            title: xlabel
          },
          yaxis: {
            title: ylabel
          },
          margin: {
            pad: 10
          }
        };
      } else{
        layout = {
          title:`Purchase vs Sales - ${title1}`,
          xaxis: {
            title: xlabel
          },
          yaxis: {
            title: ylabel
          },
          margin: {
            pad: 10
          }
        };
      }
      
      console.log(trace1)
      Plotly.newPlot(plotDiv, [trace1,trace2], layout);
    }
  )).catch(
    (a) => {
      console.log('error in graph')
      let trace1 = {
        x:  [], 
        y:  [],
        type: 'scatter',
        name: 'inbound'     
      };
      Plotly.newPlot(plotDiv, [trace1]);
    }
  )

         
  }
  
  plotHeatmap(title:string,xlabel:string,ylabel:string,showXticks:boolean,
    showYticks:boolean,plotDiv:string){

      this.prepDataService.prepareForHeatmap().then(
        heatMapData => {
          var data = [
            {
              z: heatMapData,
              type: 'heatmap',
              hoverongaps: false,
              colorscale: [
                [0, '#8969f0'],       // Starting color (blue)
    [0.5, '#3586b5'],     // Middle color (purple)
    [1, '#02376b'] 
            ]
            }
          ];
          var layout = {
            title: title,
            xaxis: {
              showticklabels: showXticks,
              title: xlabel,
          },
          yaxis: {
              showticklabels: showYticks,
              title: ylabel,
          }
          }
          Plotly.newPlot(plotDiv,data,layout); 
        }
      )



        
 

  }

  plotHistogram(title:string,xTitle:string,yTitle:string,plot:string){
   this.prepDataService.prepareForHistogram(title).then(
     x => {
      var trace = {
        x: x,
        type: 'histogram',
      };
      var data = [trace];
      var layout = {
        title: title,
        width: 800,
        height: 600,
        xaxis: {
          range: [Math.min(...x)-10, Math.max(...x)+10],
          title : {text: xTitle}
        },
        yaxis: {
          title: {text: yTitle}
        },
        autosize:false
      }
      Plotly.newPlot(plot,data, layout, {scrollZoom:true, responsive:true})
     }
   )
    
  }

  plotPieChart(title:string,plot:string){

    this.prepDataService.prepareForPie(title).then(
      data => {
        var graphData = [{
          values: data[1],
          labels: data[0],
          type: 'pie',
        }];

        var layout = {
          width: 400,
          height:200,
          margin: {
            l: 20,
            r: 20,
            b: 45,
            t: 30,
            pad: 0
        
          },
        };

        Plotly.newPlot(plot,graphData,layout)

      }
    )

    
    

  }

  plot3D(w:number,h:number){
    this.prepDataService.prepareFor3D().then(
      data => {
        const trace = {
          z: data,
          type: 'surface',
          colorscale: 'Viridis'
      };
      
      const layout = {
          title: 'Storage Space Utilization',
          scene: {
              xaxis: { title: 'Rack ID' },
              yaxis: { title: 'Shelf ID' },
              zaxis: { title: 'Quantity' }
          },
          width: w,
          height: h,
      margin: {
        l:0,
        t:70,
        pad: 0
      },
      };

      Plotly.newPlot('plot', [trace], layout);

      }
    )
  }

  plotBarChart(title:string,xlabel:string,ylabel:string,
    plotDiv : String, chartType:string)
    
    {

      this.prepDataService.prepareForBarChart(title).then(
        data => {

          if(title == 'Product Flow Comparison'){
            var trace1 = {
              x: data[3],
              y: data[0],
              name: 'Inbound',
              type: 'bar'
            };
            
            var trace2 = {
              x: data[3],
              y: data[1],
              name: 'Outbound',
              type: 'bar'
            };
            
            var trace3=
            {
              x:data[3],
              y:data[2],
              name : 'Damaged',
              type:'bar'
            };
            
            var graphData = [trace1, trace2 , trace3];
          }
          else{
            var trace1 = {
              x: data[2],
              y: data[0],
              name: 'Stock',
              type: 'bar'
            };
            
            var trace2 = {
              x: data[2],
              y: data[1],
              name: 'Threshold',
              type: 'bar'
            };

            var graphData = [trace1, trace2 ];
          }

          
          var layout = {
            barmode: chartType,
            width: 700,
            title: title,
            xaxis: {
              title : {text: xlabel}
            },
            yaxis: {
              title : {text: ylabel}
            },
          };
          
          Plotly.newPlot(plotDiv, graphData, layout);
        }
      )

      
    }

    plotSunburst(title:string, plotDiv:string){
      this.prepDataService.prepareForSunburst(title).then((
        sunburstData => {
          let labels = []
          let parents = []
          let values = []
          sunburstData.children.map(node => {
            labels.push(node.name)
            values.push(node.children.length)
            parents.push('USERS')
            node.children.map(userNode => {
              labels.push(userNode.name)
              values.push(1)
              parents.push(node.name)
            })
          })
          Plotly.newPlot(plotDiv,[{
            type: 'sunburst',
            labels: labels,
            parents: parents,
            values: values,
            branchvalues: 'total'
        }], {
            title: 'User Types and Names',
            width: 600,
            sunburstcolorway: ['rgb(255, 128, 0)', 'rgb(0, 128, 128)', 'rgb(128, 0, 128)']

        });
        }
      ))
    
    }
}
