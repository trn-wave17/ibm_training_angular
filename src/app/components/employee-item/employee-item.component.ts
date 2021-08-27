import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee: Employee = {name:"Default","email":"default@gmail.com",active:true};

  @Output() switch = new EventEmitter();

  @Output() delete = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  switchActiveness(){
    this.switch.emit();
  }

  deleteClicked(){
    this.delete.emit();
  }

}
