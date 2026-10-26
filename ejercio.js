// // ejercicio 1

// let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];
// let nume = 0;
// let numa = 67;

// for (let i = 0; i < list.length; i++) {
 
//     if(nume < list[i]){
//         nume = list[i]
//     }if(numa > list[i]){
//         numa = list[i]
//     }
// }

// console.log('el numero mayor es: '+ nume)
// console.log('el numero menor es: '+ numa)


// ejercico 2

// let numero = 7;
// let resultado = []

// for (let i = 0; i < 11 ; i++) {

//     resultado.push(numero + ' x ' + i + ' = ' + numero * i)
    
// }

// console.log(resultado)

// ejercico 3 


// function suma(...n){
//      return n.reduce((acumulado, actual) => acumulado + actual, 0);
// }

// console.log(suma(1, 2, 3))
// console.log(suma(1, 10))
// console.log(suma(1))


// // ejercicio 4 

// let frutas = ['pera', 'kiwi', 'mango', 'fresa'];
// let frutasInvertidas = [];


// for (let i = frutas.length - 1; i >= 0; i--) {
//   frutasInvertidas.push(frutas[i]);
// }


// console.log(frutasInvertidas);


//ejercicio 5


let horasRedesMundo = 2.7;
let horasRedesColombia = 3.6;
let diasAno = 365;





let horasAnoColombia = horasRedesColombia * diasAno;

let diasCompletosColombia = horasAnoColombia / 24;

let semanasColombia = diasCompletosColombia / 7;


let mesesColombia = diasCompletosColombia / 30;

let diferenciaHorasDia = horasRedesColombia - horasRedesMundo;
let diferenciaHorasAno = diferenciaHorasDia * diasAno;
let diasAdicionalesAlAno = diferenciaHorasAno / 24;


console.log("1. Horas acumuladas en Colombia al año:", horasAnoColombia, "horas.");
console.log("2. Equivalencia en días completos (24h):", diasCompletosColombia, "días.");
console.log("3. Equivalencia en semanas:", semanasColombia.toFixed(2), "semanas.");
console.log("4. Equivalencia en meses de 30 días:", mesesColombia, "meses.");
console.log("5. Días completos adicionales al año frente al promedio mundial:", diasAdicionalesAlAno.toFixed(2), "días.");

