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
    const map = new Map('map').setView([3.43722, -76.5225], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }
}
