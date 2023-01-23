import express from "express";
import { addNewSchedule, getAllSchedules } from "./controllers/calculatorController.js";
var server = express();
server.use(express.json());
server.get('/health', function (req, res) {
    res.send('API up');
});
server.post('/schedule', addNewSchedule);
server.get('/schedule', getAllSchedules);
server.listen(5000, function () {
    console.log('Executando');
});
