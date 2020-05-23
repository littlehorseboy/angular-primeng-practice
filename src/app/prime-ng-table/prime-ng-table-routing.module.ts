import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeNgTableComponent } from './prime-ng-table.component';

const routes: Routes = [
  { path: 'primeNgTable', component: PrimeNgTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeNgTableRoutingModule { }
