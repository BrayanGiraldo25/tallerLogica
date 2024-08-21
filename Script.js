alert("Buenos dias profe, aqui le dejo mi trabajo");

let ejercicios = prompt("Eliga el ejercicio que quiera ejecutar (1 al 15)");

switch(ejercicios){ 
    case "1":
console.log("Ejercicio 1: Comparacion de edad");
let edad = prompt("Ingresa tu edad (ejercicio 1):");
if(edad >= 18){
    console.log("Eres mayor de edad");
} else{
    console.log("eres menor de edad");
}
    break;
    case "2":
console.log("Ejercicio 2: Numero Positivo/Negativo");
let Digito1 = prompt("Ingresa un numero (ejercicio 2)");
if(Digito1 >= 0){
    console.log("Numero Positivo");
} else {
    console.log("Numero Negativo");
}
    break;
    case "3":
console.log("Ejercicio 3: Par o Impar");
let Digito2 = prompt("Ingresa un numero, la consola verificara si es Par o Impar (Ejercicio 3)");
if(Digito2%2 == 0){
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}
    break;
    case "4":
console.log("Ejercicio 4: Calculo de Descuento");
let Descuento = prompt("Ingrese un total de compra (Ejercicio 4)");
if (Descuento > 100){
    console.log("El total de compra es de mas de 100$, se le aplicara un descuento de 10%");
} else{
    console.log("El total de compra es de menos de 100$, no se aplica descuento");
}
    break;
    case "5":
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
    break;
    case "6":
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
    break;
    case "7":
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
    break;
    case "8":
console.log("Ejercicio 8: Eleccion de Menu");
let Menu = prompt("Elige tu comida favorita: Pizza, Hamburguesa o Tacos").toLowerCase();
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
        console.log("Error, ingresa una de las 3 comidas");
    }
    break;
    case "9":
console.log("Ejercicio 9: Lados de un triangulo");
let lado1 = prompt("Eliga un numero del 1 al 10, ese sera el valor del primer lado (Ejercicio 9)");
let lado2 = prompt("Eliga un numero del 1 al 10, ese sera el valor del segundo lado (Ejercicio 9)");
let lado3 = prompt("Eliga un numero del 1 al 10, ese sera el valor del tercer lado (Ejercicio 9)");

if (lado1 > 10 && lado1 < 1 || lado2 > 10 && lado2 < 1 || lado3 > 10 && lado3 < 1){
    console.log("Numero no reconocido, eliga otro numero");
} else if(lado1 == lado2 && lado2 == lado3){
    console.log("Los 3 lados del triangulo son iguales, es un triangulo equilatero");
} else if(lado1 == lado2 && lado1 > lado3 || lado1 < lado3 || lado3 == lado2 && lado3 > lado1 || lado3 < lado1){
    console.log("2 de los 3 lados del triangulo son iguales, es un triangulo de Isoceles")
} else if(lado1 > lado2 && lado1 > lado3 || lado2 > lado1 && lado2 > lado3 || lado3 > lado1 && lado3 > lado2){
    console.log("Ningun lado es igual a otro, es un triangulo escaleno")
}
    break;
    case "10":
console.log("Ejercicio 10: Adivina el numero");
let numeroReal = 8;
let numeroD = prompt("Numero del 1 al 10, intenta adivinar cual es (Ejercicio 10)");
if (numeroD == numeroReal){
    console.log("Acertaste!");
} else {
   console.log("No es ese numero, intenta nuevamente");
}
    break;
    case "11":
console.log("Ejercicio 11: Calculo de Precio final")
let precio = prompt("Ingresa un valor, a ese valor se le aplicara un descuento (Ejercicio 11)");
let descuento2;
if(precio > 500){
    descuento2 = precio * 0.85;
    console.log("El total con descuento seria de " + descuento2 + "$");
} else if(precio >= 300 && precio <= 500){
    descuento2 = precio * 0.90;
    console.log("El total con descuento seria de " + descuento2 + "$");
} else if(precio < 300){
    descuento2 = precio * 0.95;
    console.log("El total con descuento seria de " + descuento2 + "$");
}
    break;
    case "12":
console.log("Ejercico 12: Año Bisiesto");
let año = prompt("Ingresa un año y te dire si es bisiesto o no (Ejercicio 12)");
if (año % 4 == 0){
    console.log("El año es bisiesto");
} else{
    console.log("El año no es bisiesto");
}
    break;
    case "13":
console.log("Ejercicio 13: Usuario y Contraseña");
let usuario = prompt("Ingrese su usuario (Ejercicio 13");
let contraseña = prompt("Ingrese su clave de 4 digitos (Ejercicio 13");
if (usuario == admin && contraseña == 1234){
    console.log("Acesso Concedido");
} else{
    console.log("Acceso Declinado");
}
    break;
    case "14":
console.log("Ejercicio 14: Buenos dias");
let dia = prompt("Ingresa una hora del dia, desde el 0 hasta el 23 (Ejercicio 14)");
if (dia >= 6 && dia < 12){
    console.log("Buenos dias!");
} else if (dia >= 12 && dia < 18){
    console.log("Buenas tardes!");
} else if (dia >= 18 && dia < 24 || dia >= 0 && dia < 6){
    console.log("Buenas noches!");
}
    break;
    case "15":
console.log("Ejercicio 15: Clasificacion Masa Corporal");
let IMC = prompt("Ingresa tu peso");
let altura = prompt("Ingrese su altura en centimetros");
let peso = IMC / altura * 2;
if (peso < 18.5){
    console.log("Eres de bajo peso");
} else if (peso >= 18.5 && peso < 24.9){
    console.log("Eres de peso moderado");
} else if (peso >= 24.9 && peso < 30.0){
    console.log("Eres de mucho peso");
} else if (Peso >= 30.0){
    console.log("Sufre de sobrepeso");
}
    break;
}