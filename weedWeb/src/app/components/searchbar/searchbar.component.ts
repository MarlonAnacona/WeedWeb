import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  favoriteIcon = true;
  isFavoriteModalOpen: boolean = false;
  
  constructor() { }

  openFavoriteModal(){
    this.favoriteIcon = !this.favoriteIcon;
  }
  ngOnInit(): void {
  }

}
