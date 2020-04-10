import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InputGroupDemoModule } from './input-group-demo/input-group-demo.module';
import { AutoCompleteDemoModule } from './auto-complete-demo/auto-complete-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputGroupDemoModule,
    AutoCompleteDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
