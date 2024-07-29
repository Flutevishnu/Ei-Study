import { PaymentProcessorCreator } from './PaymentProcessorCreator';
import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardProcessor } from './CreditCardProcessor';

export class CreditCardProcessorCreator extends PaymentProcessorCreator {
    createPaymentProcessor(): PaymentProcessor {
        return new CreditCardProcessor();
    }
}