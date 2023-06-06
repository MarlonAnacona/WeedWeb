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
        this.route.navigate(['../CreateFarm']);

         // Decodificar el token utilizando atob()
         this.tokenObject = jwt_decode(response.access)

         localStorage.setItem('userName',this.tokenObject.email)
             this.message.add({
               severity: 'success',
               summary: 'Bienvenido ',
               detail: ' ',
             });


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
