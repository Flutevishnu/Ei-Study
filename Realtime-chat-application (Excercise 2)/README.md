# Real-Time Chat Application
## Description
This Real-Time Chat Application is a console-based chat system developed in TypeScript, designed to facilitate real-time communication between users. It supports both public chat rooms and private messaging features. Users can create or join chat rooms, send and receive messages in real-time, and even communicate privately with another user.

## Key Focus
**Behavioral Pattern:** Utilizes the Observer Pattern to notify users of new messages or user activities.
**Creational Pattern:** Implements the Singleton Pattern to manage chat room instances.
**Structural Pattern:** Uses the Adapter Pattern to accommodate different client communication protocols (e.g., WebSocket).
**Object-Oriented Principles:** Applies encapsulation, polymorphism, and inheritance for clean and maintainable code.

## Design Patterns Used
**Observer Pattern:** Notifies users about new messages and activities within chat rooms.
**Singleton Pattern:** Ensures only one instance of each chat room exists, managing state consistently.
**Adapter Pattern:** Allows integration with different communication protocols, providing flexibility in the chat system.

## Features
- Create/Join Chat Rooms: Users can create or join chat rooms using a unique room ID.
- Real-Time Messaging: Supports sending and receiving messages instantly within a chat room.
- Private Messaging: Allows users to send direct messages to other users outside of public chat rooms.
- Active Users List: Displays a list of active users in a chat room.
- Message Persistence: Messages persist even if users leave and rejoin the chat room.