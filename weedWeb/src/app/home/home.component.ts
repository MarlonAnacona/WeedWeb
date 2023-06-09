import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { user } from '../model/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}
}
