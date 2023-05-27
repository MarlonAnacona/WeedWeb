import { MessageService } from 'primeng/api';
import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userRegister } from '../model/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public userRegister: userRegister = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    national_id: undefined,
    phone_number: undefined,
    password: '',
  };
  public firstName: any;
  public lastName: any;
  public email: any;
  public nationalId: any;
  public phoneNumber: any;
  public password: any;

  constructor(
    private route: Router,
    private servicesService: ServicesService,
    private message: MessageService
  ) {}

  ngOnInit(): void {}

  register() {
    console.log(this.userRegister);

    this.servicesService.userRegister(this.userRegister).subscribe({
      next: (data) => {
        // this.route.navigate(['../CreateFarm']);
        this.message.add({
          severity: 'success',
          summary: 'Ha sido registrado con éxito ',
          detail: ' ',
        });
        this.route.navigate(['../Login']);
      },
      error: (err) => {
        this.message.add({
          severity: 'error',
          summary: 'No ha sido posible el registro ',
          detail: ' ',
        });
      },
    });
  }

  home() {
    this.route.navigate(['../Home']);
  }
}
