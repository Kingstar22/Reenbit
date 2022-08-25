export interface IDialogue {
  name: string;
  data: number;
  prevMessage: string;
  read: boolean;
  id: number;
  messages: Array<IMessage>;
}

export interface IMessage {
  text:string;
  dataMessage:number;
  isMyMessage:boolean;
}

export interface IReplyMessage {
  value:string;
}

