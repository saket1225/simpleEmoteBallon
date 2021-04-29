let cursor = document.querySelector(".cursorContent")
let body = document.querySelector("body")
let buttonClicked = false;
let pageX = "";
let pageY = "";

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    pageX = e.pageX;
    pageY = e.pageY;
})

window.addEventListener("mousedown", (e) => {
    buttonClicked = true;
})

window.addEventListener("mouseup", (e) => {
    buttonClicked = false;
})

function removeBallonAnimation(element) {
    element.style.top = `${element.offsetTop -=  Math.floor((Math.random() * 800) + 500)}px`;

    setInterval(() => {
        element.style.left = `${element.offsetLeft +=  Math.floor((Math.random() * 1) + 0.3).toFixed(1)}px`;
    },  ((Math.random() * 1) + 0.5).toFixed(1))

    setInterval(() => {
        element.style.left = `${element.offsetLeft -=  Math.floor((Math.random() * 1.4) + 0.5).toFixed(1)}px`;
    },  ((Math.random() * 0.7) + 0.1).toFixed(1))

}

setInterval(() => {
    if (buttonClicked == true){
        var h1 = document.createElement("h1")
        var imageCreated =  document.createTextNode("🤩")

        h1.appendChild(imageCreated)

        h1.classList.add("clickedImage")

        h1.style.top = pageY + 'px';
        h1.style.left = pageX + 'px';

        body.appendChild(h1)

        removeBallonAnimation(h1)

        setTimeout(() => {
            body.removeChild(h1)
        }, 3000)
    }
}, 10)
