import { DashboardComponent } from './dashboard/dashboard.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CanActivate } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';

import { MapComponent } from './map/map.component';
import { WeatherDetailComponent } from './time/weather-detail/weather-detail.component';
import { FormatearFechaPipe } from './time/formatear-fecha.pipe';
import { FechaANombreDiaPipe } from './time/fecha-anombre-dia.pipe';
import { TimeComponent } from './time/time.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { CreateFarmComponent } from './create-farm/create-farm.component';

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
    path: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'Map',
    component: MapComponent,
  },
  {
    path: 'Time',
    component: TimeComponent,
  },
  {
    path: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'RegisterCompany',
    component: RegisterCompanyComponent,
  },
  {
    path: 'CreateFarm',
    component: CreateFarmComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InfoComponent,
    CatalogoComponent,
    DashboardComponent,
    MapComponent,
    TimeComponent,
    WeatherDetailComponent,
    FormatearFechaPipe,
    FechaANombreDiaPipe,
    RegisterComponent,
    RegisterCompanyComponent,
    CreateFarmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    componentModule,
    ClipboardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
