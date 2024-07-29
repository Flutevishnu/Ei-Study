export abstract class ChatObserver {
    abstract sendMessage(roomId: string, message: string): void;
    abstract receiveMessage(): void;
  }
  