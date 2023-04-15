import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q4';
  content='fhj';

  implementChange(event: any){
    this.content=event.target.value;

    console.log(event);
  }
}
