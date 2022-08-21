import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IDialogue} from "../../models/dialogue";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Output() dialogueClick: EventEmitter<IDialogue> = new EventEmitter();
  dialogues = [
    {name: "Alice Freeman", data:"Jun 12,2017", prevMessage: "You are the worst!" , read: false, id: 1},
    {name: "Josefina", data:"Feb 18,2017", prevMessage: "You are the worst!" , read: false, id: 2},
    {name: "Brain", data:"Mar 18,2017", prevMessage: "You are the worst!" , read: false, id: 3},
  ]

  ngOnInit(): void {
  }

}
