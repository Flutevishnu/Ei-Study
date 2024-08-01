import { ChatRoom } from '../models/ChatRoom';
import { User } from '../models/User';
import { Message } from '../models/Message';
import { ChatObserver } from '../observers/ChatObserver';
import { Logger } from '../utils/Logger';

export class ChatService {
  private rooms: { [key: string]: ChatRoom } = {};

  constructor(private chatObserver: ChatObserver) {}

  createOrJoinRoom(roomId: string, userName: string): void {
    let room = ChatRoom.getInstance(roomId);
    let user = new User(userName);
    room.addUser(user);
    this.rooms[roomId] = room;
  }

  leaveroom(roomId: string, userName: string): void{
    let room = this.rooms[roomId];
    if (room) {
      let user = room.getUsers().find(u=> u.name === userName)
      if (user) {
        room.removeUser(user)
      }
      else {
        Logger.warn('${userName} is not inside the ${roomId}')
      }
    }
    else {
      Logger.warn(`Room with ID ${roomId} does not exist`);
    }
  }

  sendMessage(roomId: string, userName: string, messageContent: string): void {
    let room = this.rooms[roomId];
    if (room) {
      let user = room.getUsers().find(u => u.name === userName);
      if (user) {
        let message = new Message(user, messageContent);
        room.addMessage(message);
        this.chatObserver.sendMessage(roomId, `${userName}: ${messageContent}`);
      }
      else {
        Logger.warn('${userName} is not inside the ${roomId}')
      }
    }
    else{
      Logger.warn(`Room with ID ${roomId} does not exist`)
    }
  }


  displayActiveUsers(roomId: string): void {
    let room = this.rooms[roomId];
    if (room) {
      console.log(`Active users in ${roomId}:`);
      room.getUsers().forEach(user => console.log(user.name));
    }
  }
}
