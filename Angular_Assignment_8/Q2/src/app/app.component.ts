import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q2';
  parentText='';
  textFromChild='';
  writeToChild(value : string){
    this.parentText=value;
  }

}
