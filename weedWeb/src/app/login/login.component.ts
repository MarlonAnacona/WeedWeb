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
  value3?: string;
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

  /**
   * Login for the user
   * if login is success-> go to the Dashboard
   * else -> error
   */
  login() {
    //

    //Servicio que llama y trae los tokens

    this.serivce.login(this.userlogin).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access);
        localStorage.setItem('tokenRefresh', response.refresh);
        this.tokenObject = jwt_decode(response.access)

          this.serivce.getUser(this.tokenObject.user_id).subscribe({
            next: (data) => {


              localStorage.setItem('userName',data.first_name+' '+ data.last_name)
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
