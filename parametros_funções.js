//MULTIPLOS PARAMETROS EM FUNÇÕES
torrar("pão de forma", "Felipe", 10.90)
torrar("pão integral", "Janaina", 10.90)

function torrar(pao, nome, valor){
  console.log("torrada feita com " + pao)
  console.log("um pedido de " + nome)
  console.log("no valor de " + valor)
}

createStringConnection("db_products", "felipe", 9876)
function createStringConnection (databaseName, user, pass){
  console.log(`connect:DBCONNECT; user=${user}; pass=${pass}; initial_database=${databaseName}`)
}