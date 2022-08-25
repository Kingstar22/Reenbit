import {Component, Input} from '@angular/core';
import {IDialogue} from "../../models/dialogue";
import {FormControl} from "@angular/forms";
import {ChatsService} from "../../services/chats.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input() dialogue!: IDialogue;
  textControl = new FormControl('');
  nowData!: number;
  constructor(private messageService: ChatsService) { }

  sendMessage(): void {
    const message = this.textControl.value;
    if (!message.trim()) {
      return;
    }
    this.nowData = Date.now();
    this.dialogue.prevMessage = message;
    this.dialogue.data = this.nowData;
    this.dialogue.read = true;
    this.dialogue.messages.push({
      text: message,
      dataMessage: this.nowData,
      isMyMessage: true,
    });
    this.onMessageReply();
    this.textControl.setValue('');
  }

  onMessageReply(): void {
    this.messageService.getMessageReply().subscribe((message) => {
      setTimeout(() => {
        this.dialogue.messages.push({
          text: message.value,
          dataMessage: this.nowData,
          isMyMessage: false,
        });
        this.dialogue.read = false;
        sessionStorage.setItem( `dialogue-${this.dialogue.id}`, btoa(JSON.stringify(this.dialogue)));
      },5000);
    })
  }
}

