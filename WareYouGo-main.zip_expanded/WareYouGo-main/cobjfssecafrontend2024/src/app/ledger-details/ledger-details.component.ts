import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../services/backend.service';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-ledger-details',
  templateUrl: './ledger-details.component.html',
  styleUrls: ['./ledger-details.component.css']
})
export class LedgerDetailsComponent implements OnInit {
  ledger: any
  salesLedgers: any
  productSales: any
  productSalesValue: number
  productLedgers: any

  constructor(private route: ActivatedRoute,
    private backendService: BackendService) {
     }

  ngOnInit() {

    let ledgerId = +this.route.snapshot.paramMap.get('ledgerId');
    this.route.paramMap.pipe(
      switchMap(params => {
        // Extract route parameters
         ledgerId = +params.get('ledgerId');
        // Call your data service method to fetch data based on the route parameters
        return this.backendService.getLedgerById(ledgerId);
      })
    ).subscribe(data => {
      // Update component content with the fetched data
      this.ledger = data;
    });


      this.backendService.getLedgerById(ledgerId).subscribe(
        ledger => {
          this.ledger = ledger
          console.log('hello',ledger)
          console.log('cool',this.ledger.product.productId)
          this.backendService.getProductSales(this.ledger.product.productId).subscribe(
          productSales => {
            this.productSales = productSales 
            if(this.productSales.outbound.length){
              this.productSalesValue = this.productSales.outbound.reduce(
                (acc,curr) => acc + curr.quantity, 0
              ) * this.productSales.outbound[0].product.unitCost
            } else{
              this.productSalesValue = 0
            }

            this.backendService.getProductLedgers(this.ledger.product.productId).subscribe(
              productLedgers => {
                console.log(productLedgers)
                this.productLedgers = productLedgers.filter(
                  ledger => {
                    return (ledger.ledgerId != this.ledger.ledgerId)
                  }
                )
                console.log(this.productLedgers)
              }
            )

          }
        )
        }
      )

      this.backendService.getSales().subscribe(
        sales => {
          this.salesLedgers = sales 
          console.log(this.salesLedgers)
        }
      )

  }
}
