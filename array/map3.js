Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 3.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }'
]

// Retornar um array apenas com os preços
//Minha resposta
converter = e => JSON.parse(e).preco

const resultadoD = carrinho.map2(converter)
console.log(resultadoD)

// Forma mostrada no curso
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)