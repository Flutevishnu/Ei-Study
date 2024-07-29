import DataBaseConnection from './DataBaseConnection';

class App {
    public static main(): void {
        const dbConnection1 = DataBaseConnection.getInstance();
        const connection1 = dbConnection1.getConnection();
        console.log(connection1);

        const dbConnection2 = DataBaseConnection.getInstance();
        const connection2 = dbConnection2.getConnection();
        console.log(connection2);

        if (connection1 === connection2) {
            console.log('Singleton Worked');
        } else {
            console.log('Singleton not worked');
        }

        dbConnection1.closeConnection();
    }
}

App.main();