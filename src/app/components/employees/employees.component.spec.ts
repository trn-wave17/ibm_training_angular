import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

import { EmployeesComponent } from './employees.component';
import { EmployeeStub } from './EmployeeStub';

fdescribe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let employeeService: EmployeeService;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        EmployeesComponent, 
        AddEmployeeComponent
       ],
      providers: [{provide: EmployeeService, useClass: EmployeeStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    employeeService = fixture.debugElement.injector.get(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should call loadEmployees method in the component', ()=>{
    spyOn(component, 'loadEmployees');
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
    element.nativeElement.click();
    expect(component.loadEmployees).toHaveBeenCalledWith();
  })

  it('it should call loadEmployees method in the component', ()=>{
    spyOn(employeeService, 'getEmployees').and.callThrough();
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
    element.nativeElement.click();
    expect(employeeService.getEmployees).toHaveBeenCalled();
    expect(component.employees.length).toEqual(2);
    expect(component.employees[0].name).toBe('Vaibhav');
  })


});
