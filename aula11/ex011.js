var idade = 22
if (idade > 18) {
    console.log('Menor de Idade')
} else {
    console.log('Maior de Idade')
}

var idade = 16
if (idade > 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatório!')
}