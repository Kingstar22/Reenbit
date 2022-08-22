import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IReplyMessage} from "../models/dialogue";

@Injectable({
  providedIn: 'root'
})
export class ReplayMessageService {

  constructor(private http: HttpClient) { }

  getMessageReply(){
    return this.http.get<IReplyMessage>('https://api.chucknorris.io/jokes/random')
  }
}
