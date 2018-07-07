import {Component} from '@angular/core';
import {WebService} from './web.service';

@Component({
  selector: 'messages',
  template:
      `
    <div *ngFor="let message of messages">
      <mat-card class="card">
        <mat-card-title>By: {{message.owner}}</mat-card-title>
        <mat-card-content>{{message.text}}</mat-card-content>
      </mat-card>
    </div>
  `
})

export class MessagesComponent {

  constructor(private webService: WebService) {}

  messages: any = [];

  ngOnInit() {
    setInterval(() => {
      this.webService.getMessages()
        .subscribe(data => {
          this.messages = data;
        });
    }, 1000);
  }

}
