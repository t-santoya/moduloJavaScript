`use strict`

//Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.

let convertir = prompt("Marca 1 para convertir grados celsius a grados fahrenheit, marca 2  para convertir de grados fahrenheit a  grados celsius");
if (convertir == 1) {
    let celsius = parseFloat(prompt("ingresar el grado celsius para convertirlo a fahrenheit"));

    let Fahrenheit = 9 / 5 * celsius + 32;


    alert(" el grado Fahrenheit es: " + Fahrenheit);
}
else if (convertir == 2) {

    fahrenheit = parseFloat(prompt("ingresar el grado fahrenheit para convertirlo a celsius"));
    celsius = 5 / 9 * (fahrenheit - 32);

    alert(" el grado celsius es: " + celsius);
}
else {
    alert(" La opcion no es valida  por favor selecciona el numero 1 para convertir grados celsius a fahrenheit o el numero 2 para convertir de grados fahrenheit a celsius");

}
