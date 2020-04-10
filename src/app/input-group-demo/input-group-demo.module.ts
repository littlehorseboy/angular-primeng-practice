import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { InputGroupDemoComponent } from './input-group-demo/input-group-demo.component';

@NgModule({
  declarations: [
    InputGroupDemoComponent,
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  exports: [
    InputGroupDemoComponent,
  ],
})
export class InputGroupDemoModule { }
