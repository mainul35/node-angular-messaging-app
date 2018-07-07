import { Component, ViewChild } from '@angular/core';
import {NewMessageComponent} from './new-message.component';
import {MessagesComponent} from './messages.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Message Board</h1>
    <new-message></new-message>
    <!--<new-message (onPosted)="onPosted($event)"></new-message>-->
    <messages></messages>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild(MessagesComponent) messagesComponent: MessagesComponent;
  // onPosted(message){
  //   this.messagesComponent.messages.push(message);
  // }
}
