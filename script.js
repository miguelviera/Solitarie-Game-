
const body = document.querySelector("body");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");


body.style.textAlign = "center";

button.addEventListener("click", function () {
    const arrColor = [];

    for (let i = 0; i < 3; i++) {
        arrColor.push(Math.floor(Math.random() * 255) + 1);
    }

    const colorNum = `rgb(${arrColor[0]}, ${arrColor[1]}, ${arrColor[2]})`;
    const total = arrColor[0] + arrColor[1] + arrColor[2];
    body.style.backgroundColor = colorNum;
    h1.innerText = colorNum;

    if (total > 200) {
        h1.style.color = "black";
    } else {
        h1.style.color = "white";
    }

})

// This is my first script change




// button.addEventListener("click", function(){
//     const firstNum = Math.floor(Math.random() * 255) + 1;
//     const secondNum = Math.floor(Math.random() * 255) + 1;
//     const thirdNum = Math.floor(Math.random() * 255) + 1;
//     const colorNum = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
//     body.style.backgroundColor = colorNum;
//     h1.innerText = colorNum;
// })






