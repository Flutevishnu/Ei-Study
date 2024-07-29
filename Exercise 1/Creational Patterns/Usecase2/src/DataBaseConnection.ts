class DataBaseConnection {
    private static instance: DataBaseConnection;
    private connection: string;

    private constructor() {
        this.connection = this.createConnection();
    }

    public static getInstance(): DataBaseConnection {
        if (!DataBaseConnection.instance) {
            DataBaseConnection.instance = new DataBaseConnection();
        }
        return DataBaseConnection.instance;
    }

    private createConnection(): string {
        console.log('Creating new MySQL database connection...');
        return `host: 'localhost', user: 'user', password: 'password', database: 'testdb'`;
    }

    public getConnection(): string {
        return this.connection;
    }

    public closeConnection(): void {
        console.log('Closing DataBase connection');
    }
}

export default DataBaseConnection;
