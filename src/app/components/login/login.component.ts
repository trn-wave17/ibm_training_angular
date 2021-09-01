import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.router.navigate(['login']);
  }

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  requestLogin(){
    console.log(this.loginForm.value);
  }

}
