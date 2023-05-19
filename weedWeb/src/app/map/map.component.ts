import { Component, OnInit, AfterViewInit } from '@angular/core';
import { farm, parcela } from '../model/interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  product_farm: farm[] = [];
  produt_parcel: parcela[]=[];
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
