import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isFormVisible:boolean = false;

  constructor(private toggleService:ToggleService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleAddEmployee(){
    this.isFormVisible = !this.isFormVisible;
    this.toggleService.toggleForm();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
