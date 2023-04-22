import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { NumserviceService } from './numservice.service';
import { StrserviceService } from './strservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumserviceService, StrserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
