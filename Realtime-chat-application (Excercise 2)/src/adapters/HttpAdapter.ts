import { ChatObserver } from '../observers/ChatObserver';

export class HttpAdapter extends ChatObserver {
  constructor() {
    super();
    // Initialize HTTP connection
  }

  sendMessage(roomId: string, message: string): void {
    // Logic to send message via HTTP
    console.log(`[HTTP] Message sent to ${roomId}: ${message}`);
  }

  receiveMessage(): void {
    // Logic to receive message via HTTP
  }
}
