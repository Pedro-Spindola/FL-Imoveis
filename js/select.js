const sliderContainer = document.querySelector('.box-imagens-imovel');
const images = document.querySelectorAll('.box-imagens-imovel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let indexImg = 0;

function updateSliderPosition() {
    const width = window.innerWidth / 3;
    sliderContainer.style.transform = `translateX(${-width * currentIndex}px)`;
}

function showPrevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 3 : currentIndex - 1;
    updateSliderPosition();
}

function showNextImage() {
    currentIndex = (currentIndex === images.length - 3) ? 0 : currentIndex + 1;
    updateSliderPosition();
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

window.addEventListener('resize', updateSliderPosition);
