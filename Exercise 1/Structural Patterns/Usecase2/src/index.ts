import { Notifier } from "./NotifierInterface/Notifier";
import { EmailNotifier } from "./Notifier/EmailNotifier";
import { PushNotifier } from "./Notifier/PushNotifier";
import { SMSNotifier} from "./Notifier/SmsNotifier";

const emailNotifier: Notifier = new EmailNotifier();
const smsNotifier: Notifier = new SMSNotifier(emailNotifier);
const pushNotifier: Notifier = new PushNotifier(smsNotifier);

pushNotifier.send('Hello, User!');