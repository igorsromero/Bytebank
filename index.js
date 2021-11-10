class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0; // ATRIBUTO PRIVADO

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

}

const cliente1 = new Cliente();

cliente1.nome = "Igor";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Nathália";
cliente2.cpf = 88822233309;

const contaCorrenteIgor = new ContaCorrente();
contaCorrenteIgor.agencia = 1001;

contaCorrenteIgor.depositar(100);
contaCorrenteIgor.depositar(100);

const valorSacado = contaCorrenteIgor.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteIgor);