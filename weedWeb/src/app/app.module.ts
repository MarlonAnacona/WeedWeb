import { AuthGuardService } from './courseguard/auth-guard.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DashboardComponent } from './dashboard/dashboard.component';
import { componentModule } from './components/componente.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataViewModule } from 'primeng/dataview';
import { AppComponent } from './app.component';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RatingModule } from 'primeng/rating';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Authservice } from './courseguard/auth.service';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { GoogleMapsModule } from '@angular/google-maps';
import { FreemiumComponent } from './freemium/freemium.component';
import { AnimateModule } from 'primeng/animate';
import { PasswordModule } from "primeng/password";
import { TagModule } from 'primeng/tag';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { PremiumComponent } from './premium/premium.component';
import { PremiumproComponent } from './premiumpro/premiumpro.component';



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
    // canActivate: [AuthGuardService],
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Map',
    component: MapComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Time',
    component: TimeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Freemium',
    component: FreemiumComponent,
    // canActivate: [AuthGuardService],
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
    canActivate: [AuthGuardService],
  },
  {
    path: 'Freemium-premium',
    component: PremiumComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'Freemium-premiumpro',
    component: PremiumproComponent,
    // canActivate: [AuthGuardService],
  }
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
    FreemiumComponent,
    PremiumComponent,
    PremiumproComponent,
  ],
  imports: [
    PasswordModule,
    GoogleMapsModule,
    ButtonModule,
    ToastModule,
    InputSwitchModule,
    BrowserModule,
    MessageModule,
    MessagesModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    componentModule,
    ClipboardModule,
    HttpClientModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule,
    DialogModule,
    AnimateModule,
    DataViewModule,
    RatingModule,
    TagModule,
    DropdownModule,DragDropModule,ButtonModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    AuthGuardService,
    Authservice,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
