import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.route.navigate(['../Dashboard']);
  }

}
