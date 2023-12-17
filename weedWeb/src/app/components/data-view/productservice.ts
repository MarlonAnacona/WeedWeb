// product.service.ts

import { Injectable } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Observable } from 'rxjs';
import { producto } from 'src/app/model/interfaces';

 @Injectable()
export class ProductService {
  constructor(private ecommerceService: ServicesService) {}

  getProducts(){
    return this.ecommerceService.getAllProduct();
  }
}
