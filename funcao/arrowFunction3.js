let  comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(this)
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('--------------------------------')

let comparaComThisArrow = param => console.log(this === param)
comparaComThis(global)
comparaComThisArrow(module.exports)
comparaComThis(this)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)