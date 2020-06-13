import {
  Component, OnInit, ViewChild, ElementRef, AfterViewInit,
} from '@angular/core';

import { Table } from 'primeng/table';

@Component({
  selector: 'app-prime-ng-table',
  templateUrl: './prime-ng-table.component.html',
  styleUrls: ['./prime-ng-table.component.scss']
})
export class PrimeNgTableComponent implements OnInit {
  @ViewChild('table')
  set table(primeNgTable: Table | undefined) {
    if (primeNgTable) {
      const el = primeNgTable.el.nativeElement.querySelector('table > thead > tr').cloneNode();
      primeNgTable.el.nativeElement.querySelector('table > thead').insertAdjacentElement('afterbegin', el);
    }
  }

  public sales: any[];
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cols = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
      ];

      this.sales = [
        { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
        { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
        { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
        { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
        { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
        { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
        { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
        { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
        { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
        { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
      ];
    }, 1000);
  }
}
