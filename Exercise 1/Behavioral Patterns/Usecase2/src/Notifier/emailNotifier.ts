import { Observer } from "../utils/observer";
export class EmailNotifier implements Observer {
    update(status: string): void {
        console.log(`EmailNotifier: Notifying user about order status: ${status}`);
    }
}