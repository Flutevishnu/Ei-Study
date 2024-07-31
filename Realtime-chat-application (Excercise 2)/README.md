# Real-Time Chat Application
## Description
This Real-Time Chat Application is a console-based chat system developed in TypeScript, designed to facilitate real-time communication between users. It supports both public chat rooms and private messaging features. Users can create or join chat rooms, send and receive messages in real-time, and even communicate privately with another user.

## Key Focus
**Behavioral Pattern:** Utilizes the Observer Pattern to notify users of new messages or user activities.<br />
**Creational Pattern:** Implements the Singleton Pattern to manage chat room instances.<br />
**Structural Pattern:** Uses the Adapter Pattern to accommodate different client communication protocols (e.g., WebSocket, HTTP).<br />
**Object-Oriented Principles:** Applies encapsulation, polymorphism, and inheritance for clean and maintainable code.<br />

## Design Patterns Used
**Observer Pattern:** Notifies users about new messages and activities within chat rooms.<br />
**Singleton Pattern:** Ensures only one instance of each chat room exists, managing state consistently.<br />
**Adapter Pattern:** Allows integration with different communication protocols, providing flexibility in the chat system.<br />

## Features
- **Create/Join Chat Rooms:** Users can create or join chat rooms using a unique room ID.
- **Real-Time Messaging:** Supports sending and receiving messages instantly within a chat room.
- **Active Users List:** Displays a list of active users in a chat room.
- **Message Persistence:** Messages persist even if users leave and rejoin the chat room.

## Project Structure
/src<br />
    &emsp;/adapters<br />
    &emsp;&emsp;WebSocketAdapter.ts<br />
        &emsp;&emsp;HttpAdapter.ts<br />
    &emsp;/models<br />
        &emsp;&emsp;ChatRoom.ts<br />
        &emsp;&emsp;Message.ts<br />
        &emsp;&emsp;User.ts<br />
    &emsp;/observers<br />
        &emsp;&emsp;ChatObserver.ts<br />
    &emsp;/services<br />
        &emsp;&emsp;ChatService.ts<br />
    &emsp;index.ts

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v14 or later is recommended).
- **npm**: Ensure you have npm installed (v6 or later).
- **TypeScript**: Ensure you have TypeScript installed. If not, you can install it globally using:
  ```sh
  npm install -g typescript

### Installation

1. **Clone the Repository:**   
    First, clone the repository to your local machine using the following command:
   ```sh
   git clone https://github.com/Flutevishnu/Ei-Study

2. **Navigate to the Project Directory:**
    Change to the project directory:
    ```sh
    cd Ei-Study/Realtime-chat-application (Excercise 2)/src

3. **Run the Application:**
    To Run
    ```sh
    npx ts-node index.ts


## Available Commands

1. **Join a Chat Room**:
   To join a chat room, use the following command:
   ```sh
   join [roomID] [username]

- **Description:** Allows a user to join a specified chat room with a unique room ID.
- **Example:** join Room123 Alice

2. **Leave a Char Room**
    To Leave a chat room, use the following command:
    ```sh
    leave [roomID] [username]
- **Description:** Allows a user to leave a specified chat room with a unique room ID.
- **Example:** leave Room123 Alice

3. **Send a Message**
    To send a message within a chat room, use:
    ```sh
    send [roomID] [username] [message]
- **Description:** Sends a message to all users within the specified chat room.
- **Example:** send Room123 Alice Hello everyone!

4. **Show Active Users:**
    To display the list of active users in a chat room, use:
    ```sh
    show [roomID]
- **Description:** Lists all active users currently in the specified chat room.
- **Example:** show Room123

5. **Exit the Application:**
    To exit the application, simply use:
    ```sh
    exit
- **Description:** Terminates the chat application session.