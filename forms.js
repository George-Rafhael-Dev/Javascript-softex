let prompt = require('prompt-sync')();

let nm = prompt('Digite seu nome: ');
let idd = prompt('Digite sua idade: ');
if(idd <= 0){
  console.log('Idade inválida.');
}else{
let data = prompt('Digite sua data de nascimento: ');
let corFav = prompt('Digite sua cor favorita: ');

console.log(`---- Formulário de ${nm}! ----`);
console.log(`---- idade: ${idd}`);
console.log(`---- data de nascimento: ${data}!`);
console.log(`---- cor favorita: ${corFav}!`);
}if(idd >= 18)
  console.log('Você é maior de idade.');
else
  console.log('Você é menor de idade.');