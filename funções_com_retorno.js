//FUNÇÕES COM RETORNO
let resultado = soma(5,10)

console.log("o resultado da função é " + resultado)

function soma(numA, numB){
  let somatorio = numA + numB
  return somatorio
}



let userName = getFirstName("Felipe Amaral Silva Santos", " ")
console.log("Welcome " + userName)

userName = getFirstName("Carlos-Antonio-Oliveira", "-")
console.log("Welcome " + userName)

function getFirstName(name, splitChar){
  let firstName = name.split(splitChar)[0]
  return firstName
}