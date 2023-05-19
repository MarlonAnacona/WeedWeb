import { GoogleMapsModule } from '@angular/google-maps';
import { ComponentsComponent } from './menubar/components.component';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenubaruserComponent } from './menubaruser/menubaruser.component';
import { MapComponent } from './map/map.component';
import { point } from 'leaflet';



@NgModule({
  declarations: [
    ComponentsComponent,
    FooterComponent,
    MenubaruserComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ComponentsComponent,
    FooterComponent,
    MenubaruserComponent,
    MapComponent,

  ],
})
export class componentModule {}
