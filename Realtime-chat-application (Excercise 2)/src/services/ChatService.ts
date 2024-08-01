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
    if (room.getUserByName(userName)) {
      Logger.warn(`\n${userName} is already inside the ${roomId}. Try a different username.`);
      return
    }
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
        Logger.warn(`\n${userName} is not inside the ${roomId}`)
      }
    }
    else {
      Logger.warn(`\nRoom with ID ${roomId} does not exist`);
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
        Logger.warn(`\n${userName} is not inside the ${roomId}`)
      }
    }
    else{
      Logger.warn(`\nRoom with ID ${roomId} does not exist`)
    }
  }

  createPrivateRoom(roomId: string, userName: string, recipientName:string) {
    
    let room = ChatRoom.getInstance(roomId, true)
    if (room.getUserByName(userName) && room.getUserByName(recipientName)) {
      return
    }
    room.addUser(new User(userName))
    room.addUser(new User(recipientName))
    this.rooms[roomId] = room
  }

  sendPrivateMessage(senderName: string, recipientName: string, messageContent: string): void {
    const roomId = [senderName+recipientName].sort().join('')
    this.createPrivateRoom(roomId, senderName, recipientName);
    let room = this.rooms[roomId]
    let user = room.getUsers().find(u => u.name === senderName);
      if (user) {
        let message = new Message(user, messageContent);
        room.addMessage(message);
        this.chatObserver.sendMessage(roomId, `${senderName}: ${messageContent}`);
      }
      else {
        Logger.warn(`\n${senderName} is not inside the ${roomId}`)
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
