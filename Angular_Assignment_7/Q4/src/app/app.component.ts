import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q4';
  name="Marvellous Infosystems";

  upper() : void{
    this.name=this.name.toUpperCase();
  }

  lower() : void{
    this.name=this.name.toLowerCase();
  }
}
