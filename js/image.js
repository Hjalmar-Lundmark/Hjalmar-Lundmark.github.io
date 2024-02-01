let modalImage = document.getElementById("modal-image");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let body = document.getElementById("body");

let getImgs = document.querySelectorAll("li > div > img");
let images = [];

getImgs.forEach((image) => {
    images.push(image.src);
});

function openImg(smallImg) {
    let src = smallImg.src;
    modal.style.display = "flex";
    modalImage.src = src;

    body.style.overflow = "hidden";
}

function cycleImg(direction) {
    let currentImg = modalImage.src;
    let currentIndex = images.indexOf(currentImg);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
        nextIndex = images.length - 1;
    } else if (nextIndex > images.length - 1) {
        nextIndex = 0;
    }

    modalImage.src = images[nextIndex];
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
};
