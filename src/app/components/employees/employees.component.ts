import { newArray } from '@angular/compiler/src/util';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { counter } from '@fortawesome/fontawesome-svg-core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef) {
   }

  options: string[] = ['Ankit','Hardik','Namit','Vaibhav','Raunaq'];
  filteredOptions = this.options;
  counter: number = 0;
  ngOnInit(): void {
    this.loadEmployees();
    let obj = this;
    setInterval(function(){
      obj.counter++;
     // obj.employees = [{name:'Divyansh',email:'divyansh@gmail.com',active:true}];
      obj.employees[0].name = `Divyansh${obj.counter}`;
      obj.cdr.markForCheck();
    },1000)

    setTimeout(function(){
      obj.cdr.detach();
    },10000);
    setTimeout(function(){
      obj.cdr.reattach();
    },20000);
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

  addEmployee(employee:Employee){
   this.employeeService.addEmployeeData(employee).subscribe((emp)=>{
     this.employees.push(emp);
   })
  }

}
