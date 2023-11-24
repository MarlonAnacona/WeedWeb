import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent implements OnInit {
  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  constructor() { }

  ngOnInit(): void {
  }

}
