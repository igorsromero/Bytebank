import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Igor", 11122233309);
const cliente2 = new Cliente("Nathália", 44422233309);

const contaCorrenteIgor = new ContaCorrente(1001, cliente1);
contaCorrenteIgor.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteIgor.transferir(200, conta2)

console.log(ContaCorrente.numeroDeContas);