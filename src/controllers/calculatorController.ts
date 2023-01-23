import { Request, Response } from "express";
import { Schedule } from "../protocols/schedule";

//criar tipos -convenção: letra maiúscula-


//inferencia de tipo
const nome: string = "Lucas";
const valor: number = 12;

//tipagem de funções
export function sayHello (name: string): string {
    return `Hello ${name}`;
}

//arrays
const jobs: string[] = [ `Cortador`, `Lavador`, `Arrumador`];

// operador pipe | define 2 tipos validos 
let resultado: boolean | string = true;
resultado = `lucas`;

const horarios: (string | boolean)[] = [`Lucas`, true];

//tipagem objetos
//Para um array de objetos tipados, adicionar um {...}[].
//const corteAgendado: Schedule = {
//     nome: 'Lucas',
//     data: '23-01-22',
//     funcionario: 'Cassiano',
//     corte: 'Degrade',
//     valor: 37
// }

//importação de objetos tipados - Tipos primitivos
export function convertCltToPj (req: Request, res: Response) {
    
    const {salary} = req.query;

    const newSalary = Number(salary) + (Number(salary)*0.3);

    res.send({
        resultado: `O salário deve ser pelo menos ${newSalary}` 
    });
}