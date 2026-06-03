//IF  (SE)
let ligado = true
if (ligado){
  console.log("executou comando")
}


let ovos = true
let itensComprados = ""
if (ovos){
  itensComprados = "leite"
  console.log("item comprado: " + itensComprados)
}


//ELSE (SE NÃO)
let ovos2 = false
let itensComprados2 = ""
if (ovos2){
  itensComprados2 = "leite"
}
else{
  console.log ("sessão de congelados:")
  itensComprados2 = "Lasanha congelada"
} 
  console.log("item comprado: " + itensComprados2)


//ELSE IF 
let nivelDeFome = 10
if (nivelDeFome ===1){
  console.log("pouca fome")
}else if (nivelDeFome ===2){
  console.log("muita fome")
}else{
  console.log("faminto")
}