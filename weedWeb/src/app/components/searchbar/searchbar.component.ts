import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  favoriteIcon: boolean = true;
  favoriteProducts: string[] = ["Maleton"];
  newFavoriteProduct: string = '';
  constructor() {}
  showFavoriteModal: boolean = false;

  openFavoriteModal() {
    this.showFavoriteModal = true;
    this.favoriteIcon = !this.favoriteIcon;
  }

  closeFavoriteModal() {
    this.showFavoriteModal = false;
  }
  addFavoriteProduct(product: string) {
    this.favoriteProducts.push(product);
  }

  ngOnInit(): void {
  }

}
