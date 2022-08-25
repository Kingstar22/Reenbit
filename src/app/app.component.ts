import {Component} from '@angular/core';
import {IDialogue} from "./models/dialogue";
import {ChatsService} from "./services/chats.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private messageService: ChatsService) { }

  dialogue!: IDialogue;

  onDialogueSelected(dialogue: IDialogue): void {
    this.dialogue = dialogue;
    this.addHistoryChat();
  }

  addHistoryChat(): void {
    this.messageService.getMessages(this.dialogue);
  }
}
