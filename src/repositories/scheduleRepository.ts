import { db } from "src/db/db";
import { Schedule } from "src/protocols/schedule";

export async function scheduleList (schedule: Schedule) {
    await db.query(`
    INSERT INTO schedules (client, haircut, employee, date)
    VALUES ($1, $2, $3, $4);`,
    [schedule.client, schedule.haircut, schedule.employee, schedule.date])
}