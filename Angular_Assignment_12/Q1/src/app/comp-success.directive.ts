import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public eobj: ElementRef) { }


  @HostListener('mouseenter')onmouseenter()
  {
    this.eobj.nativeElement.style.background = 'green';
  } 

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobj.nativeElement.style.background = 'black';
  }

}
