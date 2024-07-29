import { NotifierDecorator } from "../Decorator/NotifierDecorator";
export class PushNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Sending push notification: ${message}`);
    }
}