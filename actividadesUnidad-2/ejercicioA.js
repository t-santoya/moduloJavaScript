`use strict`
/*Realizar un programa que permita generar 100 números e imprimir solo los
números pares.*/


function numerosPares() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }

    }
}
numerosPares();