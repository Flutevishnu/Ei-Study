import { User } from './User';
import { Message } from './Message';

export class ChatRoom {
  private static instances: { [key: string]: ChatRoom } = {};
  private users: User[] = [];
  private messages: Message[] = [];

  private constructor(private id: string) {}

  public static getInstance(id: string): ChatRoom {
    if (!this.instances[id]) {
      this.instances[id] = new ChatRoom(id);
    }
    return this.instances[id];
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`${user.name} joined ${this.id}`);
  }

  removeUser(user: User): void {
    this.users = this.users.filter(u => u !== user);
    console.log(`${user.name} left ${this.id}`);
  }

  addMessage(message: Message): void {
    this.messages.push(message);
    console.log(`[${this.id}] ${message.user.name}: ${message.content}`);
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getUsers(): User[] {
    return this.users;
  }
}
