import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-bar-user',
  templateUrl: './menubaruser.component.html',
  styleUrls: ['./menubaruser.component.css'],
})

export class MenubaruserComponent implements OnInit {

  userName: string|null="";

  constructor() {
    if(localStorage.getItem('userName')){
      this.userName = localStorage.getItem('userName');
    }

  }

  ngOnInit(): void {

  }
}
