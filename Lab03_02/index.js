//// Crear Un Nodo
const n1 =document.createElement("div");
48
const n2 = document.createElement("h1");
n2.textContent = "Ejemplo de H1";

const n3 = document.createElement("p");
n3. textContent = "Esta es una descripcion de lno que sea...";

const n4 = document.createElement("button");
n4. textContent = "Presiona AQUI";
n4.type = "button";

n1.appendChild(n2);
n1.appendChild(n3);
n1.append(n4);

const contenedor = document.getElementById("contenedor")
contenedor.appendChild(n1);



n4.addEventListener("click", ()=>{
    console.log("Hiciste Click!");

})