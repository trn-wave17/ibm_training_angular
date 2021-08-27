import { Injectable } from '@angular/core';
import { EMPLOYEES } from 'src/app/mock.data';
import { Employee } from 'src/app/Employee';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl: string = 'http://localhost:3000/employees';
  
  

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }

  getEmployeeData():Promise<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiUrl).toPromise();
  }

  updateEmployeeData(employee: Employee): Observable<any>{
    return this.httpClient.put<Employee[]>(`${this.apiUrl}/${employee.id}`, employee, httpOptions);
  }

  deleteEmployeeData(employee:Employee): Observable<any>{
    return this.httpClient.delete(`${this.apiUrl}/${employee.id}`);
  }

  addEmployeeData(employee:Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(this.apiUrl, employee, httpOptions);
  }

}
