import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { farmCreate, parcelaCreate } from '../model/interfaces';
import { ServicesService } from './../services/services.service';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.css'],
})
export class CreateFarmComponent implements OnInit {
  autocomplete!: google.maps.places.Autocomplete;
  farmAddress: string = '';
  position: any;
  zoom = 4;

  public farmCreate: farmCreate = {
    farm_name: '',
    latitude: undefined,
    longitude: undefined,
    token: this.servicesService.obtenerToken()
  };

  public farm_name: any;
  public latitude: any;
  public longitude: any;


  public width: any;
  public length: any;
  public crop_modality: any;

  public visibleA: Boolean = false;
  public visibleB: Boolean = false;
  public user: any;
   options: any ;

  constructor(
    private route: Router,
    private servicesService: ServicesService,
    private message: MessageService,
    private geocoder: MapGeocoder
  ) {}

  ngOnInit(): void {
    this.autocompletado()
    this.servicesService.refresacarToken();
}

autocompletado(){
  const inputElement = document.getElementById(
    'inputPlaces'
  ) as HTMLInputElement;
  if (inputElement) {
    this.autocomplete = new google.maps.places.Autocomplete(inputElement, {
      types: ['geocode'],
    });
  }
}

   geocodeAddres() {
    this.geocoder
      .geocode({
        address: this.farmAddress,
      })
      .subscribe(({ results }) => {

        if (results) {
          if(results[0] !=null){
          const location = results[0].geometry.location;
          console.log(
            `Latitud: ${location.lat()}, Longitud: ${location.lng()}`
          );
          this.farmCreate={
            ...this.farmCreate,
            latitude: location.lat(),
             longitude:location.lng()
           }
           this.createFarm();
        }else{
          this.message.add({
            severity: 'error',
            summary: 'Hubo un error ',
            detail: 'No se ha logrado crear tu granja ',
          });
        }
      }
      });
  }

  createFarm() {

    this.servicesService.createFarm(this.farmCreate).subscribe({
      next: (data) => {
        this.visibleA = false;

        this.message.add({
          severity: 'success',
          summary: 'Movimiento exitoso',
          detail: 'Has logrado crear tu granja ',
        });
      },
      error: (err) => {
        this.message.add({
          severity: 'error',
          summary: 'Hubo un error ',
          detail: 'No se ha logrado crear tu granja ',
        });
      },
    });
  }



  showFarm() {
    this.visibleA = true;
  }

  /*showParcela() {
    this.visibleA = false;
    this.visibleB = true;
  }*/
}
