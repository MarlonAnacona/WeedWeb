import { Component, OnInit, AfterViewInit } from '@angular/core';
import { farm, parcela } from '../model/interfaces';
import { ServicesService } from '../services/services.service';

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

  constructor(private services: ServicesService) {}

  ngOnInit() {
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
  }

  ngAfterViewInit(): void {

  }

  showModalFarm() {
    this.visibleA = true;

  }
}
