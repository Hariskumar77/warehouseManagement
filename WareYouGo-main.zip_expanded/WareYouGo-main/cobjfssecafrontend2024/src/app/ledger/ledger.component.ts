import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ExcelService } from '../services/excel.service';
import { BackendService } from '../services/backend.service';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  ledgers: any[] = [];
  filteringLedger: any[] = [];
  @ViewChild('product',{ static: true }) product!: ElementRef;
  constructor(private backendService: BackendService, 
         private excelService: ExcelService) { }

  ngOnInit() {
    this.backendService.getLedgers().subscribe(
      data => {
        this.ledgers = data
        this.filteringLedger = data
      }
    )

  }

  generateExcel(){
    this.excelService.generateExcel('ledgers', 'Ledgers');
  }
  
  generatePDF(){
    const element = this.product.nativeElement;
    const opt = {
      filename:     'table.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
 
    html2pdf().from(element).set(opt).save();
  }

  generateJPG() {
    const element = this.product.nativeElement;
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const img = new Image();
      img.src = imgData;
      const link = document.createElement('a');
      link.download = 'screenshot.jpg';
      link.href = imgData;
      link.click();
    }).catch((error) => {
      console.error('Error generating JPG:', error);
    });
  }

  get ledgersFunction() { return this.filteringLedger; }
  ledgersTotal = -1
  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this.filteringLedger = this.ledgers.filter(hero => 
      hero.product.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.ledgersFunction.length;

    if (this.ledgersTotal !== newTotal) {
      this.ledgersTotal = newTotal;
    } else if (!criteria) {
      this.ledgersTotal = -1;
    }
  }

}
