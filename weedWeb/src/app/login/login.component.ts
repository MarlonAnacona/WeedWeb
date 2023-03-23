import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, userLogin } from '../model/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userlogin: userLogin = {
    password: '',
    email: '',
  };
  public name: any;
  public password: any;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  home() {
    this.route.navigate(['../Home']);
  }

  /**
   * Login for the user
   * if login is success-> go to the Dashboard
   * else -> error
   */
  login() {
    console.log(this.userlogin);

    this.route.navigate(['../CreateFarm']);
  }
}
