
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'menu-bar-user',
  templateUrl: './menubaruser.component.html',
  styleUrls: ['./menubaruser.component.css'],
})

export class MenubaruserComponent implements OnInit {


  userName: string|null="";

  constructor(
    private route: Router,
    private service: ServicesService,
    private message: MessageService
  ) {
    if(localStorage.getItem('userName')){
      this.userName = localStorage.getItem('userName');
    }

  }

  ngOnInit(): void {

  }

  logout(){
    this.service.logout().subscribe({
      next:(res) => {
        this.message.add({
          severity: 'success',
          summary: 'Sesion cerrada de forma exitosa',
          detail: ' ',
        });
        this.route.navigate(['../Login']);
        localStorage.removeItem('token')
        localStorage.removeItem('tokenRefresh')
        },
        error:(err)=>{
          this.message.add({
            severity: 'error',
            summary: 'Error al realizar el logout',
            detail: JSON.stringify(err)
          });
        }

      }
    )
  }
}
