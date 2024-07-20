const uuid = require('uuid');

export class Cliente {
    
    IdCliente!:string;
    NomeCliente!:string;
    EmailCliente!:string;
    Sexo!:string;
    Cpf!:string;

    constructor(IdCliente:string, NomeCliente:string, EmailCliente:string, Sexo:string, Cpf:string){
        this.IdCliente = uuid();
        this.NomeCliente = NomeCliente;
        this.EmailCliente = EmailCliente;
        this.Sexo = Sexo;
        this.Cpf = Cpf;
    }

}
