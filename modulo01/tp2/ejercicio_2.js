var num1 = 3;
var num2 = 7;
if (num1 < num2) {
    console.log("num1 no es mayor que num2");
}
if (num2 > 0) {
    console.log("num2 es positivo");
}
if (num1 < 0) {
    console.log("num1 es negativo o distinto de cero");
}
if (num1 + 1 < num2) {
    console.log(`Incrementar en 1 unidad el valor de num1 no lo hace 
mayor o igual que num2`);
}

/*La estructura condicional if analiza en cada caso las variables num1 y/o num2 según una condición dada entre paréntesis
Luego, console.log devuelve por consola un string con el mensaje correspondiente*/