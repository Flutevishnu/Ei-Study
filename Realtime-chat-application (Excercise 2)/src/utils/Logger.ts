export class Logger {
    static log(message: string): void {
        console.log(`[LOG] ${new Date()} - ${message}`);
    }

    static error(message: string): void {
        console.error(`[ERROR] ${new Date()} - ${message}`);
    }

    static info(message: string): void {
        console.info(`[INFO] ${new Date()} - ${message}`);
    }

    static warn(message: string): void {
        console.warn(`[WARN] ${new Date()} - ${message}`);
    }
}
