import pg from "pg";

const { Pool } = pg;

export const db = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '32880628',
    database: 'pocDatabase'
})

