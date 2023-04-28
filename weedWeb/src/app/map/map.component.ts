import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { Parcels } from './productservice';
import { parcela } from '../model/interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  products: parcela[] = [];
  selectedParcelas: parcela[] = [];

  constructor(private productService: Parcels) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
  }

  ngAfterViewInit(): void {

  }
}
