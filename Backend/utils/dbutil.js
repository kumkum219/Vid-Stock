import mysql from 'mysql2/promise';

let connection = null;
export async function  createmysqlconnection(){

    const MYSQL_HOST = process.env.MYSQL_HOST;
    const MYSQL_USER = process.env.MYSQL_USER;
    const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
    const MYSQL_DATABASE = process.env.MYSQL_DATABASE

    if (connection == null) {
        connection = await mysql.createConnection({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
        });
    }

    return connection;
};
