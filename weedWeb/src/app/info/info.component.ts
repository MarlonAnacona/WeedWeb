import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  checked: boolean = false;
  constructor(
    private messagerService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {}
}
