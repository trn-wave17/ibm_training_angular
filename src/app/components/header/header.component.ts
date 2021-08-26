import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  loadEmployees1(){
    this.employeeService.getEmployees().subscribe((response)=>{
      this.employees = response;
    });
  }

  loadEmployees2(){
    this.employeeService.getEmployeeData().then((response)=>{
      this.employees = response;
    }).catch((error)=>{
      console.log(error);
    })
  }

  async loadEmployees(){
     this.employees = await this.employeeService.getEmployeeData();
  }

}
