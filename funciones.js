const a = 5
const b = 7
const c = 10

// const suma1 = a + b
// const suma2 = b + c
// const suma3 = a + c

// console.log(suma1)
// console.log(suma2)
// console.log(suma3)

//Funcion es una porcion de codigo que nos sera de utilidad varias veces o no en nuestro proyecto

function suma(x,y) {
    const result = x + y
    console.log(result)
}

suma(a,b)
suma(b,c)
suma(a,c)

const d = 100
const e = 4
const f = 0
const g = 75

function division(param1,param2) {
    if(param2 === 0)
    {
        console.error("No se puede dividir por 0")
        return
    }
    const result = param1 / param2
    console.log(result)
}
division(d,e)
division(g,d)
division(d,f)

//funciones flecha arrow functions

const sumaArrow = (x,y) => {
    const result = x + y
    console.log(result)
}
sumaArrow(a,b)
sumaArrow(b,c)
sumaArrow(a,c)

//esto sirve si tengo un solo parametro
const simpleArrowFunc = param => {
    console.log(param)
}
simpleArrowFunc("Hola!!")

//tenemos dos tipos de funciones '
// 1. void' ejecutan simplemente un codigo (suma linea 15)
//2. retortan o devuelven un valor

//2.
function resta(x,y) {
    const result = x - y
    return result
}
const resultResta = resta(d,a)
console.log(resultResta)

const restaArrow = (x,y) => x-y
const resultRestaArrow = restaArrow(d,a)
console.log(resultRestaArrow)