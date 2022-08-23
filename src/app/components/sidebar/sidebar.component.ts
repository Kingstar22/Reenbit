import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IDialogue, IMessage} from "../../models/dialogue";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor() { }
  @Output() dialogueClick: EventEmitter<any> = new EventEmitter();
  searchName!: string;
  dialogues = [
    {name: "Alice Freeman", data:"Jun 12,2017", prevMessage: "You are the worst!" , read: false, id: 1,
     messages: [
       {text:"You are the worst!", dataMessage: '4/22/17, 4:10 AM', isMyMessage: false},
       {text:"Hello", dataMessage: '4/22/17, 4:10 AM', isMyMessage: true},
     ],
    },
    {name: "Josefina", data:"Feb 18,2017", prevMessage: "You are the worst!" , read: false, id: 2},
    {name: "Brain", data:"Mar 18,2017", prevMessage: "You are the worst!" , read: false, id: 3},
  ]

  get filteredChats() {
    return this.dialogues.filter((dialogue) => {
      return (
        dialogue.name
          .toLowerCase()
          .includes(this.searchName.toLowerCase())
      );
    });
  }

}
