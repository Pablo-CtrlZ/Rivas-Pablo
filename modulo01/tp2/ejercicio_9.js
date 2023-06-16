function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    const promedio = suma / notas.length;
    return promedio;
}

function imprimirResultado(promedio) {
    if (promedio < 5) {
        document.write(`Reprobado, su promedio es: ${promedio}`);
    } else if (promedio >= 6 && promedio <= 8) {
        document.write(`Aprobado, su promedio es: ${promedio}`);
    } else {
        document.write(`Sobresaliente, su promedio es: ${promedio}`);
    }
}

const notas = [];
n = prompt("Ingrese la cantidad de notas de evaluaciones que realizó en el trimestre", "...")
for (let i = 0; i < n; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));

    while (nota < 0 || nota > 10) {
        nota = parseFloat(prompt(`Nota inválida. Ingrese la nota ${i + 1}:`));
    }

    notas.push(nota);
}

const promedioNotas = calcularPromedio(notas);
imprimirResultado(promedioNotas);

/*Primero definimos una función llamada calcularPromedio que toma un array de notas como parámetro.
Dentro de la función, utilizamos un bucle for para sumar todas las notas y luego dividimos la suma por la cantidad de notas para obtener el promedio.
Luego, definimos una segunda función llamada imprimirResultado que toma el promedio como parámetro.
Dentro de esta función, utilizamos declaraciones if y else if para comprobar el valor del promedio y mostrar el resultado correspondiente utilizando document.write.
Definimos un array vacío, que se llenará con los valores de las notas que ingrese el usuario mediante un prompt que solicite la cantidad de notas de evaluaciones.
Utilizando la declaración for definimos una variable i como contador y guardamos las notas solicitadas con el prompt en la variable nota.
La declaración while restringe las notas que pueden ser ingresadas, devolviendo un mensaje que notifica que la nota ingresada es inválida y solicitando un nuevo ingreso.
Con notas.push cargamos el array con las notas del alumno que fueron ingresados por el usuario.
Calculamos el promedio llamando a la función calcularPromedio pasando notas como argumento.
Guardamos el resultado en la variable promedioNotas.
Luego, llamamos a la función imprimirResultado pasando promedioNotas como argumento para mostrar en pantalla si el alumno está "Reprobado", "Aprobado" o "Sobresaliente".
*/