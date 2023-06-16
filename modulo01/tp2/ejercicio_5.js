function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
}

const texto = "Hola Mundo";
const resultado = analizarCadena(texto);
console.log(resultado);

/*En este código, definimos una función llamada analizarCadena que toma una cadena de texto como parámetro.
Dentro de la función, comparamos si la cadena es igual a su versión en mayúsculas utilizando cadena.toUpperCase().
Si la comparación es verdadera, significa que la cadena está formada solo por mayúsculas. En ese caso, la función devuelve la cadena de texto correspondiente.
Si la comparación anterior no es verdadera, realizamos otra comparación para verificar si la cadena es igual a su versión en minúsculas utilizando cadena.toLowerCase().
Si esta comparación es verdadera, significa que la cadena está formada solo por minúsculas y la función devuelve la cadena de texto correspondiente.
Si ninguna de las dos comparaciones anteriores es verdadera, eso implica que la cadena contiene tanto mayúsculas como minúsculas, por lo que la función devuelve la cadena de texto correspondiente a una mezcla de ambas.
Luego, definimos una variable texto con la cadena que deseamos analizar y llamamos a la función analizarCadena pasando texto como argumento.
Guardamos el resultado devuelto por la función en la variable resultado. Finalmente, mostramos el resultado por pantalla utilizando console.log.
*/