//Operadores Logicos
//AND (&&)
let idade = 18
let vistoVerificado = true 
console.log((idade >=18) && (vistoVerificado === true))

let idade2 = 17
let vistoVerificado2 = true
console.log((idade2 >=18) && (vistoVerificado2 === true))

let idade3 = 18
let vistoVerificado3 = false
console.log((idade3 >=18) && (vistoVerificado3 === true))

let moedasColetadas = 100 
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)

// OR (||)
let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log ("a pessoal pode sair: " + podeSair)

let tempo2 = "chuva"
let item2 = "guarda chuva"
let podeSair2 = (tempo2 !== "sol") || (item === "guarda chuva")
console.log ("a pessoa pode sair: " + podeSair2)

let tempo3 = "chuva"
let item3 = "pá"
let podeSair3 = (tempo3 !== "chuva") || (item3 === "guarda chuva")
console.log ("a pessoa pode sair: " + podeSair3)

//NOT (!) - NEGA A AFIRMAÇÃO 
let metereologia = "chuva"
let resultado = metereologia !== "chuva"
console.log(resultado)

//MUDANÇA POLARIDADE (!)
let metereologia2 = "chuva"
let resultado2 = metereologia2 !== "chuva"
console.log(!resultado2)

let metereologia3 = "chuva"
let horario = 8
let resultado3 = (metereologia3 !== "chuva") && (horario > 6)
console.log(resultado3)
