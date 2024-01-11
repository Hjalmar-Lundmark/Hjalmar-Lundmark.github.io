// let imageBox1 = document.getElementById("imageBox1");
let modalImage = document.getElementById("modal-image");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let body = document.getElementById("body");

function getImg(smallImg) {
    // imageBox1.src = smallImg.src;
    let src = smallImg.src;
    modal.style.display = "flex";
    modalImage.src = src;

    body.style.overflow = "hidden";
}

// Get the modal image tag

// Get the <span> element that closes the modal


// When the user clicks the big picture, set the image and open the modal
// imageBox1.onclick = function (e) {
//     var src = e.srcElement.src;
//     modal.style.display = "block";
//     modalImage.src = src;
// };

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
