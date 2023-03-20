import { componentModule } from './components/componente.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CanActivate } from '@angular/router';
import { MapComponent } from './map/map.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Info',
    component: InfoComponent,
  },
  {
    path: 'Catalogo',
    component: CatalogoComponent,
  },
  {
    path: 'Map',
    component: MapComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InfoComponent,
    CatalogoComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    componentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
