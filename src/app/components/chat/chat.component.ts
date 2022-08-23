import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {IDialogue} from "../../models/dialogue";
import {FormControl} from "@angular/forms";
import {ReplayMessageService} from "../../services/replay-message.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() dialogue!: IDialogue;
  @Input() id!: number;
  textControl = new FormControl('');
  nowData!: number;
  // endOfChat!: ElementRef;
  constructor(private messageService: ReplayMessageService) { }

  ngOnInit(): void {
    this.addHistoryChat();

  }
  sendMessage(): void {
    const message = this.textControl.value;
    if (!message.trim()) {
      return;
    }
    this.nowData = Date.now();
    this.dialogue.prevMessage = message;
    this.dialogue.data = this.nowData;
    this.dialogue.messages.push({
      text: message,
      dataMessage: this.nowData,
      isMyMessage: true,
    });
    console.log(this.dialogue.messages);
    this.onMessageReply();
    this.textControl.setValue('');
    sessionStorage.setItem('dialogue', JSON.stringify(this.dialogue));
  }

  onMessageReply(): void {
    this.messageService.getMessageReply().subscribe((message) => {
      // this.scrollToBottom();
      setTimeout(() => {
        this.dialogue.messages.push({
          text: message.value,
          dataMessage: this.nowData,
          isMyMessage: false,
        })
      },5000);
    })
  }

  addHistoryChat(): void {
    this.messageService.getMessages(this.dialogue, this.id);
  }


  // addHistoryChat(): void {
  //   const value = sessionStorage.getItem('dialogue');
  //   if (value) {
  //     const history = JSON.parse(atob(value));
  //     const lengthArr = history.messages.length;
  //     for(let i = this.dialogue.messages.length; i< lengthArr; i++) {
  //       this.dialogue.messages.push({
  //         text: history.messages[i].text,
  //         dataMessage:history.messages[i].dataMessage,
  //         isMyMessage: history.messages[i].isMyMessage,
  //       });
  //     }
  //   }
  // }

  // scrollToBottom() {
  //   setTimeout(() => {
  //     if (this.endOfChat) {
  //       this.endOfChat.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 100);
  // }
}

