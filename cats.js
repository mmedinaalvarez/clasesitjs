// const catsQuantity = 10

// for (let cat = 1; cat <= catsQuantity; cat++) {
//    const catString = "Gato #"
//    const catWithNumber = catString.concat(cat).concat(": ")
//    let catComplete
//    if (cat % 3 === 1) {
//         catComplete = catWithNumber.concat("😺")
//    } else if(cat % 3 === 2) {
//          catComplete = catWithNumber.concat("😸")
//    }else{
//      catComplete = catWithNumber.concat("😹")
//    }
//    console.log(catComplete)
// }


// const cantidadDeGatos = 10
// const cantidadDePasos = 4

// for (let cat = 1; cat <= cantidadDeGatos; cat++) {
//     const catString = "Gato #"
//     const catWithNumber = catString.concat(cat).concat(": 🐈 ")
    
//     let pasos = ""
//     for (let p = 0; p < cantidadDePasos; p++) {
//         pasos +="🐾"
//     }
//     console.log(catWithNumber.concat(pasos))
// }

const cantidadDeGatos = 20
const cantidadDePasos = 5

for (let cat = 1; cat <= cantidadDeGatos; cat++) {
   const catString = "Gato #"
   const catWithNumber = catString.concat(cat).concat(" : ")
   let catComplete
   if(cat % 2 === 0){
    catComplete = catWithNumber.concat("🐈‍⬛")
   }else{
    catComplete = catWithNumber.concat("🐈")
   }
   let pasos = ""
   for (let p = 0; p < cantidadDePasos; p++) {
        pasos +="🐾"
   }
   console.log(catComplete.concat(pasos))
}