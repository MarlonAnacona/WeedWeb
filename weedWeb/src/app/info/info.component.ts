import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  constructor(
    private messagerService: MessageService,
    private confirmationService: ConfirmationService,
    private http: HttpClient,
    private geocoder: MapGeocoder
  ) {}

  ngOnInit(): void {}
}
