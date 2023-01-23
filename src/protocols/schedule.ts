export type Schedule = {
    client: string, //O '?' na frente da propriedade significa que é opcional, porém quando existir deve obedecer a tipagem especificada
    haircut: string,
    employee: string,
    date: string | Date,
}