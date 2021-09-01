import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EmployeeItemColorDirective } from './employee-item-color.directive';
import { MockElementRef } from './MockElementRef';




describe('EmployeeItemColorDirective', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeItemColorDirective ],
      providers: [{provide: ElementRef, useClass: MockElementRef}]
    })
    .compileComponents();
  });


  it('should create an instance', () => {
    const directive = TestBed.createComponent(EmployeeItemColorDirective);
    expect(directive).toBeTruthy();
  });
});
