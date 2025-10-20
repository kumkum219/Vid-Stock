import mysql from 'mysql2/promise';

let connection = null;
export async function  createmysqlconnection(){

    if (connection == null) {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'vidstock_db',
        });
    }

    return connection;
};
