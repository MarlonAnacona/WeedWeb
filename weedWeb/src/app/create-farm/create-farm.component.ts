import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { farmCreate, parcelaCreate } from '../model/interfaces';
import { ServicesService } from './../services/services.service';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.css'],
})
export class CreateFarmComponent implements OnInit {
  public farmCreate: farmCreate = {
    farm_name: '',
    latitude: undefined,
    longitude: undefined,
  };

  public farm_name: any;
  public latitude: any;
  public longitude: any;

  public parcelaCreate: parcelaCreate = {
    width: undefined,
    length: undefined,
    crop_modality: '',
  };

  public width: any;
  public length: any;
  public crop_modality: any;

  public visibleA: Boolean = false;
  public visibleB: Boolean = false;

  constructor(
    private route: Router,
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {}

  createFarm() {
    console.log(this.farmCreate);
    this.servicesService.createFarm(this.farmCreate).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigate(['../CreateFarm']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createParcela() {
    console.log(this.parcelaCreate);
    this.servicesService.createParcela(this.parcelaCreate).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigate(['../CreateFarm']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showFarm() {
    this.visibleA = true;
  }

  showParcela() {
    this.visibleA = false;
    this.visibleB = true;
  }
}
