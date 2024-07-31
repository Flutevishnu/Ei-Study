# Real-Time Chat Application
## Description
This Real-Time Chat Application is a console-based chat system developed in TypeScript, designed to facilitate real-time communication between users. It supports both public chat rooms and private messaging features. Users can create or join chat rooms, send and receive messages in real-time, and even communicate privately with another user.

## Key Focus
**Behavioral Pattern:** Utilizes the Observer Pattern to notify users of new messages or user activities.<br />
**Creational Pattern:** Implements the Singleton Pattern to manage chat room instances.<br />
**Structural Pattern:** Uses the Adapter Pattern to accommodate different client communication protocols (e.g., WebSocket, HTTP).<br />
**Object-Oriented Principles:** Applies encapsulation, polymorphism, and inheritance for clean and maintainable code.<br />

## Design Patterns Used

### Singleton Pattern
The Singleton Pattern ensures that only one instance of each chat room exists, managing state consistently.

- **File**: `src/models/ChatRoom.ts`
  - **Class**: `ChatRoom`
    - **Description**: Manages the state and behavior of a chat room, ensuring only one instance exists per room ID.
    - **Method**: `getInstance`
      - **Description**: Returns the single instance of the chat room for a given room ID. This method ensures that any operations performed on a specific chat room ID are always interacting with the same instance, maintaining consistency.

### Observer Pattern
The Observer Pattern is used to notify users of new messages or activities within chat rooms.

- **File**: `src/observers/ChatObserver.ts`
  - **Class**: `ChatObserver`
    - **Description**: Defines the contract for notifying users about messages and activities.
    - **Methods**:
      - **`update(message: Message): void`**
        - **Description**: This method is called to notify observers (users) about new messages or activities.

- **File**: `src/adapters/WebSocketAdapter.ts`
  - **Class**: `WebSocketAdapter`
    - **Implements**: `ChatObserver`
    - **Description**: Implements the `ChatObserver` interface to send messages over WebSocket.
    - **Methods**:
      - **`update(message: Message): void`**
        - **Description**: Sends the updated message to the user through a WebSocket connection.

- **File**: `src/models/ChatRoom.ts`
  - **Class**: `ChatRoom`
    - **Description**: Manages the state and behavior of a chat room, including maintaining a list of observers and notifying them of new messages.
    - **Methods**:
      - **`addObserver(observer: ChatObserver): void`**
        - **Description**: Adds an observer to the chat room.
      - **`removeObserver(observer: ChatObserver): void`**
        - **Description**: Removes an observer from the chat room.
      - **`notifyObservers(message: Message): void`**
        - **Description**: Notifies all registered observers about a new message.
        
### Adapter Pattern
The Adapter Pattern allows the chat system to work with different types of communication protocols by providing a common interface and adapting the protocols to it.

- **File**: `src/adapters/WebSocketAdapter.ts`
  - **Class**: `WebSocketAdapter`
    - **Description**: Adapts the WebSocket communication protocol to the chat system. Implements the common interface for sending and receiving messages.
    - **Methods**:
      - **`sendMessage(message: Message): void`**
        - **Description**: Sends a message to a user via WebSocket.
      - **`receiveMessage(): void`**
        - **Description**: Receives incoming messages through WebSocket and processes them.

- **File**: `src/adapters/HttpAdapter.ts`
  - **Class**: `HttpAdapter`
    - **Description**: Adapts the HTTP communication protocol to the chat system. Provides a common interface for HTTP-based message handling.
    - **Methods**:
      - **`sendMessage(message: Message): void`**
        - **Description**: Sends a message to a user via HTTP.
      - **`receiveMessage(): void`**
        - **Description**: Handles HTTP requests for incoming messages.

- **File**: `src/adapters/ChatObserver.ts` (interface)
  - **Description**: Defines the contract that must be implemented by any communication adapter.
  - **Methods**:
    - **`sendMessage(message: Message): void`**
      - **Description**: Defines a method for sending messages.
    - **`receiveMessage(): void`**
      - **Description**: Defines a method for receiving messages.


## Features
- **Create/Join Chat Rooms:** Users can create or join chat rooms using a unique room ID.
- **Real-Time Messaging:** Supports sending and receiving messages instantly within a chat room.
- **Active Users List:** Displays a list of active users in a chat room.
- **Message Persistence:** Messages persist even if users leave and rejoin the chat room.

## Project Structure
/src
    /adapters
        WebSocketAdapter.ts
        HttpAdapter.ts
    /models
        ChatRoom.ts
        Message.ts
        User.ts
    /observers
        ChatObserver.ts
    /services
        ChatService.ts
    index.ts