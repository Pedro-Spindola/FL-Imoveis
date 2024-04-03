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