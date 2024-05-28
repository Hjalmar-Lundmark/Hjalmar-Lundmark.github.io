let modalImage = document.getElementById("modal-image");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let body = document.getElementById("body");
let text = document.getElementById("modal-text");

let getImgs = document.querySelectorAll("li > div > img");
let images = [];

getImgs.forEach((image) => {
    images.push(image.src);
});

function openImg(smallImg) {
    if (window.innerWidth < 768) {
        return;
    }

    let src = smallImg.src;
    modal.style.display = "flex";
    modalImage.src = src;
    text.innerHTML = smallImg.alt;

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
    text.innerHTML = getImgs[nextIndex].alt;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal || event.target === document.getElementById("modal-content")
        || event.target === document.getElementById("modal-upper") || event.target === document.getElementById("modal-inner")
    ) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
};
