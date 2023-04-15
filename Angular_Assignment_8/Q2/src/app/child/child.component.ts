import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public fromParent : String = "";
  @Output() public fromChild = new EventEmitter()

  writeToParent(value: String){
    this.fromChild.emit(value);
  }
}
