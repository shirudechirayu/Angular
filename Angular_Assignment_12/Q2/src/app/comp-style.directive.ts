import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCompStyle]'
})
export class CompStyleDirective implements OnInit{

  constructor(public eobj: ElementRef) { }
  ngOnInit(): void {
    this.eobj.nativeElement.style.background = 'yellow';
    this.eobj.nativeElement.style.fontWeight = 'bold';
  }

}
