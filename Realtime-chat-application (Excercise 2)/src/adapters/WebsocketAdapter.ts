import { ChatObserver } from '../observers/ChatObserver';

export class WebSocketAdapter extends ChatObserver {
  constructor() {
    super();
    // Initialize WebSocket connection
  }

  sendMessage(roomId: string, message: string): void {
    // Logic to send message via WebSocket
    console.log(`[WebSocket] Message sent to ${roomId}: ${message}`);
  }

  receiveMessage(): void {
    // Logic to receive message via WebSocket
  }
}
