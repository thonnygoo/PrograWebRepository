function sumarTradicional(){

    console.log("Entra a Suma Tradicional");
    let v1 = document.getElementById("v1").ariaValueMax;
    console.log(document.getElementById("v1"));
    let v2 = document.getElementById("v2").ariaValueMax;

    let rpta = parseInt(v1) + parseInt(v2);
    document.getElementById("resultado").innerHTML = rpta
}



const sumarArrow1 = () => {
    
    console.log("Entra a Suma Tradicional");
    let v1 = document.getElementById("v1").ariaValueMax;
    console.log(document.getElementById("v1"));
    let v2 = document.getElementById("v2").ariaValueMax;

    let rpta = parseInt(v1) + parseInt(v2);
    document.getElementById("resultado").innerHTML = rpta

    console.log("Sale de sumaArrow1")
}

const sumarArrow2 = () => {
    
    console.log("Entra a Suma Tradicional");
    let v1 = document.getElementById("v1").ariaValueMax;
    let v2 = document.getElementById("v2").ariaValueMax;

    let rpta = sumarArrowOtraForma(parseInt(v1), parseInt(v2));
    document.getElementById("resultado").innerHTML = rpta

    console.log("Sale de sumaArrow1")
}

const sumarArrowOtraForma = ( a, b) => a + b;