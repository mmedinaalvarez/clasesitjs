//condiciones -> COMPARACIONES IGUAL,MAYOR,MENOR,ETC ==> devuelve un valor BOOLLEANO (false/true)

const condition1 = 1 === "1" //exactamente igual (iguyal en valor y en tipo de dato) el primero es en tipo number
const condition2 = 1 == "1" // simplemente igual (igual en valor)
console.log("condition1", condition1)
console.log("condition2",condition2)


const condition3 = 5 > 6
const condition4 = 5 < 6
const condition5 = 4 >= 4
const condition6 = 3 <= (1 + 2)
console.log("condition3",condition3)
console.log("condition4",condition4)
console.log("condition5",condition5)
console.log("condition6",condition6)
//OPERACIOINES MATEMATICAS.
let suma = 10 + 30
const resta = 25 - 14
const multipl = 7 * 8
const division = 49 / 7

console.log("suma",suma)
console.log("resta",resta)
console.log("multiplicacion",multipl)
console.log("divison",division)


// Acumulador
console.log("Acumulador", ++suma)

//METODO DE CONCATENACION DE STRINGS

const saludo = "Hola"
const saludoCompleto = saludo.concat(" como estas?")
console.log(saludoCompleto)


//BLOQUES Y BUCLES -> ESTRUCTURAS REPETITIVAS

const x = 8
const y = 8

if (x > y)
{
    console.log("x es mayor a y")
} else if (y>x){
    console.log("y es mayor a x")
} else {
    console.log("Los valores son iguales")
}

// let ovejas = 0
// console.log("Cantidad de ovegas", ovejas)
// ++ovejas
// console.log("Cantidad de ovegas", ovejas)
// ++ovejas
// console.log("Cantidad de ovegas", ovejas)

for (let ovejas = 0;ovejas < 50 ; ovejas++) {
    if(ovejas % 2 ===0){ //operacion matem -> Modulo (devuelve el resto de la division)
    console.log("cantidad de ovejas",ovejas)
    }  
}