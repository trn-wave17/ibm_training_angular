import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { Employee } from '../Employee';

fdescribe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClientMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmployeeService);
    httpClientMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch employee data from server', ()=>{

    let employees: Employee[] = [{
      id: 1,
      name: "Vaibhav",
      email: "vaibhav@gmail.com",
      active: false
    },
    {
      id: 2,
      name: "Namit",
      email: "namit@gmail.com",
      active: true
    }]
    //spyOn(service, 'getEmployees').and.callThrough();
    service.getEmployees().subscribe(response=>{
      expect(response).toBe(employees);
    });

   // expect(service.getEmployees).toHaveBeenCalled();
    let request = httpClientMock.expectOne({
      url: 'http://localhost:3000/employees',
      method: 'GET'
    });
    request.flush(employees);
  })
});
