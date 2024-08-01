import * as readline from 'readline';
import { ChatService } from './services/ChatService';
import { WebSocketAdapter } from './adapters/WebsocketAdapter';
import { HttpAdapter } from './adapters/HttpAdapter';
import { Logger } from './utils/Logger';
// Instantiate ChatService with WebSocketAdapter
const chatService = new ChatService(new HttpAdapter());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const promptUser = (): void => {
    rl.question('\nEnter command :\n1) join [roomID] [username]\n2) leave [roomID] [username]\n3) send [roomID] [username] [message]\n4) show users [roomID]\n5) exit \n\n', (command) => 
      {
      const [action, roomId, username, ...messageParts] = command.split(' ');
      const message = messageParts.join(' ');
  
      switch (action) {
        case 'join':
          if (roomId && username) {
            chatService.createOrJoinRoom(roomId, username);
          } else {
            Logger.warn('\nInvalid command. Usage: join [roomID] [username]');
          }
          break;
           
        case 'leave':
          if(roomId && username) {
            chatService.leaveroom(roomId, username);
          } else {
            Logger.warn('\nInvalid command. Usage: leave [roomID] [username]')
          }
          break;
  
        case 'send':
          if (roomId && username && message) {
            chatService.sendMessage(roomId, username, message);
          } else {
            Logger.warn('\nInvalid command. Usage: send [roomID] [username] [message]');
          }
          break;
        
        // case 'private':
        //   const r2 = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        //   })
        //   r2.question('[sendername] [recipientname] [message]', (input)=> {
        //     const [senderName, recipientName, ...messagesplit] = input.split(' ');
        //     const message = messagesplit.join(' ')
        //     if (senderName && recipientName && message) {
        //       chatService.sendPrivateMessage(senderName, recipientName, message);
        //     }
        //   })
        //   break;
        case 'show':
          if (roomId) {
            chatService.displayActiveUsers(roomId);
          } else {
            Logger.warn('\nInvalid command. Usage: show users [roomID]');
          }
          break;
  
        case 'exit':
          rl.close();
          Logger.info("\nExiting Application")
          return;
  
        default:
          Logger.error('\nUnknown command.');
          break;
      }
  
      promptUser();
    });
  };
  
  promptUser();