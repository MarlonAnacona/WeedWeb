import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-favorite-window',
  templateUrl: './favorite-window.component.html',
  styleUrls: ['./favorite-window.component.css']
})
export class FavoriteWindowComponent implements OnInit {

  display: boolean = true;

  constructor(private dialogService: DialogService) {}

  closeDialog() {
    this.display = false;
    //this.dialogService.closeAll();
  }

  ngOnInit(): void {
  }

}
