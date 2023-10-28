`use strict`

/*Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina si
sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad
de gasolina despachada en litros*/

let galones = 4
let litros = galones * 3.78541;
let valorCentilitros = litros * 100 * 25;

console.log("Cantidad de gasolina despachada en litros:", litros, "litros");
console.log("Valor a pagar:", valorCentilitros, "centilitros");

