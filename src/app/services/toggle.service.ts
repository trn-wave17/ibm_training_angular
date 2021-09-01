import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  
  private showForm:boolean = false;
  public subject = new BehaviorSubject<boolean>(false);
  //public subject = new Subject<boolean>();
  
  constructor() { }


  toggleForm(){
    this.showForm = !this.showForm;
    this.subject.next(this.showForm);
  }

  onToggle():Observable<boolean>{
    return this.subject.asObservable();
  }

}
