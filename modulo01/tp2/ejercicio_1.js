var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar cuál de los "elementos de texto" es mayor en longitud
var elementosTexto = valores.filter(function (elemento) {
    return typeof elemento === "string";
});

var elementoMayor = "";
var longitudMayor = 0;

elementosTexto.forEach(function (elemento) {
    if (elemento.length > longitudMayor) {
        elementoMayor = elemento;
        longitudMayor = elemento.length;
    }
});

console.log("El elemento de texto mayor es:", elementoMayor);

// 2. Imprimir los elementos de menor a mayor cantidad de letras
var elementosOrdenados = elementosTexto.sort(function (a, b) {
    return a.length - b.length;
});

console.log("Los elementos de texto ordenados por longitud son:", elementosOrdenados);

// 3. Realizar las cuatro operaciones matemáticas básicas con los dos elementos numéricos
var elementosNumericos = valores.filter(function (elemento) {
    return typeof elemento === "number";
});

var suma = elementosNumericos[0] + elementosNumericos[1];
var resta = elementosNumericos[0] - elementosNumericos[1];
var multiplicacion = elementosNumericos[0] * elementosNumericos[1];
var division = elementosNumericos[0] / elementosNumericos[1];

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);


/*Este código realizará las siguientes acciones:

1. Filtra los elementos de texto del array valores utilizando el método filter y la función de callback que comprueba con el operador === si el tipo del elemento es una cadena.
2. Itera sobre los elementos de texto y encuentra el elemento con la longitud más larga.
3. Imprime el elemento de texto mayor encontrado.
4. Ordena los elementos de texto por longitud utilizando el método sort y la función de comparación que compara las longitudes de las cadenas.
5. Imprime los elementos de texto ordenados por longitud.
6. Filtra los elementos numéricos del array valores utilizando el método filter y la función de callback que comprueba con el operador === si el tipo del elemento es un número.
7. Realiza las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división) utilizando los dos elementos numéricos.
8. Imprime los resultados de las operaciones matemáticas.
*/