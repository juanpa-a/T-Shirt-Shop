const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCAL_CONNECTION_LOST') {
            console.error("DATABASE CONNECTION WAS CLOSED.");
        }
        else if(err.code === 'ER_CON_COUNT_ERROR') {
            console.error("DATABASE HAS TOO MANY CONNECTIONS.");
        }
        else if(err.code === 'ECONNREFUSED') {
            console.error("DATABASE CONNECTION WAS REFUSED");
        }
        else {
            console.error(`ERROR ${err}`);
        }
    } 
    else if (connection) connection.release();
    console.log("Database is Connected.");
    return;
});

// Promisify pool query
pool.query = promisify(pool.query);

module.exports = pool;