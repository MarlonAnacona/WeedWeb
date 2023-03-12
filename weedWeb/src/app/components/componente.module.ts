import { ComponentsComponent } from './menubar/components.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ComponentsComponent, FooterComponent],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [ComponentsComponent, FooterComponent],
})
export class componentModule {}
