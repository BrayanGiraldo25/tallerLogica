alert("Buenos dias profe, aqui le dejo mi trabajo");

console.log("Ejercicio 1: Comparacion de edad");
let edad = prompt("Ingresa tu edad (ejercicio 1):");
if(edad >= 18){
    console.log("Eres mayor de edad");
} else{
    console.log("eres menor de edad");
}
console.log("Ejercicio 2: Numero Positivo/Negativo");
let Digito1 = prompt("Ingresa un numero (ejercicio 2)");
if(Digito1 >= 0){
    console.log("Numero Positivo");
} else {
    console.log("Numero Negativo");
}
console.log("Ejercicio 3: Par o Impar");
let Digito2 = prompt("Ingresa un numero, la consola verificara si es Par o Impar (Ejercicio 3)");
if(Digito2%2 == 0){
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}
console.log("Ejercicio 4: Calculo de Descuento");
let Descuento = prompt("Ingrese un total de compra (Ejercicio 4)");
if (Descuento > 100){
    console.log("El total de compra es de mas de 100$, se le aplicara un descuento de 10%");
} else{
    console.log("El total de compra es de menos de 100$, no se aplica descuento");
}
console.log("Ejercicio 5: Comparador");
let Digito3 = prompt("Ingresa un primer digito (Ejercicio 5)");
let Digito4 = prompt("Ingresa un segundo digito (Ejercicio 5)");
if (Digito3 > Digito4){
    console.log("El digito " + Digito3 + " Es mayor a " + Digito4);
} else if(Digito3 = Digito4){
    console.log("El digito " + Digito3 + " Es menor a " + Digito4);
} else {
    console.log("Ambos digitos tienen el mismo valor");
}
console.log("Ejercicio 6: Clasificacion Edad");
let Edad2 =prompt("Ingresa tu edad para clasificarte (Ejercicio 6)");
if (Edad2 < 12){
    console.log("Eres un niño");
} else if(Edad2 >= 15 && Edad2 < 18){
    console.log("Eres un adolecente");
} else if(Edad2 >= 18 && Edad2 < 64){
    console.log("Eres un adulto");
} else if(Edad2 > 65){
    console.log("Eres un adulto mayor");
} else if (Edad2 > 120){
    console.log("Eres tutan kamon");
}
console.log("Ejercicio 7: Clasificacion de Notas");
let nota = prompt("Ingresa tu nota del 0 al 100 (Ejercicio 7)");
if (nota < 50){
    console.log("Insuficiente");
}else if(nota >= 50 && nota < 70){
    console.log("Suficiente");
}else if (nota >= 70 && nota < 90){
    console.log("Buena");
}else if (nota > 90 && nota <= 100){
    console.log("Excelente");
} else {
    console.log("Error, ingrese el numero nuevamente");
}
console.log("Ejercicio 8: Eleccion de Menu");
let Menu = prompt("Elige tu comida favorita: Pizza, Hamburguesa o Tacos").toLowerCase;
switch(Menu){
    case "pizza":
        console.log("Te gusta la Pizza");
        break;
    case "hamburguesa":
        console.log("Te gusta la hamburguesa");
        break;
    case "tacos":
        console.log("Te gustan los tacos");
        break;
    default:
        console.log("Error, ingresa una de las 3 comidas")
    }


