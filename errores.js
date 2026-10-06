var nombreUsuario = "Carlos";
let LIMITE = 100;

function calcularProcesamiento() {
    let resultadoParcial = 0;
for (i = 0; i <= LIMITE; i++) {

    resultadoParcial = i * 2;

if (i === 50) {
console.log("Mitad alcanzada: " + resultadoParcial);
}
}
console.log("Proceso finalizado. Último resultado: " + resultadoParcial);
}
calcularProcesamiento();
LIMITE = 150;