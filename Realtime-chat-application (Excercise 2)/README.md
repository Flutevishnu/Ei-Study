Real-time Chat Application
Overview
This project is a simple console-based real-time chat application implemented in TypeScript. It allows users to join or create chat rooms, send and receive messages in real-time, and see the list of active users in a chat room. The project focuses on applying software design patterns, adhering to SOLID principles, and utilizing effective Object-Oriented Programming (OOP) concepts.

Features
Chat Room Management: Users can create or join chat rooms by entering a unique room ID.
Real-time Messaging: Users can send and receive messages in real-time within a chat room.
Active Users List: Displays a list of active users in the chat room.
Optional Features:
Private messaging between users.
Message history persistence.
Key Design Patterns
Observer Pattern: Used to notify clients of new messages or user activities.
Singleton Pattern: Ensures only one instance of each chat room exists.
Adapter Pattern: Supports different client communication protocols (e.g., WebSocket, HTTP).
OOP Principles
Encapsulation: Models and services are well-encapsulated with clear interfaces.
Polymorphism: Abstract classes and interfaces are used effectively.
Inheritance: Applied in adapter implementations for different communication protocols.