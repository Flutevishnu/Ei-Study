import { PaymentProcessor } from './PaymentProcessor';

export abstract class PaymentProcessorCreator {
    abstract createPaymentProcessor(): PaymentProcessor;

    processPayment(amount: number): void {
        const processor = this.createPaymentProcessor();
        if (processor.validate()) {
            processor.processPayment(amount);
        } else {
            console.log("Validation failed");
        }
    }
}