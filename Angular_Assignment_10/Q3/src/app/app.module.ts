import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Technology1Component } from './technology1/technology1.component';
import { Technology2Component } from './technology2/technology2.component';
import { Books1Component } from './books1/books1.component';
import { Books2Component } from './books2/books2.component';
import {HttpClientModule} from '@angular/common/http'
import { DatasService } from './datas.service';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    Technology1Component,
    Technology2Component,
    Books1Component,
    Books2Component,
    TechnologyComponent,
    BooksComponent,
    WrongChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
