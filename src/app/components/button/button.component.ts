import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() 
  text:string = 'Button';
  
  @Input() 
  color: string = "black";

  @Output() 
  buttonClicked = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(){
    this.buttonClicked.emit();
  }

}
