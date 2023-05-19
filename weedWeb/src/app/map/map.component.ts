import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { farm, parcela } from '../model/interfaces';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  product_farm: any;
  selected_farm:any;
  produt_parcel: any;
  selectedParcelas: parcela[] = [];
  token= localStorage.getItem('token')
  public visibleA: Boolean = false;
  apiLoaded!: Observable<boolean>;
  autocomplete!: google.maps.places.Autocomplete;
  checked: boolean = false;
  address: string = '';
  map: any;
  position: any;
  display: any;
  busquedad: string = '';
  mensaje: string = '';
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };

  constructor(private services: ServicesService,
    private messagerService: MessageService,
    private confirmationService: ConfirmationService,
    private http: HttpClient,
    private geocoder: MapGeocoder
  ) {}

  ngOnInit() {
    const inputElement = document.getElementById(
      'inputPlaces'
    ) as HTMLInputElement;
    if (inputElement) {
      this.autocomplete = new google.maps.places.Autocomplete(inputElement, {
        types: ['geocode'],
      });
    }
    if(this.token){

    this.services.getFarm(this.token).subscribe({
      next:(data)=>{
        console.log(data)
        this.product_farm=data;

      },
      error:(err)=>{
      console.log(err)
      }

    })
  }

//   const refresh=localStorage.getItem('tokenRefresh')
//   if(refresh){


//   this.services.tokenRefresh(refresh).subscribe({
//     next:(response) =>{
//       localStorage.setItem('token',response.access)
//     },
//     error:(err)=>{

//     }
//   })
// }
  }

  ngAfterViewInit(): void {

  }

  showModalFarm() {
    this.visibleA = true;

  }

   pointMap(){


   }


  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  geocodeAddres() {
    this.geocoder
      .geocode({
        address: this.address,
      })
      .subscribe(({ results }) => {

        if (results) {
          console.log(results);

          const location = results[0].geometry.location;
          console.log(
            `Latitud: ${location.lat()}, Longitud: ${location.lng()}`
          );
          this.center = {
            lat: location.lat(),
            lng: location.lng(),
          };
          const mapCenter = new google.maps.LatLng(
            this.center.lat,
            this.center.lng
          );
          this.position = {
            lat: location.lat(),
            lng: location.lng(),
          };
          this.zoom = 15;
          new google.maps.Marker({
            position: location,
            map: this.map,
            title: results[0].formatted_address,
          });
        }
      });
  }


  pointMark(lat:number,lon:number)
  {

    const location={lat:lat,lng:lon}

    this.position = {
      lat: Number(lat),
      lng: Number(lon),
    };
    this.zoom = 15;
    new google.maps.Marker({
      position: location,
      map: this.map,
    });
  }
}
