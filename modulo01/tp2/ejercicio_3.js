var numero = parseInt(prompt("Ingrese un número entero para calcular su factorial:"));
var factorial = 1;

for (var i = 1; i <= numero; i++) {
  factorial *= i;
}

console.log("El factorial de", numero, "es:", factorial);

/*Utilizamos la función parseInt junto con prompt para solicitar al usuario que ingrese un número entero para calcular su factorial.
Luego, creamos una variable factorial inicializada en 1.
Utilizamos un bucle for para iterar desde 1 hasta el número ingresado por el usuario.
En cada iteración, multiplicamos el valor de factorial por el valor actual del bucle (i) usando *=, lo que nos permite acumular el producto de todos los números desde 1 hasta el número ingresado.
Finalmente, mostramos el resultado del factorial por consola utilizando console.log().
*/