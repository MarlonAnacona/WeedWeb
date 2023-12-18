import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { producto } from 'src/app/model/interfaces';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
})
export class DataViewComponent implements OnInit {
  products: producto[] = [];
  sortOptions: SelectItem[] = [];
  sortOrder: number = 1;
  sortField: string = 'price';
  sortKey: any;
  dv: DataView | undefined;
  currentLayout: string = 'list';
  loading: boolean = false;

  constructor(
    private servicesService: ServicesService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.sortOptions = [
      { label: 'Precio de Mayor a Menor', value: '!price' },
      { label: 'Precio de Menor a Mayor', value: 'price' },
    ];

    this.primengConfig.ripple = true;

    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    // this.servicesService
    //   .getAllProduct()
    //   .pipe(finalize(() => (this.loading = false)))
    //   .subscribe(
    //     (data: producto[]) => {
    //       console.log(data);
    //       this.products = data;
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    this.servicesService.getAllProduct().subscribe({next: (data)=>{
         this.products = data;

    }, error: (error)=>{
      console.log(error)
    }})
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

  toggleLayout(): void {
    this.currentLayout = this.currentLayout === 'list' ? 'grid' : 'list';
  }
}
