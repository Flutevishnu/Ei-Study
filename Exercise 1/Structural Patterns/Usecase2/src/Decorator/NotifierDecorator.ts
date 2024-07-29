import { Notifier } from "../NotifierInterface/Notifier";

export abstract class NotifierDecorator implements Notifier {
    protected wrappee: Notifier;

    constructor(notifier: Notifier) {
        this.wrappee = notifier;
    }

    send(message: string): void {
        this.wrappee.send(message);
    }
}
