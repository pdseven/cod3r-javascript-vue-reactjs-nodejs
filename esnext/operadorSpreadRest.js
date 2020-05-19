// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetros de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(funcionario, clone)
clone.nome = 'Clone Maria'
console.log(funcionario, clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)