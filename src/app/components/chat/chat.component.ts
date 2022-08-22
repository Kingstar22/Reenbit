import {Component, ElementRef, Input, OnInit} from '@angular/core';
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
  textControl = new FormControl('');
  nowData!: number;
  // endOfChat!: ElementRef;
  constructor(private messageService: ReplayMessageService) { }

  ngOnInit(): void {
    const value = sessionStorage.getItem('dialogue');
    console.log(value);
  }

  sendMessage(): void {
    const message = this.textControl.value;
    console.log(message);
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

  // scrollToBottom() {
  //   setTimeout(() => {
  //     if (this.endOfChat) {
  //       this.endOfChat.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 100);
  // }
}

