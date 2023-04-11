import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { companyRegister } from '../model/interfaces';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],
})
export class RegisterCompanyComponent implements OnInit {
  public companyRegister: companyRegister = {
    email: '',
    password: '',
    name: '',
    NIT: undefined,
    phone_number: undefined,
  };
  constructor(
    private route: Router,
    private servicesService: ServicesService,
    private message: MessageService
  ) {}

  ngOnInit(): void {}

  register() {
    console.log(this.companyRegister);

    this.servicesService.companyRegister(this.companyRegister).subscribe({
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
}
