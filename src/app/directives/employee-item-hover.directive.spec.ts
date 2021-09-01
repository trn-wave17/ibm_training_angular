import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EmployeeItemHoverDirective } from './employee-item-hover.directive';
import { MockElementRef } from './MockElementRef';

describe('EmployeeItemHoverDirective', () => {
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeItemHoverDirective ],
      providers: [{provide: ElementRef, useClass: MockElementRef}]
    })
    .compileComponents();
  });

  it('should create an instance', () => {
    const directive = TestBed.createComponent(EmployeeItemHoverDirective);
    expect(directive).toBeTruthy();
  });
});
