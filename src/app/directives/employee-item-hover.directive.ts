import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmployeeItemHover]'
})
export class EmployeeItemHoverDirective {

  constructor(private element: ElementRef) { }
  initialColor: string = '#f4f4f4';
  @HostListener('mouseover')
  mouseHover(){
    this.initialColor = this.element.nativeElement.style.backgroundColor;
    this.element.nativeElement.style.backgroundColor = 'lightgoldenrodyellow';
  }

  @HostListener('mouseout')
  mouseLeave(){
    this.element.nativeElement.style.backgroundColor = this.initialColor;
  }

}
