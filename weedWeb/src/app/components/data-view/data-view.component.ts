import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { producto } from 'src/app/model/interfaces';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Dialog } from 'primeng/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  @ViewChild('cartModal') cartModal: Dialog | undefined;
  carrito: producto[] = [];
  displayCart: boolean = false;


  constructor(
    private servicesService: ServicesService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private Http: HttpClient
  ) { }

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
    this.servicesService.getAllProduct().subscribe({
      next: (data) => {
        this.products = data;

      }, error: (error) => {
        console.log(error)
      }
    })
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

  addToCart(producto: producto): void {
    this.carrito.push(producto);
    console.log('Producto agregado al carrito:', producto);
  }

  openCartModal(): void {
    this.displayCart = true;
  }

  closeCartModal(): void {
    this.displayCart = false;
  }

  comprar(): void {
    // Construye la información de la compra
    const purchaseData = {
      dateOfPurchase: new Date().toISOString(), // Fecha y hora actual (puedes ajustar esto según tus necesidades)
      items: this.carrito.map(item => ({
        productId: item.id,
        quantity: 1, // Puedes ajustar la cantidad según tus necesidades
        priceAtPurchase: item.price
      }))
    };
  
    // Llama al servicio para crear la compra
    this.servicesService.createPurchase(purchaseData).subscribe(
      (response) => {
        // Limpia el carrito después de la compra
        this.carrito = [];
  
        // Muestra un mensaje de compra exitosa
        this.messageService.add({ severity: 'success', summary: 'Compra Exitosa', detail: 'Los artículos han sido comprados.' });
  
        // Cierra el modal después de la compra
        this.displayCart = false;
      },
      (error) => {
        console.error('Error al realizar la compra:', error);
        // Muestra un mensaje de error si la compra no se pudo realizar
        this.messageService.add({ severity: 'error', summary: 'Error en la compra', detail: 'No se pudo realizar la compra.' });
      }
    );
  }
  


  eliminarDelCarrito(producto: producto): void {
    const index = this.carrito.indexOf(producto);
    if (index !== -1) {
      this.carrito.splice(index, 1);

      // Muestra un mensaje de eliminación exitosa
      this.messageService.add({
        severity: 'success',
        summary: 'Artículo Eliminado',
        detail: 'El artículo ha sido eliminado del carrito.',
      });
    }
  }
}