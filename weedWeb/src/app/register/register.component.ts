import { MessageService } from 'primeng/api';
import { ServicesService } from './../services/services.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { userRegister } from '../model/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  forma!:FormGroup

  public userRegister: userRegister = {
    name: '',
    last_name: '',
    email: '',
    national_id: undefined,
    phone_number: undefined,
    password: ''
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
    private message: MessageService,
    private fb:FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  get validacionNombre(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  get validacionApellido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }

  get validacionEmail(){
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched;
  }

  get validacionTelefono(){
    return this.forma.get('telefono')?.invalid && this.forma.get('telefono')?.touched;
  }

  get validacionCedula(){
    return this.forma.get('cedula')?.invalid && this.forma.get('cedula')?.touched;
  }

  get validacionPassword(){
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }

  showPassword2 = false;

  togglePasswordVisibility(): void {
    this.showPassword2 = !this.showPassword2;
    this.cdr.detectChanges();
  }

  crearFormulario(){
    this.forma = this.fb.group(
      {
        nombre:['',[Validators.required,]],
        apellido:['',Validators.required],
        email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        cedula:['',[Validators.required, Validators.minLength(8)]],
        telefono:['',[Validators.required,]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    )
  }

  register() {
    if (this.forma.invalid) {
      this.message.add({
        severity: 'error',
        summary: 'Pon bien los datos para el envío del formulario',
        detail: ' ',
      });
      return;
    }

    this.userRegister = {
      name: this.forma.get('nombre')?.value,
      last_name: this.forma.get('apellido')?.value,
      email: this.forma.get('email')?.value,
      national_id: this.forma.get('cedula')?.value,
      phone_number: this.forma.get('telefono')?.value,
      password: this.forma.get('password')?.value,
    };

    console.log(this.userRegister); // Verifica que los datos se asignen correctamente al objeto userRegister

    this.servicesService.userRegister(this.userRegister).subscribe({
      next: (data) => {
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
