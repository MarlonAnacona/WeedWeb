import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.css']
})
export class CreateFarmComponent implements OnInit {

  public visibleA: Boolean = false
  public visibleB: Boolean = false

  constructor(

  ) { }

  ngOnInit(): void {
  }

  showDialog(){
    this.visibleA = true;
  }

  showParcela(){
    this.visibleA = false;
    this.visibleB = true;
  }

}
