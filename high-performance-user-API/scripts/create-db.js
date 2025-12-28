import pkg from "pg";
import dotenv from "dotenv"

dotenv.config();

const {Client} = pkg;

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

await client.connect();
await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
await client.end();

console.log("Database created");