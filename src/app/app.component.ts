import { Component } from '@angular/core';
import {IDialogue} from "./models/dialogue";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dialogue!: IDialogue;


  onConversationSelected(dialogue: IDialogue){
    this.dialogue = dialogue;
  }
}
