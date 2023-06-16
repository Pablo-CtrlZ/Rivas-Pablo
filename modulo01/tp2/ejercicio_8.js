function GenNumAleat() {
    let ArraydeNumeros = [];

    while (ArraydeNumeros.length < 100) {
        const numero = Math.floor(Math.random() * 100) + 1;

        if (!ArraydeNumeros.includes(numero)) {
            ArraydeNumeros.push(numero);
        }
    }

    return ArraydeNumeros;
}

const numAleat = GenNumAleat();

for (let i = 0; i < numAleat.length; i++) {
    document.write(numAleat[i] + '<br>');
}

/*En este código, definimos una función llamada GenNumAleat que utiliza un bucle while para generar números aleatorios sin repeticiones.
La función crea un array llamado ArraydeNumeros para almacenar los números generados.
Dentro del bucle while, generamos un número aleatorio entre 1 y 100 utilizando Math.random y Math.floor.
Luego, verificamos si el número generado ya existe en el array numeros utilizando includes.
Si a partir de verificar (con la adición del operador lógico ! a ArraydeNumeros) que el número no está presente, lo agregamos al array con push.
El bucle while continúa generando números aleatorios hasta que el array tenga una longitud de 100, asegurando así que se generen 100 números únicos.
Luego, llamamos a la función GenNumAleat y guardamos el resultado en la variable numAleat.
A continuación, utilizamos un bucle for para iterar sobre cada número en numerosAleatorios y lo imprimimos en pantalla utilizando document.write.
Usamos <br> para agregar un salto de línea después de cada número y que se muestren en líneas separadas una debajo de la otra.
*/