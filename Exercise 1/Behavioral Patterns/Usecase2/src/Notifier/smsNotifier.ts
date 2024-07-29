import { Observer } from "../utils/observer";

export class SMSNotifier implements Observer {
    update(status: string): void {
        console.log(`SMSNotifier: Sending SMS about order status: ${status}`);
    }
}