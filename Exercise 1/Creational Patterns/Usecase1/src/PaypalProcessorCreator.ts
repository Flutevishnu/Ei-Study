import { PaymentProcessorCreator } from './PaymentProcessorCreator';
import { PaymentProcessor } from './PaymentProcessor';
import { PaypalProcessor } from './PaypalProcessor';

export class PaypalProcessorCreator extends PaymentProcessorCreator {
    createPaymentProcessor(): PaymentProcessor {
        return new PaypalProcessor();
    }
}
