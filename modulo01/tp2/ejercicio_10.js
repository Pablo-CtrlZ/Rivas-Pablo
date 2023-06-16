function obtenerCantidadDias(mes) {
    const fecha = new Date(2023, mes, 0);
    const cantidadDias = fecha.getDate();
    return `Tiene ${cantidadDias} días`;
}

const mes = prompt("Ingrese el número del mes para saber cuántos días tiene:", "");
const numeroMes = (parseInt(mes));
if (numeroMes >= 1 && numeroMes <= 12) {
    const cantidadDias = obtenerCantidadDias(numeroMes)
    console.log(cantidadDias);
}
/*Comenzamos definiendo una función llamada obtenerCantidadDias que toma el número del mes como parámetro.
Dentro de la función, creamos una nueva instancia del objeto Date utilizando el año 2023 y el número del mes proporcionado.
Específicamente, establecemos el día en 0 para obtener el último día del mes anterior.
Luego, utilizamos el método getDate para obtener el número de día correspondiente, que es la cantidad de días en el mes.
La función entonces devuelve un mensaje diciendo, por ejemplo `Tiene 31 días`
Después, utilizamos prompt para solicitar al usuario que ingrese el número del mes. El valor ingresado se guarda en la variable mes.
Con parseInt, convertimos el dato ingresado por el usuario a un valor de tipo numérico y lo almacenamos en la variable numeroMes
Utilizamos un bucle if donde especificamos un intervalo mayor o igual a 1 y menor o igual a 12 como condición.
Llamamos a la función obtenerCantidadDias con numeroMes como parámetro, y almacenamos el resultado de lo analizado en la variable cantidadDias
Finalmente, mostramos por consola mediante console.log la cantidad de días que tiene el mes que fue analizado por nuestra función.
*/