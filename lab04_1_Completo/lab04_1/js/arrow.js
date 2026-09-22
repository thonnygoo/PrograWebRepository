function sumarTradicional() {

    console.log("Enra a suma Tradicional");
    let v1 = document.getElementById("v1").value;
    console.log(document.getElementById("v1"));
    let v2 = document.getElementById("v2").value;

    let rpta = parseInt(v1) + parseInt(v2);
    document.getElementById("resultado").innerHTML = rpta
    
}

const sumarArrow1 = () => {
    console.log("Entra a sumaArrow1");
    let v1 = document.getElementById("v1").value;
    console.log(document.getElementById("v1"));
    let v2 = document.getElementById("v2").value;

    let rpta = parseInt(v1) + parseInt(v2);
    document.getElementById("resultado").innerHTML = rpta

    console.log("SAle de sumaArrow1");

}

const sumarArrow2 = () => {
    console.log("Entra a sumaArrow2");
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;

    let rpta =  sumaArrowOtraForma( parseInt(v1) , parseInt(v2) );
    document.getElementById("resultado").innerHTML = rpta

    console.log("SAle de sumaArrow2");

}

const sumaArrowOtraForma = ( a, b ) => a + b;