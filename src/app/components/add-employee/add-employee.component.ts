import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/Employee';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  name:string='';
  email:string='';
  active:boolean = false;
  showForm:boolean = false;
  subscription: Subscription = Subscription.EMPTY;

  @Output() add = new EventEmitter<Employee>();

  constructor(private toggleService: ToggleService) { }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.toggleService.onToggle().subscribe((response:boolean)=>{
      this.showForm = response;
    })
  }


  onFormSubmit(){
    let employee: Employee = {
      name: this.name,
      email: this.email,
      active: this.active
    }
    this.add.emit(employee);
    this.name='';
    this.email='';
    this.active=false;
  }

}
