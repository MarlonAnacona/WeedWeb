import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { companyRegister } from '../model/interfaces';
import { ServicesService } from '../services/services.service';
import { Form,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],
})
export class RegisterCompanyComponent implements OnInit {
  forma!: FormGroup
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
    private message: MessageService,
    private fb:FormBuilder
  ) {
    this.iniciarFormulario();
  }

  ngOnInit(): void {}

  get validacionNombreEmpresa(){
    return this.forma.get('nombreEmpresa')?.invalid && this.forma.get('nombreEmpresa')?.touched;
  }

  get validacionEmailEmpresa(){
    return this.forma.get('emailEmpresa')?.invalid && this.forma.get('emailEmpresa')?.touched;
  }

  get validacionTelefonoEmpresa(){
    return this.forma.get('telefonoEmpresa')?.invalid && this.forma.get('telefonoEmpresa')?.touched;
  }

  get validacionNit(){
    return this.forma.get('nit')?.invalid && this.forma.get('nit')?.touched;
  }

  get validacionPasswordEmpresa(){
    return this.forma.get('passwordEmpresa')?.invalid && this.forma.get('passwordEmpresa')?.touched;
  }

  iniciarFormulario(){
    this.forma = this.fb.group(
      {
        nombreEmpresa:['',[Validators.required,]],
        emailEmpresa:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        nit:['',[Validators.required, Validators.minLength(9)]],
        telefonoEmpresa:['',[Validators.required,]],
        passwordEmpresa:['',[Validators.required, Validators.minLength(8)]]
      }
    )
  }

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
  Home(){
    this.route.navigate(['../Home']);
  }
}
