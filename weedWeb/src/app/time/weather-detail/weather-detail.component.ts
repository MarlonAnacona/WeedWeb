import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  @Input() detalles: any

  constructor() { }

  resolverImagen() {
    return `assets/image/${this.detalles.weather}.png`;
  }

  ngOnInit(): void {
  }

}