import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q3';
  name : String='Marvellous Infosystems';

  fun() : void{
    this.name="Educating for Better tomorrow";
  }
}
