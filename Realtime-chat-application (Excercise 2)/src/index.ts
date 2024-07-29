import * as readline from 'readline';
import { ChatService } from './services/ChatService';
import { WebSocketAdapter } from './adapters/WebsocketAdapter';
import { HttpAdapter } from './adapters/HttpAdapter';

// Instantiate ChatService with WebSocketAdapter
const chatService = new ChatService(new HttpAdapter());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// // Create or join a chat room
// chatService.createOrJoinRoom('Room123', 'Alice');
// chatService.createOrJoinRoom('Room123', 'Bob');

// // Send messages
// chatService.sendMessage('Room123', 'Alice', 'Hello, everyone!');
// chatService.sendMessage('Room123', 'Bob', 'How\'s it going?');

// // Display active users
// chatService.displayActiveUsers('Room123');

const promptUser = (): void => {
    rl.question('Enter command (join [roomID] [username], send [roomID] [username] [message], show users [roomID], exit): ', (command) => {
      const [action, roomId, username, ...messageParts] = command.split(' ');
      const message = messageParts.join(' ');
  
      switch (action) {
        case 'join':
          if (roomId && username) {
            chatService.createOrJoinRoom(roomId, username);
          } else {
            console.log('Invalid command. Usage: join [roomID] [username]');
          }
          break;
  
        case 'send':
          if (roomId && username && message) {
            chatService.sendMessage(roomId, username, message);
          } else {
            console.log('Invalid command. Usage: send [roomID] [username] [message]');
          }
          break;
  
        case 'show':
          if (roomId) {
            chatService.displayActiveUsers(roomId);
          } else {
            console.log('Invalid command. Usage: show users [roomID]');
          }
          break;
  
        case 'exit':
          rl.close();
          return;
  
        default:
          console.log('Unknown command.');
          break;
      }
  
      promptUser();
    });
  };
  
  promptUser();