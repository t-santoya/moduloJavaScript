
`use strict`

let operaciones = prompt("Marca A para sumar, B para restar, C para multiplicar, D para dividir, E para sacar el resto");

let numero1 = parseFloat(prompt("ingresar el primer numero"));
let numero2 = parseFloat(prompt("ingresar el segundo numero"));


if (operaciones == "A") {
    let resultado = numero1 + numero2;
    alert("La suma del numero 1 y el numero 2 es: " + resultado);
}
else if (operaciones == "B") {

    let resultado = numero1 - numero2;
    alert("La resta del numero 1 y el numero 2 es: " + resultado);
}
else if (operaciones == "C") {

    let resultado = numero1 * numero2;
    alert("La multiplicacion del numero 1 y el numero 2 es: " + resultado);
}
else if (operaciones == "D") {

    let resultado = numero1 / numero2;
    alert("La division del numero 1 y el numero 2 es: " + resultado);
}
else if (operaciones == "E") {

    let resultado = numero1 % numero2;
    alert("La resto del numero 1 y el numero 2 es: " + resultado);
}
else {
    alert("La opcion que ingresaste esta errada, vuelve a intentarlo.")
}
