import { ChatObserver } from '../observers/ChatObserver';

export class HttpAdapter extends ChatObserver {
  constructor() {
    super();
   
  }

  sendMessage(roomId: string, message: string): void {
    console.log(`[HTTP] Message sent to ${roomId}: ${message}`);
  }

  receiveMessage(): void {
  }
}
