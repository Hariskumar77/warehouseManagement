import { Injectable } from '@angular/core';
import * as xlsx from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  generateExcel(tableId: string, filename: string) {
    const element = document.getElementById(tableId);
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, filename + '.xlsx');
  }
}
