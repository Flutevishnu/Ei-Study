
import { NotifierDecorator
 } from "../Decorator/NotifierDecorator";

export class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Sending SMS notification: ${message}`);
    }
}