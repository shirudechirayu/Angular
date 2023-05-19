import { Component } from '@angular/core';
import { TriggerService } from './trigger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  message : any;

  constructor(private triggerService : TriggerService){

  }

  handleClick(){
    this.triggerService.getBatches().subscribe(data => 
      {
        console.log(data);
        this.message = data;
      }
    )
  }
}
