function encontrarPrimeraVocal(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    texto = texto.toLowerCase(); // Convertimos el texto a minúsculas para comparar

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            return `La primera vocal es "${texto[i]}" y está en la posición Nº${i + 1}.`;
        }
    }

    return 'No se encontraron vocales en el texto.';
}

const texto = prompt('Introduce un texto:');
const resultado = encontrarPrimeraVocal(texto);
console.log(resultado);

/*Comenzamos definiendo una función llamada encontrarPrimeraVocal que toma un texto como parámetro.
Dentro de la función, creamos un array de vocales que contiene todas las vocales.
Luego, convertimos el texto a minúsculas utilizando toLowerCase() para asegurarnos de comparar correctamente las vocales.
A continuación, utilizamos un bucle for para iterar sobre cada caracter del texto.
En cada iteración, comparamos si el caracter actual está incluido en el array de vocales utilizando includes.
Si el caracter es una vocal, retornamos una cadena de texto indicando la primera vocal encontrada y su posición.
Si no se encuentra ninguna vocal en el texto, se retorna la cadena "No se encontraron vocales en el texto."
Luego, utilizamos prompt para solicitar al usuario que introduzca un texto.
El texto ingresado se guarda en la variable texto.
Luego, llamamos a la función encontrarPrimeraVocal pasando texto como argumento y guardamos el resultado en la variable resultado.
Despues, mostramos el resultado por pantalla utilizando console.log, al ejecutar el código, se abrirá un cuadro de diálogo donde podrás ingresar el texto.
Finalmente, el resultado con la posición de la primera vocal será mostrado en la consola.
*/