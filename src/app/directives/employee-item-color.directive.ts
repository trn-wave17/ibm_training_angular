import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmployeeItemColor]'
})
export class EmployeeItemColorDirective implements OnInit {
  
  @Input()
  appEmployeeItemColor: boolean = true;
  
  constructor(private element: ElementRef) { }
  
  ngOnInit(): void {
    if(this.appEmployeeItemColor){
      this.element.nativeElement.style.backgroundColor = 'lightblue';
    }
  }

}
