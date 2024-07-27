class DataBaseConnection {
    private static instance: DataBaseConnection;
    private connection: String
    private constructor(){
        this.connection = this.createConnection();
    }

    public static getInstance(): DataBaseConnection {
        if (!DataBaseConnection.instance){
            DataBaseConnection.instance = new DataBaseConnection();
        }
        return DataBaseConnection.instance
    }

    private createConnection(): String{
        console.log('Creating new MySQL database connection...');
        return `host: 'localhost', user: 'user', password: 'password', database: 'testdb'`;
    }

    public getConnection(){
        return this.connection
    }

    public CloseConnection(){
        console.log("Closing DataBase connection")
    }
}

const dbconnection1 = DataBaseConnection.getInstance();
const connection1 = dbconnection1.getConnection();
console.log(connection1)
const dbconnection2 = DataBaseConnection.getInstance();
const connection2 = dbconnection1.getConnection();
console.log(connection2)    
if (connection1 == connection2) {
    console.log("Singleton Worked")
}
else {
    console.log("Singleton not worked")
}