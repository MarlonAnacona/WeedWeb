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
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {}

  register() {
    console.log(this.companyRegister);

    this.servicesService.companyRegister(this.companyRegister).subscribe({
      next: (data) => {
        this.route.navigate(['../CreateFarm']);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.route.navigate(['../CreateFarm']);
  }
}
