import { Subject } from "./utils/subject";
import { Observer } from "./utils/observer";

export class Order implements Subject {
    private observers: Observer[] = [];
    private status: string = "";

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.status);
        }
    }

    setStatus(status: string): void {
        console.log(`Order: new status is ${status}`);
        this.status = status;
        this.notifyObservers();
    }
}
