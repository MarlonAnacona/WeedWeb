import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Parcela } from '../model/interfaces';
@Injectable()
export class Parcels {
  Granjas: string[] = ['Bamboo Watch', 'Black Watch'];

  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http
      .get<any>('assets/products-small.json')
      .toPromise()
      .then((res) => <Parcela[]>res.data)
      .then((data) => {
        return data;
      });
  }

  generateProduct(): Parcela {
    const product: Parcela = {
      id: this.generateId(),
      farm_name: this.generateName(),
    };

    return product;
  }

  generateId() {
    let text = '';
    let possible = '0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.Granjas[Math.floor(Math.random() * Math.floor(30))];
  }
}
