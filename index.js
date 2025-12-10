
// es un lenguaje de interpretado. necesitamos de algo externo para que pueda leer el js y se ejecute

console.log("Hello world!")

//Variables 

// Distintas formas de declarar una variable
//SCOPE === ALCANCE
// var -> scope global (y puede ser modificada sin querer, desde otros archivos) NO USAR
// ES2015 ->
// let -> scope de bloque, nos da mejor control de la variable
// const -> scope de bloque, pero a diferencia de let "NO SE PUEDE REASIGNAR UN VALOR!"
//LA QUE MAS SE VA A USAR ES CONST PORQUE ES LA QUE MAS CONTROL A NUESTRO CODIGO NOS VA A DAR
//TANTO VAR COMO LET PUEDEN SER REASIGNADAS

var a = "hola"
console.log(a)
a = "chau"
console.log(a)

if (true) {
    console.log(a)
}

let b = 33
console.log(b)
b = 55
console.log(b)
if(true)
{
    console.log(b)
}

//con = asignamos el valor a la variable
//se puede inicializar la variable sola como let b y despues reasignarle un valor

const c = 99
console.log(c)
console.log(c.toString())