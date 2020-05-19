function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVedadeeuFalo(valor){
    if(valor){
        console.log('É verdade..' + valor)
    }
}

seForVedadeeuFalo()
seForVedadeeuFalo(null)
seForVedadeeuFalo(undefined)
seForVedadeeuFalo(NaN)
seForVedadeeuFalo('')
seForVedadeeuFalo(0)
seForVedadeeuFalo(-1)
seForVedadeeuFalo(' ')
seForVedadeeuFalo('?')
seForVedadeeuFalo([])
seForVedadeeuFalo([1,2])
seForVedadeeuFalo({})