import { db } from "../db/db.js";
import { Schedule } from "../protocols/schedule.js";
import { QueryResult } from "pg";

export async function newSchedule (schedule: Schedule) {
    await db.query(`
    INSERT INTO schedules (client, haircut, employee, date)
    VALUES ($1, $2, $3, $4);`,
    [schedule.client, schedule.haircut, schedule.employee, schedule.date])
}

export async function scheduleList (): Promise<QueryResult<Schedule>> {
    return db.query(`
    SELECT * FROM schedules;`)
}