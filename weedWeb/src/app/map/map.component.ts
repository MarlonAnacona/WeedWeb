import { farmCreate } from './../model/interfaces';
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
  selected_farm: any;
  produt_parcel: any=[];
  selectedParcelas: parcela[] = [];
  token = localStorage.getItem('token')
  public visibleA: Boolean = false;
  public visibleParcel: Boolean = false;
  public visibleCreateFarm: Boolean = false;
  apiLoaded!: Observable<boolean>;
  nombreGranja: string = '';
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

  farmId: number = 0;
  seedId: number = 0;
  width: number = 0;
  length: number = 0;
  cropModality: string = "";
  seedOptions: any[] = [];
  seedName: string = "";
  showProductId: number = -1;
  editVisibleParcel:boolean=false;
  specie_nameInput:string=""
  widthInput:string=""
  lengthInput:string=""
  crop_modalityInput:string=""

  parcelaCreate: any;
  parcelaEdit: any;
  idSeedSet: number = -1;
  constructor(private services: ServicesService,
    private messagerService: MessageService,
    private confirmationService: ConfirmationService,
    private http: HttpClient,
    private geocoder: MapGeocoder
  ) { }

  ngOnInit() {
    this.services.refresacarToken();
    this.services.findAllSeeds().subscribe({
      next: (response) => {
        console.log(response)
        this.seedOptions = response;
      },
      error: (err) => {
        console.log(err)
      }
    })
    const inputElement = document.getElementById(
      'inputPlaces'
    ) as HTMLInputElement;
    if (inputElement) {
      this.autocomplete = new google.maps.places.Autocomplete(inputElement, {
        types: ['geocode'],
      });
    }
    if (this.token) {

      this.services.getFarm(this.token).subscribe({
        next: (data) => {
          this.product_farm = data;
        },
        error: (err) => {
          console.log(err)
        }

      })
    }

    this.services.getParcel(this.product_farm.id).subscribe({
      next: (data) => {
        this.produt_parcel = data
      }, error: (err) => {
        console.log(err)
      }
    })

  }

  selectedOption: any;


  onSeedNameChange() {
    this.selectedOption = this.seedOptions.find(option => option.species_name === this.seedName);
    this.idSeedSet = this.selectedOption.id
  }

  showParcelEdit(id:any,showparcel:any){
    this.farmId = id
    this.specie_nameInput=showparcel.species_name
    this.widthInput=showparcel.width
    this.lengthInput=showparcel.length

    this.editVisibleParcel=true

  }

  editParcel(data:any){

    this.services.editParcel(data,this.farmId).subscribe({
      next: (response)=>{
        this.messagerService.add({
          severity: 'success',
          summary: 'Movimiento exitoso',
          detail: 'Has logrado editar tu parcela ',
        });
      },
      error: (err)=>{
        this.messagerService.add({
          severity: 'error',
          summary: 'Hubo un error ',
          detail: 'No se ha podido editar tu parcela ',
        });
      }
    })

  }
  ngAfterViewInit(): void {

  }

  showModalFarm() {
    this.visibleA = true;

  }

  showParcel(id: number, nombre: string) {
    this.farmId = id
    this.nombreGranja = nombre
    this.visibleParcel = true;
  }
  parcel(id: number) {
    this.services.getParcel(id).subscribe({
      next: (data) => {
        this.produt_parcel = data


      }, error: (err) => {
        console.log(err)
      }
    })
  }

  showCreatParcel(id: number) {
    this.farmId = id
    this.visibleCreateFarm = true;
  }

  pointMap() {
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


  pointMark(lat: number, lon: number) {

    const location = { lat: lat, lng: lon }

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


  createParcela(data: any) {

    this.services.createParcela(data).subscribe({
      next: (response) => {
        this.messagerService.add({
          severity: 'success',
          summary: 'Movimiento exitoso',
          detail: 'Has logrado crear tu parcela ',
        });

      },
      error: (err) => {
        this.messagerService.add({
          severity: 'error',
          summary: 'Hubo un error ',
          detail: 'No se ha logrado crear tu parcela ',
        });
      },
    });
  }

  onSubmit() {

    const data = {
      farm_id: this.farmId,
      seed_id: this.idSeedSet,
      width: this.width,
      length: this.length,
      crop_modality: this.cropModality
    };

    this.createParcela(data)
  }

  onSubmit2() {

    const data = {
      farm_id: this.farmId,
      seed_id: this.idSeedSet,
      width: this.widthInput,
      length: this.lengthInput,
      crop_modality: this.cropModality
    };

    this.editParcel(data)
  }

  getTranslatedCropModality(cropModality: string): string {
    if (cropModality === 'Outdoor') {
      return 'Exterior';
    } else if (cropModality === 'Indoor') {
      return 'Interior';
    } else {
      return 'Desconocido'; // Maneja cualquier otro valor que pueda estar presente
    }
  }
}
