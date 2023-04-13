import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  companyRegister,
  userLogin,
  userRegister,
  farmCreate,
  parcelaCreate,
} from '../model/interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url: string = 'http://127.0.0.1:8000/';
  constructor(private Http: HttpClient) {}

  login(data: userLogin): Observable<any> {
    return this.Http.post(this.url + 'users/api/token/', data);
  }

  userRegister(data: userRegister) {
    return this.Http.post(this.url + 'users/person/create/', data);
  }

  companyRegister(data: companyRegister) {
    return this.Http.post(this.url + 'users/company/create/ ', data);
  }

  createFarm(data: farmCreate) {
    return this.Http.post(this.url + 'farms/create-farm/', data);
  }

  createParcela(data: parcelaCreate) {
    return this.Http.post(this.url + 'farms/create-parcel/', data);
  }
}
