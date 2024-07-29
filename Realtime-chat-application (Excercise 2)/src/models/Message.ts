import { User } from './User';

export class Message {
  constructor(public user: User, public content: string) {}
}
