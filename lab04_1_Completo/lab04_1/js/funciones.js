function factorial( n ) {
    if ( n == 1 ) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

const factorial2 = function fact( n) {
    return n < 2 ? 1 : n * factorial2(n-1);
}

function proceso() {
    console.log("Entrando a proceso");
    let valor = document.getElementById("numero").value;
    let rpta1 = factorial( valor );
    let rpta2 = factorial2(valor);

    document.getElementById("rpta").innerHTML = "<p> RPTA 1 : " + rpta1 +" RPTA 2 : " + rpta2 + "</p>";
    console.log("Saliendo de proceso");

}