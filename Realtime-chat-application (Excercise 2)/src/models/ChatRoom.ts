import { User } from './User';
import { Message } from './Message';
import { Logger } from '../utils/Logger';

export class ChatRoom {
  private static instances: { [key: string]: ChatRoom } = {};
  private users: User[] = [];
  private messages: Message[] = [];
  private isPrivate: boolean

  private constructor(private id: string, isPrivate: boolean) {
    this.isPrivate = isPrivate;
  }

  public static getInstance(id: string, isPrivate= false): ChatRoom {
    if (!this.instances[id]) {
      this.instances[id] = new ChatRoom(id, isPrivate);
      if (!isPrivate) {
        Logger.log(`\nCreated new chat room with ID ${id}`);
      }
      
    }
    return this.instances[id];
  }

  addUser(user: User): void {
    this.users.push(user);
    if (!this.isPrivate){
      console.log(`${user.name} joined ${this.id}`);
    }
  }

  removeUser(user: User): void {
    this.users = this.users.filter(u => u !== user);
    console.log(`${user.name} left ${this.id}`);
  }

  addMessage(message: Message): void {
    this.getMessages().forEach(message => console.log(`${this.isPrivate?"":[this.id]} ${message.timestamp}: ${message.user.name}: ${message.content}`))
    this.messages.push(message);
    console.log(`${this.isPrivate?"":[this.id]} ${new Date()}: ${message.user.name}: ${message.content}`);
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

  checkPrivate() {
    return this.isPrivate
  }
}
