export class contaCorrente {
    agencia:number = 4000;
    _saldo: number = 1000;

    constructor(_saldo: number, agencia: number) {
        this._saldo = _saldo;
        this.agencia = agencia;
    }

    sacar(valor: number){
        if (this._saldo >= valor) {
            this._saldo -=valor;
            return valor;
        }
    }

    depositar(valor: number){
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        }
    }

    consultar(_saldo: number) {
        return this._saldo;
    }
  }

