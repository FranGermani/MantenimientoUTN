import dotenv from 'dotenv';
dotenv.config();
import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.getConnection()
    .then(() => console.log('Connected to the database!'))
    .catch(err => console.error('Database connection failed:', err));
