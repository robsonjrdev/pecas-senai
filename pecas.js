let pesoPeca = 80
let numeroPecas = 10
let listaPecas = ["Disco de Freio", "Motor", "Pastilha de Freio", "Pneu"]
let nomePeca = "Disco de Freio"

// Verificacao do peso da peca
if (pesoPeca > 100) {
    // Podemos cadastrar
    console.log("Peso adequado, podemos cadastrar.")
} else {
    // Não podemos cadastrar
    console.log("Peso menor que 100g, não podemos cadastrar.")
}

// Verificacao do tamanho da lista de pecas
if (listaPecas.length >= 10) {
    // Capacidade atingida
    console.log("Capacidade maxima atingida.")
} else {
    // Ainda ha espaco pra cadastro
    console.log("Ainda há espaço para cadastro.")
}

// Verificacao do nome da peca
if (nomePeca.length < 3) {
    // Nome invalido
    console.log("Nome invalido. Precisa ter mais 3 caracteres ou mais.")
} else {
    // Nome adequado
    console.log("Nome de peca adequado.")
}