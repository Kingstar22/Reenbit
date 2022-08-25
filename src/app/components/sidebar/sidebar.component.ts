import {Component, DoCheck, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements DoCheck {

  constructor() { }

  @Output() dialogueClick: EventEmitter<any> = new EventEmitter();
  searchName!: string;
  activeState!: number

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
    {name: "Brain", data:"Mar 18,2017", prevMessage: "You are the worst!" , read: true, id: 3,
      messages: [
        {text:"You are the worst!", dataMessage: '4/22/17, 4:10 AM', isMyMessage: false},
        {text:"Hello", dataMessage: '4/22/17, 4:10 AM', isMyMessage: true},
      ],
    },
  ]

  ngDoCheck() {
    this.sortDialogues();
    this.addHistorySideBar();
  }

  onClick(dialogue: any): void {
    this.activeState = dialogue.id;
    dialogue.read = true;
    this.dialogueClick.emit(dialogue);
  }

  get filteredChats() {
    return this.dialogues.filter((dialogue) => {
      return ( dialogue.name.toLowerCase().includes(this.searchName.toLowerCase()));
    });
  }

   sortDialogues(): any {
    return  this.dialogues.sort((a:any, b:any) => a.read - b.read)
  }

  addHistorySideBar(): void {
     this.dialogues.forEach((dialogue => {
       const value = sessionStorage.getItem(`dialogue-${dialogue.id}`);
         if (value) {
           const history = JSON.parse(atob(value));
           const lengthArr = history.messages.length;
           dialogue.prevMessage = history.messages[lengthArr - 1].text;
           dialogue.data = history.messages[lengthArr - 1].dataMessage;
         }
     }))
  }
}
