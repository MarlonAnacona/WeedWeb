

import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  totalMensual!: number;
  tarjeta: any;
  btnAbrirFormulario: any;
  formulario: any;
  numeroTarjeta: any;
  nombreTarjeta: any;
  logoMarca: any;
  firma: any;
  mesExpiracion: any;
  yearExpiracion: any;
  ccv: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.tarjeta = this.el.nativeElement.querySelector('#tarjeta');
    this.btnAbrirFormulario = this.el.nativeElement.querySelector('#btn-abrir-formulario');
    this.formulario = this.el.nativeElement.querySelector('#formulario-tarjeta');
    this.numeroTarjeta = this.el.nativeElement.querySelector('#tarjeta .numero');
    this.nombreTarjeta = this.el.nativeElement.querySelector('#tarjeta .nombre');
    this.logoMarca = this.el.nativeElement.querySelector('#logo-marca');
    this.firma = this.el.nativeElement.querySelector('#tarjeta .firma p');
    this.mesExpiracion = this.el.nativeElement.querySelector('#tarjeta .mes');
    this.yearExpiracion = this.el.nativeElement.querySelector('#tarjeta .year');
    this.ccv = this.el.nativeElement.querySelector('#tarjeta .ccv');
    this.calcularTotalMensual();

    for (let i = 1; i <= 12; i++) {
      // Utiliza toString() para asegurarte de que el valor sea una cadena
      let opcion = document.createElement('option');
      opcion.value = i.toString();
      opcion.innerText = i.toString();
      this.formulario.selectMes.appendChild(opcion);
    }
  
    const yearActual = new Date().getFullYear();
    for (let i = yearActual; i <= yearActual + 8; i++) {
      // Utiliza toString() para asegurarte de que el valor sea una cadena
      let opcion = document.createElement('option');
      opcion.value = i.toString();
      opcion.innerText = i.toString();
      this.formulario.selectYear.appendChild(opcion);
    }
  }

  mostrarFrente() {
    if (this.tarjeta.classList.contains('active')) {
      this.tarjeta.classList.remove('active');
    }
  }

  toggleTarjeta() {
    this.tarjeta.classList.toggle('active');
  }

  toggleFormulario() {
    this.btnAbrirFormulario.classList.toggle('active');
    this.formulario.classList.toggle('active');
  }

  handleNumeroInput(event: any) {
    let valorInput = event.target.value;
    this.formulario.inputNumero.value = valorInput
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .replace(/([0-9]{4})/g, '$1 ')
      .trim();
    this.numeroTarjeta.textContent = valorInput;

    if (valorInput == '') {
      this.numeroTarjeta.textContent = '#### #### #### ####';
      this.logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
      this.logoMarca.innerHTML = '';
      const imagen = document.createElement('img');
      imagen.src = 'img/logos/visa.png';
      this.logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
      this.logoMarca.innerHTML = '';
      const imagen = document.createElement('img');
      imagen.src = 'img/logos/mastercard.png';
      this.logoMarca.appendChild(imagen);
    }

    this.mostrarFrente();
  }

  handleNombreInput(event: any) {
    let valorInput = event.target.value;
    this.formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    this.nombreTarjeta.textContent = valorInput;
    this.firma.textContent = valorInput;

    if (valorInput == '') {
      this.nombreTarjeta.textContent = 'Jhon Doe';
    }

    this.mostrarFrente();
  }

  handleMesSelect(event: any) {
    this.mesExpiracion.textContent = event.target.value;
    this.mostrarFrente();
  }

  handleYearSelect(event: any) {
    this.yearExpiracion.textContent = event.target.value.slice(2);
    this.mostrarFrente();
  }

  handleCCVInput() {
    if (!this.tarjeta.classList.contains('active')) {
      this.tarjeta.classList.toggle('active');
    }

    this.formulario.inputCCV.value = this.formulario.inputCCV.value
      .replace(/\s/g, '')
      .replace(/\D/g, '');

    this.ccv.textContent = this.formulario.inputCCV.value;
  }
  calcularTotalMensual() {
    // Supongamos que cada mensualidad cuesta $100
    const mensualidadIndividual = 100;
  
    // Calcula el total anual con descuento
    this.totalMensual = mensualidadIndividual;
  }
  
  enviarFormulario() {
    
    this.numeroTarjeta.textContent = this.formulario.inputNumero.value;
    this.nombreTarjeta.textContent = this.formulario.inputNombre.value;
    this.mesExpiracion.textContent = this.formulario.selectMes.value;
    this.yearExpiracion.textContent = this.formulario.selectYear.value.slice(2);
    this.ccv.textContent = this.formulario.inputCCV.value;

    // Otras lógicas o llamadas a servicios necesarias

    // Puedes agregar más lógica aquí según tus necesidades
  }
 
}
