import { Component, OnInit, AfterViewInit } from '@angular/core';
import { farm, parcela } from '../model/interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  product_farm: farm[] = [{id: "1",
  farm_name: "Casa blanca"}];
  produt_parcel: parcela[]=[{id: "1",
  width: 5, length: 2, crop_modality: "Exterior",create_date: "8 de mayo" }];
  selectedParcelas: parcela[] = [];
  public visibleA: Boolean = false;

  constructor() {}

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }

  showModalFarm() {
    this.visibleA = true;
    
  }
}
