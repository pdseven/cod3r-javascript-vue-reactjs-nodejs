const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// solução
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
//    console.log(funcionarios)

    //desafio minha solução
    const pais = funcionario => funcionario.pais == 'China'
    //esqueci de filtrar mulheres
    const menorSalario = function (anterior, atual) {
        return atual > anterior ? atual : anterior
    }
    console.log(funcionarios.filter(pais).filter(mulheres).reduce(menorSalario))
    //fim da minha


    // solução mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
        
    console.log(func)

})



