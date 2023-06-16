let dato, resultado;
let val1 = window.prompt("Introduce tu nombre");
let val2 = window.prompt("Introduce tu apellido");
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `;
document.write(resultado);

//Las variables val1 y val2 no estaban definidas, se le agregó un let.
//Se eliminaron los puntos suspensivos que simulaban un placeholder.
//El programa utiliza el comando window.prompt dos veces, una para pedir que el usuario ingrese su nombre
//y otra para que ingrese su apellido. Luego, devuelve un resultado concatenando las dos variables guardadas
//y mostrandolo en el navegador mediante la funcion document.write