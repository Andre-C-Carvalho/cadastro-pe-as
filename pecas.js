const listaDepecas = ["amortecedor", "eixo cardan", "filtro de óleo"]
console.log(listaDepecas) 
if (listaDepecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
}

var peso = 50
if (peso > 100) {
    console.log("Peso da peça está adequado, cadastro será realizado")
} else {
    console.log("Peso insuficiente, cadastro não será ralizado")
}

let nomePeca = "volante"
if (nomePeca.length > 3) {
    console.log("Nome adequado, cadastro será realizado")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio! Cadastro não será realizado")
} else {
    console.log("O nome deve possuir mais de 3 caracteres, cadastro não será realizado")
}