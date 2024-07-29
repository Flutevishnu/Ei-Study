import { ChatService } from './services/ChatService';
import { WebSocketAdapter } from './adapters/WebSocketAdapter';

// Instantiate ChatService with WebSocketAdapter
const chatService = new ChatService(new WebSocketAdapter());

// Create or join a chat room
chatService.createOrJoinRoom('Room123', 'Alice');
chatService.createOrJoinRoom('Room123', 'Bob');

// Send messages
chatService.sendMessage('Room123', 'Alice', 'Hello, everyone!');
chatService.sendMessage('Room123', 'Bob', 'How\'s it going?');

// Display active users
chatService.displayActiveUsers('Room123');