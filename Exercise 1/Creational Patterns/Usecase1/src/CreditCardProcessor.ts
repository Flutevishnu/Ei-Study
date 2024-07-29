import { PaymentProcessor } from './PaymentProcessor';

export class CreditCardProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`);
    }

    validate(): boolean {
        console.log("Validating credit card details");
        return true;
    }
}