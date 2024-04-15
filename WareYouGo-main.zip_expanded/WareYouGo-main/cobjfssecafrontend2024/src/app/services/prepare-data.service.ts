import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class PrepareDataService {
  products: any;
  sales: any
  users: any
  inventory: any
  constructor(private backendService:BackendService) {
    this.backendService.getProducts().subscribe(
      data => {
        this.products = data
      }
    )
   }

   prepareForHeatmap(): Promise<any[]>{
    return new Promise((resolve,reject) => {
      this.backendService.getInventoryLocations().subscribe(
        locations => {
          const maxShelfId = Math.max(...locations.map(item => item.shelfId));
          const maxRackId = Math.max(...locations.map(item => item.rackId));
      
          // Initialize a 2D array to store quantities
          const heatmapData = [];
          for (let i = 0; i <= maxShelfId; i++) {
              heatmapData[i] = new Array(maxRackId + 1).fill(0);
          }
      
          // Fill the heatmapData array with quantities
          locations.forEach(item => {
              heatmapData[item.shelfId][item.rackId] = item.quantity;
          });
          console.log(heatmapData)
          resolve(heatmapData);
    })
      }
    )
   }

   prepareFor3D(): Promise<any[]>{
    return new Promise((resolve,reject) => {
      this.backendService.getInventoryLocations().subscribe(
        locations => {
          let data = []
          locations.forEach(
            location => {
              data.push([location.rackId,location.shelfId,location.quantity])
            }
          )
          resolve(data)
    })


    
      }
    )
   }

   prepareForLineChart(forPlot: string): Promise<any>{

    return new Promise((resolve,reject) => {
      this.backendService.getSales().subscribe(
        dataFetched => {
          if(forPlot === 'Purchase vs Sales' || forPlot==='Volume of Ledgers by Type' ){
            let data = [[],[],[],[]]
            dataFetched.forEach(sale => {
              let inboundTimes: any[] = []
              let inboundValue: any[] = []
              let outboundTimes: any[] = []
              let outboundValue: any[] = []
              if(sale.inbound.length){
                sale.inbound.forEach(ledger => {
                 inboundTimes.push(ledger.inOutTime)
                 inboundValue.push(ledger.quantity*ledger.product.unitCost)
                });
              }
              if(sale.outbound.length){
               sale.outbound.forEach(ledger => {
                 outboundTimes.push(ledger.inOutTime)
                 outboundValue.push(ledger.quantity*ledger.product.unitCost)
                });
              }
              data[0].push(...inboundTimes)
              data[1].push(...inboundValue)
              data[2].push(...outboundTimes)
              data[3].push(...outboundValue)
            });
            resolve(data)
          } else{
            this.backendService.getProductSales(Number(forPlot.split('-')[1])).subscribe(
              productSales => {
                let data = [[],[],[],[]]
                let productInboundTimes = []
                let productInboundValues = []
                let productOutboundTimes = []
                let productOutboundValues = []
                productSales.inbound.forEach(ledger => {
                  productInboundTimes.push(ledger.inOutTime)
                  productInboundValues.push(ledger.quantity*ledger.product.unitCost)
                });
                productSales.outbound.forEach(ledger => {
                  productOutboundTimes.push(ledger.inOutTime)
                  productOutboundValues.push(ledger.quantity*ledger.product.unitCost)
                });
                data[0].push(...productInboundTimes)
                data[1].push(...productInboundValues)
                data[2].push(...productOutboundTimes)
                data[3].push(...productOutboundValues)
                resolve(data);
              }
            )
          }
    })


    
      }
    )
     
   }

  prepareForHistogram(forPlot:string): Promise<any[]>{

    if(forPlot==='Product Cost Distribution'){

      return new Promise((resolve,reject) => {
        this.backendService.getProducts().subscribe(
          products => {
              let data = []
              products.forEach(
                product => {
                  data.push(product.unitCost)
                }
              )
              resolve(data)
      })
        }
      )
    }
  }

  prepareForBarChart(forPlot: string): Promise<any[]>{
    return new Promise((resolve,reject) => {
      this.backendService.getSales().subscribe(
        sale => {
          if(forPlot === 'Product Flow Comparison'){
            let data = [[],[],[],[]]
            let inbounds: any[] = []
            let outbounds: any[] = []
            let damaged: any[] = []
            let productNames: any[] = []
            sale.forEach(productSale => {
              
              inbounds.push(productSale.inbound.length)
              outbounds.push(productSale.outbound.length)
              damaged.push(productSale.damaged.length)
              productNames.push(productSale.productName)
            });
            data[0].push(...inbounds)
            data[1].push(...outbounds)
            data[2].push(...damaged)
            data[3].push(...productNames)
            console.log(data)
            resolve(data)
          } else {
            this.backendService.getProducts().subscribe(
              product => {
                let data = [[],[],[]]
                let stock: any[] = []
                let threshold: any[] = []
                let productNames: any[] = []
                product.forEach(
                  productDetails => {
                    stock.push(productDetails.currentStock)
                    threshold.push(productDetails.threshold)
                    productNames.push(productDetails.name)
                  }
                )
                data[0].push(...stock)
                data[1].push(...threshold)
                data[2].push(...productNames)
                resolve(data)
              }
            )
          }
    })


    
      }
    )
  }

  prepareForSunburst(forPlot: string): Promise<any>{
    const sunburstData = {
      name: 'users',
      children: []
  }  
    return new Promise((resolve,reject) => {
      this.backendService.getUsers().subscribe(
        data => {
          this.users = data
          if(forPlot === 'Users'){
            this.users.forEach(user => {
              // Check if the user type already exists in the hierarchy
              const userTypeNode = sunburstData.children.find(node => node.name === user.userType);
              if (userTypeNode) {
                  // User type already exists, increment its value
                  const userNameNode = userTypeNode.children.find(child => child.name === user.name);
                if (!userNameNode) {
                    userTypeNode.children.push({ name: user.name, value: 1 });
                }
              } else {
                  // User type does not exist, create a new node
                  sunburstData.children.push({
                      name: user.userType,
                      value: 1,
                      children: [{ name: user.name, value: 1 }]
                  });
              }
          });
          resolve(sunburstData)
          }
    })


    
      }
    )
  }

  prepareForPie(forPlot: string): Promise<any>{
    return new Promise((resolve,reject) => {
      this.backendService.getInventory().subscribe(
        data => {
          this.inventory = data
          if(forPlot === 'inventory-pie'){
            let label = ['Inbound','Outbound','Damaged']
            let value = []
            value.push(this.inventory.totalInboundLedgers)
            value.push(this.inventory.totalOutboundLedgers)
            value.push(this.inventory.totalDamagedStock)
            let final = [label,value]
            resolve(final)
          } else {
            this.backendService.getProductSales(Number(forPlot.split('-')[1])).subscribe(
              data => {
                this.inventory = data
                let label = ['Inbound','Outbound','Damaged']
                let value = []
                value.push(this.inventory.inbound.length)
                value.push(this.inventory.outbound.length)
                value.push(this.inventory.damaged.length)
                let final = [label,value]
                resolve(final)
              }
            )
          }
    })


    
      }
    )
  }
}
