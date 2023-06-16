let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let num = parseInt(prompt("Ingrese un valor entre 1 y 12"))

if (parseInt(num) >= 1 && parseInt(num) <= 12) {

    document.write("el mes corrrespondiente es: " + meses[num - 1]);
} else {
    num = prompt("ingrese otro valor")
}

//El programa pide al usuario que ingrese un numero del 1 al 12 y devuelve el mes correspondiente a dicho numero.