function verificarParidad(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

const numero = 5;
const resultado = verificarParidad(numero);
console.log(`El número ${numero} es ${resultado}.`);

/*Comenzamos definiendo una función llamada verificarParidad que toma un número como parámetro.
Dentro de la función, utilizamos el operador de módulo % para verificar si el número es divisible por 2.
Si el resultado de la operación numero % 2 es 0, eso significa que el número es par y la función devuelve la cadena de texto "par".
En caso contrario, es decir, si el resultado no es 0, el número es impar y la función devuelve la cadena de texto "impar".
Luego, definimos una variable numero con el valor que queremos verificar (en este caso, 5) y llamamos a la función verificarParidad pasando numero como argumento.
Guardamos el resultado devuelto por la función en la variable resultado.
Finalmente, mostramos el resultado por pantalla utilizando console.log, utilizando una plantilla de cadena para mostrar el número y si es par o impar.
*/