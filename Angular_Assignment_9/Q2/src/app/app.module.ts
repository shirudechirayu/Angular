import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';
import { NumserviceService } from './numservice.service';
import { StrserviceService } from './strservice.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Child2Component,
    Child1Component,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumserviceService, StrserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
