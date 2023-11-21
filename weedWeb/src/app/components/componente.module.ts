import { GoogleMapsModule } from '@angular/google-maps';
import { ComponentsComponent } from './menubar/components.component';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
<<<<<<< HEAD
=======
import { ProductService } from './data-view/productservice';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
>>>>>>> ecommerce-pepa

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
import { BarrabajaComponent } from './barrabaja/barrabaja.component';


import { SearchbarComponent } from './searchbar/searchbar.component';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { FavoriteWindowComponent } from './favorite-window/favorite-window.component';

import { DataViewComponent } from './data-view/data-view.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    FooterComponent,
    MenubaruserComponent,
    MapComponent,
<<<<<<< HEAD
    BarrabajaComponent,

    SearchbarComponent,
    CategoryDropdownComponent,
    FavoriteWindowComponent,
=======
    SearchbarComponent,
    CategoryDropdownComponent,
    FavoriteWindowComponent,
    DataViewComponent,
>>>>>>> ecommerce-pepa
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbAlertModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
<<<<<<< HEAD
=======
    DataViewModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    RatingModule,
    RippleModule,
>>>>>>> ecommerce-pepa
  ],
  providers: [ProductService],
  bootstrap: [],
  exports: [
    ComponentsComponent,
    FooterComponent,
    MenubaruserComponent,
    MapComponent,
<<<<<<< HEAD
    BarrabajaComponent,

    SearchbarComponent,
    CategoryDropdownComponent,FavoriteWindowComponent
=======
    SearchbarComponent,
    CategoryDropdownComponent,
    FavoriteWindowComponent,
    DataViewComponent,
>>>>>>> ecommerce-pepa
  ],
})
export class componentModule {}
