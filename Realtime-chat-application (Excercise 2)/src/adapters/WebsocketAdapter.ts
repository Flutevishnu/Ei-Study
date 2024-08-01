import { ChatObserver } from '../observers/ChatObserver';

export class WebSocketAdapter extends ChatObserver {
  constructor() {
    super();
  
  }

  sendMessage(roomId: string, message: string): void {

    console.log(`[WebSocket] Message sent to ${roomId}: (${message})  `);
  }

  receiveMessage(): void {
  
  }
}
