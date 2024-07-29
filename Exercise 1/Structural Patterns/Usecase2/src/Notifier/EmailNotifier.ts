import { Notifier } from "../NotifierInterface/Notifier";

export class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log(`Sending email notification: ${message}`);
    }
}