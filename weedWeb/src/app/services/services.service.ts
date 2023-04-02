import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {userLogin} from '../model/interfaces'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

   url:string="http://127.0.0.1:8000/users/";
  constructor(private Http:HttpClient) {
   }

   login(data:userLogin):Observable<any>{
    return this.Http.post(this.url+'api/token/',data)

   }
}
