import { Dialect, Sequelize } from 'sequelize';

const dbName: string = 'dbteste';
const dbUser: string = 'root';
const dbHost: string = 'localhost';
const dbDriver: Dialect = 'mysql';
const dbPassword: string = '123456';

const connection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver
});

export default connection;
