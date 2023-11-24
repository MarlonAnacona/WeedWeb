import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, userLogin } from '../model/interfaces';
import { ServicesService } from '../services/services.service';
import jwt_decode from 'jwt-decode';

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
  tokenObject: any;
  public visibleA: Boolean = false;
  constructor(
    private route: Router,
    private serivce: ServicesService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenRefresh');
    localStorage.removeItem('userName');
  }

  home() {
    this.route.navigate(['../Home']);
  }

  showModal() {
    this.visibleA = true;
  }
  registerCompany() {
    this.route.navigate(['../RegisterCompany']);
  }

  registerUser() {
    this.route.navigate(['../Register']);
  }

  login() {

    this.serivce.login(this.userlogin).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.tokenSessionAccess);
        localStorage.setItem('tokenRefresh', response.tokenSessionRefresh);
         this.tokenObject = jwt_decode(response.tokenSessionAccess);
        this.route.navigate(['../CreateFarm']);
          this.serivce.getUser(this.tokenObject.userId).subscribe({
            next: (data) => {
              const email = data.email
              const userName = email.split('@')[0]
              localStorage.setItem('userName', userName)
                  this.message.add({
                    severity: 'success',
                    summary: 'Bienvenido ',
                    detail: ' ',
                  });
                  this.route.navigate(['../CreateFarm']);

                },
                  error : (err)=>{
              console.log(err)
            }
          })
      },
      error: (err) => {
        this.message.add({
          severity: 'error',
          summary: 'Datos incorrectos',
          detail: 'Intente nuevamente',
        });
      },
    });
  }
}
