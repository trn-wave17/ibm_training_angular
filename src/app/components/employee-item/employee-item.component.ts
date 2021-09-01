import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit, AfterViewInit {

  @Input() employee: Employee = {name:"Default","email":"default@gmail.com",active:true};

  @Output() switch = new EventEmitter();

  @Output() delete = new EventEmitter();

  @ViewChild('employeeItem') 
  employeeItem: ElementRef | undefined;

  faTimes = faTimes;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  
  ngAfterViewInit(): void {
    if(this.employeeItem)
        this.employeeItem.nativeElement.style.color = 'red';
  }

  ngOnInit(): void {
  }



  switchActiveness(){
    this.switch.emit();
  }

  deleteClicked(){
    this.delete.emit();
  }

}
