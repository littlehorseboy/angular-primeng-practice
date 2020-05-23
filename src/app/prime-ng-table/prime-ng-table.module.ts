import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { PrimeNgTableRoutingModule } from './prime-ng-table-routing.module';
import { PrimeNgTableComponent } from './prime-ng-table.component';

@NgModule({
  declarations: [
    PrimeNgTableComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    PrimeNgTableRoutingModule,
  ],
  exports: [
    PrimeNgTableComponent,
  ],
})
export class PrimeNgTableModule { }
