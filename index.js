let readline = require("readline-sync")
let nm = readline.question("digite seu seu nome: ")
let idd = readline.question("digite sua idade: ")
if(idd <=0){
    console.log ('idade inválida')
}
else if(idd <= 17){
    console.log("Você é menor de idade, ", nm)
}
else{
    console.log(`Você é maior de idade, ${nm}`)
}