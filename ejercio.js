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


// ejercicio 4 

let frutas = ['pera', 'kiwi', 'mango', 'fresa'];
let frutasInvertidas = [];


for (let i = frutas.length - 1; i >= 0; i--) {
  frutasInvertidas.push(frutas[i]);
}


console.log(frutasInvertidas);

