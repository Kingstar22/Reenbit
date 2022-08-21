import {Component, Input, OnInit} from '@angular/core';
import {IDialogue} from "../../models/dialogue";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() dialogue!: IDialogue;
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public sendMessage(event: any): void {
    let value = event.target;
    console.log(value);
    this.message = '';
  }
}
