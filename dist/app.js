import express from "express";
import cors from "cors";

var server = express();
server.use(cors());

server.get('/health', function (req, res) {
    res.send('API up');
});
server.get('/schedule', convertCltToPj);

server.listen(5000, function () {
    console.log('Executando');
});
