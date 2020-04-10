import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { AutoCompleteDemoComponent } from './auto-complete-demo/auto-complete-demo.component';



@NgModule({
  declarations: [
    AutoCompleteDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule
  ],
  exports: [
    AutoCompleteDemoComponent
  ]
})
export class AutoCompleteDemoModule { }
