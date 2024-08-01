import { User } from './User';

export class Message {
  public timestamp: Date;

  constructor(
    public user: User, 
    public content: string,
  ) {
    this.timestamp = new Date();
  }
}
