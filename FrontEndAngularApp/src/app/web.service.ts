import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IMessage} from './Message';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:3000/';

  messages: any = [];
  constructor(private http: HttpClient) {
  }

  getMessages(): Observable<IMessage[]> {
    return this.http.get<IMessage[]>(this.BASE_URL + 'messages');
  }


  // async getMessages() {
  //   let response = await this.http.get(this.BASE_URL + 'messages');
  //   this.messages = response.json();
  // }

  postMessage(message: IMessage): Observable<IMessage> {
    console.log(JSON.stringify(message));
    return this.http.post<IMessage>(this.BASE_URL + 'message', message);
  }
}
