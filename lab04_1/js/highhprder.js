/*
La forma Tradicional
*/

let a1 = [1,2,3,4,5,6,7,8,9,10]
let suma = 0;
for ( i = 0; i < a1.length; i++){
    suma = suma + a1[i];
}



console.log( `La suma tradicional es $(suma)`);


/*
Function High Horder :Reduce
*/


const suma2 = a1.reduce (( total , valorActual) =>{
    return total + valorActual;


})

console.log(`La suma con Reduce es $(suma)`)    







/*
Function High Order : FOREACH
*/

let suma3 = 0;
 a1. forEach( item => {
    suma3 = suma3 + item;
})
console.log( `La suma con FOREACH es ${suma3}` );

/*
Function High Order : FILTER
*/

let a2 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13];
const pares  = a2.filter(n => {
    return n % 2 == 0;
})


console.log ( `Los PARES usando FILTER son $(pares)`);

/*
Funciontion High Order : MAP
*/


const alumnos = [ "John","Pepe","Ana","Luis","Dora"];
const asistencia = alumnos.map (alumno => {
    return alumno + "Asistio";
})
console.log(`La Asistencia usando MAP es $(asistencia)`);













