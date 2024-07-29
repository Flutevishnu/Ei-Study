import { Order } from './order';
import { EmailNotifier } from './Notifier/emailNotifier';
import { SMSNotifier } from './Notifier/smsNotifier';
import { PushNotifier } from './Notifier/pushNotifier';

const order = new Order();

const emailNotifier = new EmailNotifier();
const smsNotifier = new SMSNotifier();
const pushNotifier = new PushNotifier();

order.registerObserver(emailNotifier);
order.registerObserver(smsNotifier);
order.registerObserver(pushNotifier);

order.setStatus('Order Placed');
order.setStatus('Order Dispatched');
order.setStatus('Order Delivered');
