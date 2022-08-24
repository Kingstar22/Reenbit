import {Component, OnInit} from '@angular/core';
import {IDialogue} from "./models/dialogue";
import {ChatsService} from "./services/chats.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private messageService: ChatsService) { }
  ngOnInit(): void {

  }
  dialogue!: IDialogue;



  onDialogueSelected(dialogue: IDialogue){
    this.dialogue = dialogue;
    this.addHistoryChat();
  }

  addHistoryChat(): void {
    this.messageService.getMessages(this.dialogue);
  }


}
