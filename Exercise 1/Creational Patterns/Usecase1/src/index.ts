//product
interface PaymentProcessor {
    processPayment(amount: number) : void;
    validate(): Boolean;
}

//Concrete ProductA
class CreditCardProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`)
    }

    validate(): Boolean {
        console.log("Validating credit card details")
        return true
    }
}

//Concreate ProductB
class PaypalProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of ${amount}`);
    }

    validate(): Boolean {
        console.log("Validating Paypal  details")
        return true
    }
}


//Creater 
abstract class PaymentProcessorCreator {
    abstract createPaymentProcessor(): PaymentProcessor

    processPayment(amount: number): void {
        const processor = this.createPaymentProcessor();
        if (processor.validate()) {
            processor.processPayment(amount);
        }
        else {
            console.log("Validation failed");
        }
    }
}

class CreditCardProcessorCreator extends PaymentProcessorCreator {
    createPaymentProcessor(): PaymentProcessor {
        return new CreditCardProcessor();
    }
}

class PaypalProcessorCreator extends PaymentProcessorCreator {
    createPaymentProcessor(): PaymentProcessor {
        return new PaypalProcessor();
    }
}


function Application() {
    const amount = 100
    const payment_method = "paypal"

    if (payment_method.trim().toLowerCase() == "credit") {
        const createPaymentcreator = new CreditCardProcessorCreator();
        createPaymentcreator.processPayment(amount);
    }
    else {
        const PaypalCreator = new PaypalProcessorCreator();
        PaypalCreator.processPayment(amount);
    }
}

Application();
