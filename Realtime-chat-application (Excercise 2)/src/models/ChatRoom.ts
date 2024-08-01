import { User } from './User';
import { Message } from './Message';
import { Logger } from '../utils/Logger';

export class ChatRoom {
  private static instances: { [key: string]: ChatRoom } = {};
  private users: User[] = [];
  private messages: Message[] = [];

  private constructor(private id: string) {}

  public static getInstance(id: string): ChatRoom {
    if (!this.instances[id]) {
      this.instances[id] = new ChatRoom(id);
      Logger.log(`Created new chat room with ID ${id}`);
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
    this.getMessages().forEach(message => console.log(`[${this.id}] ${message.timestamp}: ${message.user.name}: ${message.content}`))
    this.messages.push(message);
    console.log(`[${this.id}] ${new Date()}: [${this.id}] ${message.user.name}: ${message.content}`);
    console.log("\n\n")
    this.notifyUsers(message)
  }

  private notifyUsers(message: Message) {
    this.users.forEach(user => {
      if (user != message.user) {
        console.log(`Notifying ${user.name} about new message: (${message.user.name} :${message.content})`);
      } 
      
    })
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserByName(name: string): User | undefined {
    return this.users.find(user => user.name === name);
  }
}
