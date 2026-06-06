//ESTRUTURA DE DECISÃO - SWITCH/CASE/BREAK/DEFAULT
let fruta = "banana"

switch (fruta){
case "laranja":
console.log("suco de laranja")
break 

case "banana":
console.log("vitamina de banana")
break

case "maçã":
console.log("suco de maçã")
}


let fruta2 = "morango"

switch (fruta2){
case "laranja bahia":
console.log("suco de laranja bahia")
break 

case "banana nanica":
console.log("vitamina de banana nanica")
break

case "maçã argentina":
console.log("suco de maçã argentina")

default: 
console.log("suco genérico")
}


let fruta3 = "abacate"

switch (fruta3){
case "laranja lima":
console.log("suco de laranja lima")
break 

case "banana da terra":
case "abacate":
console.log("vitamina " + fruta3)
break

case "maçã verde":
console.log("suco de maçã verde")
}


let fruta4 = 1

switch (fruta4){
  case 1:
  case "laranja lima":
  console.log("suco de laranja lima")
break 

 case 2:
case "banana da terra":
case "abacate":
console.log("vitamina")
break

case 4:
case "maçã verde":
console.log("suco de maçã verde")
}