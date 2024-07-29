import { PaymentProcessor } from './PaymentProcessor';

export class PaypalProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of ${amount}`);
    }

    validate(): boolean {
        console.log("Validating PayPal details");
        return true;
    }
}