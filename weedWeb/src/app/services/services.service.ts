import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  companyRegister,
  userLogin,
  userRegister,
  farmCreate,
  parcelaCreate,
  parcelaEdit
} from '../model/interfaces';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  urlCRUD: string = 'https://weedweb-crud.onrender.com/';
  url: string = 'http://localhost:4000/';
  constructor(private Http: HttpClient) {}

  login(data: userLogin): Observable<any> {
    return this.Http.post(this.urlCRUD + 'users/api/SignIn', data);
  }

  userRegister(data: userRegister) {
    return this.Http.post(this.urlCRUD + 'users/api/person', data);
  }

  companyRegister(data: companyRegister) {
    return this.Http.post(this.urlCRUD + 'users/api/company ', data);
  }

  getUser(id:any ): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+ localStorage.getItem('token'));
    return this.Http.get(this.urlCRUD + 'users/api/'+ id,{headers});
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

  getFarm(token:any) :Observable<any>{
      const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));
      return this.Http.get(this.url+'farms/get-farm/',{headers});
  }

  getParcel(id:number) :Observable<any>{

      const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));
      return this.Http.get(this.url+'farms/get-parcel/?farm_id='+id,{headers});
  }

  tokenRefresh(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));
   const token={
   token: localStorage.getItem('tokenRefresh')
   }
    return this.Http.post(this.urlCRUD+'users/api/tokenRefresh', token ,{headers})
  }

  refresacarToken(){
    this.tokenRefresh().subscribe({ next: (response)=>{
      localStorage.setItem('token',response.tokenSessionAccess)
      localStorage.setItem('tokenRefresh',response.tokenSessionRefresh)
    }
  })
  }

  logout(): Observable<any>{
    const token={
      token: localStorage.getItem('tokenRefresh')
    }
    return this.Http.post(this.urlCRUD+'users/api/logout', token)
  }

  createParcel(body:parcelaCreate){
    return this.Http.post(this.url+'farms/create-parcel/',body)
  }

  findAllSeeds(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));

    return this.Http.get(this.url+'seeds/get-seed/',{headers})
  }

  getWheaterApi(latitude:number, longitude:number): Observable<any>{
    return this.Http.get('https://api.open-meteo.com/v1/forecast?longitude='+longitude+'&latitude='+latitude+'&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain&timezone=auto')
  }

  editParcel(body:parcelaEdit,id:number){
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'));
    return this.Http.put(this.url+'farms/update-parcel/'+id+'/',body,{headers})
  }

  getWheaterApiOneDay(latitude:number, longitude:number,day:number): Observable<any>{
    return this.Http.get('https://api.open-meteo.com/v1/forecast?longitude='+longitude+'&latitude='+latitude+'&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain&forecast_days='+day+'&timezone=auto')
  }

}
