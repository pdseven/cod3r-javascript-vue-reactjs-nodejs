function teste1(num){
    if(num > 7)
        console.log(num) // está no if mesmo sem {} não tem relação com a identação sem o bloco
                         // apenas a primeira sequencia entra no if

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { // apenas o ; está no bloco do if
        console.log(num)
    }
}
teste2(6)
teste2(8)