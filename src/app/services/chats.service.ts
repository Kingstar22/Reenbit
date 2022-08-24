import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDialogue, IReplyMessage} from "../models/dialogue";

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private http: HttpClient) { }

  getMessageReply() {
    return this.http.get<IReplyMessage>('https://api.chucknorris.io/jokes/random')
  }

  getMessages(dialogue: IDialogue) {
    const value = sessionStorage.getItem(`dialogue-${dialogue.id}`);
    if (value) {
      const history = JSON.parse(atob(value));
      const lengthArr = history.messages.length;
      for(let i = dialogue.messages.length; i< lengthArr; i++) {
          dialogue.messages.push({
          text: history.messages[i].text,
          dataMessage:history.messages[i].dataMessage,
          isMyMessage: history.messages[i].isMyMessage,
        });
      }
        dialogue.prevMessage = history.messages[lengthArr - 1].text;
        dialogue.data = history.messages[lengthArr - 1].dataMessage;

    }
  }
}
