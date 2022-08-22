"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaCorrente = void 0;
class contaCorrente {
    constructor(_saldo, agencia) {
        this.agencia = 4000;
        this._saldo = 1000;
        this._saldo = _saldo;
        this.agencia = agencia;
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        }
    }
    consultar(_saldo) {
        return this._saldo;
    }
}
exports.contaCorrente = contaCorrente;
