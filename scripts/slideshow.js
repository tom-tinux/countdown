var slideTime = 2500; // 2.5 seconds
var images = [];

function preloadImage() {
    for (var i = 0; i < arguments.length; i++) {
        var image = new Image()
        image.src=preloadImage.arguments[i]
        images[i] = image.src;
    }
}

//-- usage --//
preloadImage(
    "./images/1.webp",
    "./images/2.webp",
    "./images/3.webp",
    "./images/4.webp",
    "./images/5.webp",
    "./images/6.webp",
    "./images/7.webp",
    "./images/8.webp",
)


function changePicture() {
    const rndInt = Math.floor(Math.random() * 8 ) + 1;
    document.getElementById("bg").style.backgroundImage = "url(" + images[rndInt] + ")";
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;