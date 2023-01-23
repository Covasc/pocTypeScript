import pg from "pg";
var Pool = pg.Pool;
export var db = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '32880628',
    database: 'pocDatabase'
});
