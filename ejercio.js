// ejercicio 1

let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];
let nume = 0;
let numa = 67;

for (let i = 0; i < list.length; i++) {
 
    if(nume < list[i]){
        nume = list[i]
    }if(numa > list[i]){
        numa = list[i]
    }
}

console.log('el numero mayor es: '+ nume)
console.log('el numero menor es: '+ numa)