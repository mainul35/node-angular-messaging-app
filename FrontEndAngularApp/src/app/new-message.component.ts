import {Component, Output, EventEmitter} from '@angular/core';
import {WebService} from './web.service';

@Component({
  selector: 'new-message',
  template:
    `
    <mat-card class="card">
      <mat-card-content>
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Your Name" [(ngModel)]="this.message.owner">
        </mat-form-field>
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Your message" [(ngModel)]="this.message.text">
        </mat-form-field>
        <button (click)="post()" mat-flat-button >Post message</button>
      </mat-card-content>
    </mat-card>
  `
})

export class NewMessageComponent {

  message = {
    owner: '',
    text: ''
  };


  // @Output() onPosted = new EventEmitter();

  constructor(private webService: WebService) {}

  post() {
    this.webService.postMessage(this.message).subscribe(() => {
      console.log('Saved successfully.'),
        console.error();
    });
    // this.onPosted.emit(this.message);
  }
}
