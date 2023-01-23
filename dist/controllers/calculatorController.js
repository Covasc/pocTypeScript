//criar tipos -convenção: letra maiúscula-
//inferencia de tipo
var nome = "Lucas";
var valor = 12;
//tipagem de funções
export function sayHello(name) {
    return "Hello ".concat(name);
}
//arrays
var jobs = ["Cortador", "Lavador", "Arrumador"];
// operador pipe | define 2 tipos validos 
var resultado = true;
resultado = "lucas";
var horarios = ["Lucas", true];
//tipagem objetos
//Para um array de objetos tipados, adicionar um {...}[].
var corteAgendado = {
    nome: 'Lucas',
    data: '23-01-22',
    funcionario: 'Cassiano',
    corte: 'Degrade',
    valor: 37
};
//importação de objetos tipados - Tipos primitivos
export function convertCltToPj(req, res) {
    var salary = req.query.salary;
    var newSalary = Number(salary) + (Number(salary) * 0.3);
    res.send({
        resultado: "O sal\u00E1rio deve ser pelo menos ".concat(newSalary)
    });
}
