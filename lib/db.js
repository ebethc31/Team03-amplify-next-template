import mysql from 'mysql2/promise';

let connection;
export const createConnection = async () => {
    if(!connection){
        connection = await mysql.createConnection({
            host: 'team03-db.cobd8enwsupz.us-east-1.rds.amazonaws.com',
            port: '3306',
            database: 'team03',
            user: 'admin',
            password: 'T1gsbyamilli0n$',
        })
    }
    return connection;
}

/*
const pool = mysql.createPool({
    host: "team03-db.cobd8enwsupz.us-east-1.rds.amazonaws.com",
    port: "3306",
    database: "team03-db",
    user: "admin",
    password: "T1gsbyamilli0n$",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  

export async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}
  */