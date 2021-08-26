import { Injectable } from '@angular/core';
import { EMPLOYEES } from 'src/app/mock.data';
import { Employee } from 'src/app/Employee';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
  }

  getEmployeeData():Promise<Employee[]>{
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees').toPromise();
  }
}
