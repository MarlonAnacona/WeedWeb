import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MessageService, ConfirmationService } from 'primeng/api';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-map-google',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
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
  constructor(
    private messagerService: MessageService,
    private confirmationService: ConfirmationService,
    private http: HttpClient,
    private geocoder: MapGeocoder
  ) {}

  ngOnInit(): void {
    const inputElement = document.getElementById(
      'inputPlaces'
    ) as HTMLInputElement;
    if (inputElement) {
      this.autocomplete = new google.maps.places.Autocomplete(inputElement, {
        types: ['geocode'],
      });
    }
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
        // results.forEach((element) => {
        //   console.log(element.geometry);
        // });
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
}
