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
import { HttpHeaders } from '@angular/common/http';

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

  getUser(id:any ){
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));

    return this.Http.get(this.url + 'users/person/'+ id+'/',{headers});
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

  obtenerToken() {
    return localStorage.getItem('token');
  }

  decodificarToken(token: string) {
    const payload = token.split('.')[1];
    const payloadDecodificado = atob(payload);
    const objetoToken = JSON.parse(payloadDecodificado);
    return objetoToken;
  }


  obtenerTokenDecodificado() {
    const token = this.obtenerToken();
    if (token != null) {
      const tokenDecodificado = this.decodificarToken(token);
      return tokenDecodificado;
    }
  }

  getFarm(token:any){

      const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
      return this.Http.get(this.url+'/farms/get-farm/',{headers});
  }

  tokenRefresh(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));
   const token={
    refresh: localStorage.getItem('tokenRefresh')
   }
    return this.Http.post(this.url+'users/api/token/refresh/',  token, {headers})
  }

  refresacarToken(){
    this.tokenRefresh().subscribe({ next: (response)=>{

      localStorage.setItem('token',response.access)
    }})
  }

  createParcel(body:parcelaCreate){


    return this.Http.post(this.url+'farms/create-parcel/',body)
  }

  findAllSeeds(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));

    return this.Http.get(this.url+'seeds/get-seed/',{headers})
  }


  getWheaterApi(latitude:number, longitude:number): Observable<any>{
    return this.Http.get('https://api.open-meteo.com/v1/forecast?longitude='+longitude+'&latitude='+latitude+'&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain')
  }
}
