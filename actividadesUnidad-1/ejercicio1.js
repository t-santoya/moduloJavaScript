`use strict`
//Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas

let convertir = prompt("Marca 1 para convertir de litros a centilitros, 2 para convertir de litros a decilitros, 3 para convertir de litros a galones y 4 para convertir de litros a onzas.");
let litros = parseFloat(prompt("ingresar la cantidad de litros."));
if (convertir == 1) {

    let centilitros = litros * 100;
    alert(litros + " litros son: " + centilitros + " centilitros.");

}
else if (convertir == 2) {
    let decilitros = litros * 10;
    alert(litros + " litros son: " + decilitros + " decilitros");
}
else if (convertir == 3) {
    let galones = litros * 0.26417;
    alert(litros + " litros son: " + galones + " galones");
}
else if (convertir == 4) {
    let onzas = litros * 33.814;
    alert(litros + " litros son: " + onzas + " onzas");
}
else {
    alert("Error,vuelve a intentarlo.")
}

