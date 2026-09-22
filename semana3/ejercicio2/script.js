const containerElement = document.getElementById("cards-container");

//#1
const cardElement = document.createElement("div");
cardElement.classList. add("card");

//#2
const imageContainerElement = document.createElement("div");
imageContainerElement.classList.add("card-image-container");

/#3
const imageElement = document.createElement("img");
imageElement.classList.add("card-image");
imageElement. src= "./images/001.png";

containerElement. appendChild(cardElemen)

cardElement.appendChild(imageContainerElement);

imageContainerElement.appendChild(imageElement);
