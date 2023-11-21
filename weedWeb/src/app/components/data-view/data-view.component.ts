import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DataView } from 'primeng/dataview';


@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
})
export class DataViewComponent {
  products: Product[] = [];

  sortOptions: SelectItem[] = [];

  sortOrder: number = 1;

  sortField: string = 'price';

  sortKey: any;

  dv: DataView | undefined;

  constructor(
    private productService: ProductService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().then((data) => (this.products = data));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event: { value: string }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
