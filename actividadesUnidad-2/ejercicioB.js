`use strict`
//Realizar un programa que permita sumar los 150 primeros números.

function sumarNumeros() {
    let acumulador = 0;
    for (let i = 0; i <= 200; i++) {
        if ((i > 0) && (i <= 150)) {
            console.log(i);
        }
        acumulador = acumulador + i;
    }
    console.log(acumulador)
}
sumarNumeros();