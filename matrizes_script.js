//saida declarar variaveis
let nomesPokemon = ["pikachu", "chamander", "bulbassaur"]
let potesComida = ["acucar", "cafe", "biscoito"]

//printar variaveis
console.log(nomesPokemon, potesComida)

// declarar variaveis concatenar
let nomeUsuario = "Sofia,"
let idade = 21
let sexo = "feminino,"
let majorAge = idade >= 18 

//printar e cocatenar variaveis
console.log("o usuario " + nomeUsuario, "tem " + idade + " anos", "e é do sexo " + sexo, majorAge)

//variaveis vetores
let nomesTwd = ["Rick", "Daryl", "Carol", "Michonne"]
let gruposTwd = [
  ["Rick", "masculino", 1],
  ["Daryl", "masculino", 2],
  ["Carol", "feminino", 3],
  ["Michonne", "feminino", 4]
]

//variaveis matrizes
console.log("o personagem " + gruposTwd[0][0] + " é do sexo " + gruposTwd[0][1] + " e esta na posição " + gruposTwd[0][2])
console.log("o personagem " + gruposTwd[1][0] + " é do sexo " + gruposTwd[1][1] + " e esta na posição " + gruposTwd[1][2])
console.log("o personagem " + gruposTwd[2][0] + " é do sexo " + gruposTwd[2][1] + " e esta na posição " + gruposTwd[2][2])
console.log("o personagem " + gruposTwd[3][0] + " é do sexo " + gruposTwd[3][1] + " e esta na posição " + gruposTwd[3][2])
console.log(nomesTwd.length) 
console.log(gruposTwd.length)