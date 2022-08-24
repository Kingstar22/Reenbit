import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {IDialogue, IMessage} from "../../models/dialogue";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements  OnInit {

  constructor() { }

  ngOnInit(): void {

    }

  @Output() dialogueClick: EventEmitter<any> = new EventEmitter();
  searchName!: string;
  activeState!: number
  onClick(dialogue: any) {
    this.activeState = dialogue.id;
    dialogue.read = true;
    this.dialogueClick.emit(dialogue);
    this.test()
  }

  dialogues = [
    {name: "Alice Freeman", data:"Jun 12,2017", prevMessage: "You are the worst!" , read: true, id: 1,
     messages: [
       {text:"You are the worst!", dataMessage: '4/22/17, 4:10 AM', isMyMessage: false},
       {text:"Hello", dataMessage: '4/22/17, 4:10 AM', isMyMessage: true},
     ],
    },
    {name: "Josefina", data:"Feb 18,2017", prevMessage: "You are the worst!" , read: true, id: 2,
      messages: [
        {text:"You are the worst!", dataMessage: '4/22/17, 4:10 AM', isMyMessage: false},
        {text:"Hello", dataMessage: '4/22/17, 4:10 AM', isMyMessage: true},
      ],
    },
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

  test() {
     return  this.dialogues.sort( (a:any, b:any) => a.read - b.read).map((d: any) => {
        console.log(d)

     });

  }
}
