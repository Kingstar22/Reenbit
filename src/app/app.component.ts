import {Component, OnInit} from '@angular/core';
import {IDialogue, IUser} from "./models/dialogue";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  dialogue!: IDialogue;
  id!: number;


  onDialogueSelected(dialogue: IUser){
    this.dialogue = dialogue.dialogue;
    this.id = dialogue.id;
  }
}
