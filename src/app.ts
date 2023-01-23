import express from "express";
import { convertCltToPj } from "./controllers/calculatorController.js";

const server = express();

server.get('/health', (req, res) => {
    res.send('API up')
});
server.get('/convert', convertCltToPj);

server.listen(5000, () => {
    console.log('Executando')
});