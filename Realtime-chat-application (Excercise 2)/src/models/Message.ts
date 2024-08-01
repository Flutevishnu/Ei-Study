import { User } from './User';

export class Message {
  public timestamp: Date;

  constructor(
    public user: User, 
    public content: string,
    public isPrivate: boolean = false,
    public recipient?: User
  ) {
    this.timestamp = new Date();
  }
}
