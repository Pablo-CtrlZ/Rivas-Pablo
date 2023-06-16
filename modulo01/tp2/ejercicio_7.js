function invertirTexto(texto) {
  return texto.split('').reverse().join('');
}

const texto = prompt("Ingresa el texto que quieres dar vuelta");
const textoInvertido = invertirTexto(texto);
document.write(textoInvertido);

/*Definimos una función llamada invertirTexto que toma un texto como parámetro.
Dentro de la función, utilizamos una serie de métodos de cadena para invertir el texto:
split(''): Divide el texto en un array de caracteres.
reverse(): Invierte el orden de los elementos en el array.
join(''): Une los elementos del array en una cadena de texto nuevamente.
Al combinar estos métodos, logramos invertir el texto.
Luego, definimos una variable texto y con un prompt pedimos al usuario que ingrese el texto que deseamos dar vuelta
Llamamos a la función invertirTexto pasando texto como argumento. Guardamos el resultado devuelto por la función en la variable textoInvertido.
Finalmente, mostramos el texto invertido por pantalla utilizando console.log.
*/