const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?
const todosSaoBolsistas = alunos.map(a => a.bolsista).reduce(function(anterior, atual) {
    console.log(anterior, atual)
    return anterior && atual
})
console.log(todosSaoBolsistas)

//resposta
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))



// Desafio 2: Algum aluno é bolsista?
const algumEBolsista = alunos.map(a => a.bolsista).reduce(function(anterior, atual) {
    console.log(anterior, atual)
    return anterior || atual
})
console.log(algumEBolsista)

//resposta
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))