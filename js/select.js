const imgs = document.getElementById("container-img");
const img = document.querySelectorAll("#container-img img");
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let idx = 0;

function showNextImage() {
    idx++;
    if (window.innerWidth <= 999 && window.innerWidth > 768) {
        if (idx > img.length - 2) {
            idx = 0;
        }
        imgs.style.transform = `translateX(${-idx * (100 / 3)}vw)`;
    } else if (window.innerWidth <= 768) {
        if (idx > img.length - 1) {
            idx = 0;
        }
        imgs.style.transform = `translateX(${-idx * 100}vw)`;
    } else {
        if (idx > img.length - 3) {
            idx = 0;
        }
        imgs.style.transform = `translateX(${-idx * (100 / 3)}vw)`;
    }
}

function showPrevImage() {
    idx--;
    if (window.innerWidth <= 999 && window.innerWidth > 768) {
        if (idx < 0) {
            idx = img.length - 3;
        }
        imgs.style.transform = `translateX(${-idx * (100 / 3)}vw)`;
    } else if (window.innerWidth <= 768) {
        if (idx < 0) {
            idx = img.length - 1;
        }
        imgs.style.transform = `translateX(${-idx * 100}vw)`;
    } else {
        if (idx < 0) {
            idx = img.length - 3;
        }
        imgs.style.transform = `translateX(${-idx * (100 / 3)}vw)`;
    }
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
