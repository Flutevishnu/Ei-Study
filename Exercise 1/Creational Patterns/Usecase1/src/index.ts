import { CreditCardProcessorCreator } from './CreditCardProcessorCreator';
import { PaypalProcessorCreator } from './PaypalProcessorCreator';

function Application() {
    const amount = 100;
    const payment_method = "credit";

    if (payment_method.trim().toLowerCase() === "credit") {
        const createPaymentcreator = new CreditCardProcessorCreator();
        createPaymentcreator.processPayment(amount);
    } else {
        const PaypalCreator = new PaypalProcessorCreator();
        PaypalCreator.processPayment(amount);
    }
}

Application();
