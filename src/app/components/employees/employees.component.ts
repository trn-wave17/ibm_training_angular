import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
   }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    this.employeeService.getEmployees().subscribe((response)=>{
      this.employees = response;
    });
  }

  loadEmployeesUsingPromise(){
    this.employeeService.getEmployeeData().then((response)=>{
      this.employees = response;
    }).catch((error)=>{
      console.log(error);
    })
  }

  async loadEmployeesUsingAsyncAwait(){
     this.employees = await this.employeeService.getEmployeeData();
  }


  switchActiveness(employee: Employee):void{
      employee.active = !employee.active;
      this.employeeService.updateEmployeeData(employee).subscribe();
  }

  deleteEmployee(employee: Employee):void{
    this.employeeService.deleteEmployeeData(employee).subscribe(()=>{
      this.employees = this.employees.filter(emp=>emp.id !== employee.id);
    })
  }

}
