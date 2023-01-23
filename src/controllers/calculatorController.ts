import { Request, Response } from "express";
import { newSchedule, scheduleList } from "../repositories/scheduleRepository.js";
import { Schedule } from "../protocols/schedule.js";


export async function addNewSchedule (req: Request, res: Response) {
    
    const schedule: Schedule = req.body;

    try {
        await newSchedule(schedule);
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getAllSchedules (req: Request, res: Response) {
    
    try {
        const { rows: schedules } = await scheduleList();       
        res.send(schedules).status(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}