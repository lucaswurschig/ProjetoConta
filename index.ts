import { contaCorrente } from "./contaCorrente";
import 'module-alias/register';
import { prompts } from "prompts";



let consultaSaldo = new contaCorrente(1000,1000);

// consultaSaldo.consultar = consultaSaldo.depositar - consultaSaldo.sacar;


// console.log(`Total em conta: ${consultaSaldo.sacar(100).toLocaleString("pt-br", {
//       style: "currency",
//       currency: "BRL"
//     })}`);

//consultaSaldo = require('prompts');


(async () => {
 consultaSaldo.consultar = await require('prompts')({
    type: "number",
    name: "value",
    message: "Saldo inicial em conta:",
  });

  consultaSaldo.depositar = await require('prompts')({
    type: "number",
    name: "value",
    message: "Quanto voce quer depositar ?"
  });

  consultaSaldo.sacar = await require('prompts')({
    type: "number",
    name: "value",
    message: "Quanto voce quer sacar ?"
  });

let saldoFinal: number = consultaSaldo._saldo;




  console.log(
    `Total em conta: ${saldoFinal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })}`
  );
})();















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

