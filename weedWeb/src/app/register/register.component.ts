import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  userRegister } from '../model/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userRegister: userRegister = {
  firstName: '',
  lastName: '',
  email: '',
  nationalId: -1,
  phoneNumber:-1,
  password: '',
  };
  public firstName: any;
  public lastName: any;
  public email: any;
  public nationalId: any;
  public phoneNumber: any;
  public password: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.userRegister);
    this.route.navigate(['../CreateFarm']);
  }

}
