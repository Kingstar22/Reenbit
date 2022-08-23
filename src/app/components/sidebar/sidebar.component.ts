import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IDialogue, IMessage, IUser} from "../../models/dialogue";
import {ReplayMessageService} from "../../services/replay-message.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements  OnInit {

  constructor(private messageService: ReplayMessageService) { }

  ngOnInit(): void {

    }
  @Output() dialogueClick: EventEmitter<IUser> = new EventEmitter();
  searchName!: string;
  dialogue!: IDialogue
  id!: number
  onClick(dialogue: any, id: number) {
    this.dialogue = dialogue;
    this.id = id;
    this.dialogueClick.emit({dialogue, id});
    this.addHistoryChat();
  }

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

  addHistoryChat(): void {
    this.messageService.getMessages(this.dialogue, this.id);
  }

  //  addHistoryChat(): void {
  //    const value = sessionStorage.getItem('dialogue');
  //    if (value) {
  //      const history = JSON.parse(atob(value));
  //      const lengthArr = history.messages.length;
  //      this.dialogues.forEach(dialogue => {
  //        if (dialogue.name === "Alice Freeman") {
  //          dialogue.prevMessage = history.messages[lengthArr - 1].text;
  //          dialogue.data = history.messages[lengthArr - 1].dataMessage;
  //        }
  //      })
  //    }
  // }

}
