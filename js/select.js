const imgs = document.getElementById("container-img");
const img = document.querySelectorAll("#container-img img");
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Seleciona a imagem dentro da lista com a classe .nav-2
const imgBars = document.querySelector('.nav-2 img');

imgBars.addEventListener("click" ,function(){
    // Seleciona a div com a classe .nav-mobile
    const navMobile = document.querySelector('.nav-mobile');
    
    // Verifica se a classe .open já está presente na div .nav-mobile
    const isOpen = navMobile.classList.contains('open');

    // Se a classe .open já estiver presente, remove-a; caso contrário, adiciona-a
    if (isOpen) {
        navMobile.classList.remove('open');
    } else {
        navMobile.classList.add('open');
    }

});

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
