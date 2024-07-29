import { Observer } from "../utils/observer";

export class PushNotifier implements Observer {
    update(status: string): void {
        console.log(`PushNotifier: Sending push notification about order status: ${status}`);
    }
}