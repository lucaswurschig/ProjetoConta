"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const contaCorrente_1 = require("./contaCorrente");
require("module-alias/register");
let consultaSaldo = new contaCorrente_1.contaCorrente(1000, 1000);
// consultaSaldo.consultar = consultaSaldo.depositar - consultaSaldo.sacar;
// console.log(`Total em conta: ${consultaSaldo.sacar(100).toLocaleString("pt-br", {
//       style: "currency",
//       currency: "BRL"
//     })}`);
//consultaSaldo = require('prompts');
(() => __awaiter(void 0, void 0, void 0, function* () {
    consultaSaldo.consultar = yield require('prompts')({
        type: "number",
        name: "value",
        message: "Saldo inicial em conta:",
    });
    consultaSaldo.depositar = yield require('prompts')({
        type: "number",
        name: "value",
        message: "Quanto voce quer depositar ?"
    });
    consultaSaldo.sacar = yield require('prompts')({
        type: "number",
        name: "value",
        message: "Quanto voce quer sacar ?"
    });
    let saldoFinal = consultaSaldo._saldo;
    console.log(`Total em conta: ${saldoFinal.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })}`);
}))();
// class contaCorrente {
//     constructor(public saldo: number, public sacar: number, public depositar:number,) {
//    }
// }
// let consultaSaldo = new contaCorrente(1000, 100, 10)
// let quantia =  consultaSaldo.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
// let saque = consultaSaldo.sacar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
// let deposito = consultaSaldo.depositar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
// let valor = parseInt('200');
// let retirada = parseInt('300');
// let depositado = (valor + retirada).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
// console.log(`Meu saldo é: ${consultaSaldo}`)
// console.log(`Depositei na minha conta + ${depositado}`)
