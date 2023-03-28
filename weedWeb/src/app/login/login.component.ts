import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, userLogin } from '../model/interfaces';
import { ServicesService } from '../services/services.service';

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

  constructor(private route: Router,private serivce:ServicesService) {}

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
this.serivce.login(this.userlogin).subscribe({next : (response) =>{

  this.route.navigate(['../CreateFarm']);


},  error: (err)=>{

  console.log("Se ha producido un error")
}

});
  }

}
