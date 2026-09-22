/*
La forma tradicional
*/
let a1 = [ 1,2,3,4,5,6,7,8,9,10];
let suma = 0;
for ( i= 0; i < a1.length; i++) {
    suma = suma + a1[i];
}
console.log( `La suma tradicional es ${suma}` );

/*
Function High ORder : REDUCE
*/
const suma2 = a1.reduce( ( total, valorActual) => {
    return total + valorActual;
} )
console.log( `La suma con REDUCE es ${suma2}` );

/*
Function High Order : FOREACH
*/
let suma3 = 0;
a1.forEach( item => {
    suma3 = suma3 + item;
})
console.log( `La suma con FOREACH es ${suma3}` );

/*
Function High Order : FILTER
*/
let a2 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13];
const pares = a2.filter( n => {
    return n % 2 == 0;
})
console.log( `Los PARES usando FILTER son ${pares}` );

/*
Function High ORde : MAP
*/
const alumnos = ["JOhn","Pepe","Ana","Luis","Dora"];
const asistencia = alumnos.map ( alumno => {
    return alumno + " ASISTIO";
})
console.log( `La asistencia usando MAP es ${asistencia}` );
