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

const pretencao = document.querySelector(' .box-select1');
const tipos = document.querySelector(' .box-select2');

const box2 = document.querySelector('.box-sel-tipos-drop');
const box1 = document.querySelector('.box-sel-preten-drop');

const labelPretencaoTexto = document.querySelector('.pretencao2');
const labelTiposTexto = document.querySelector('.tipos2');

const radiosPretencao = document.querySelectorAll('.box-sel-preten-drop input[type="radio"]');
const radiosTipos = document.querySelectorAll('.box-sel-tipos-drop input[type="radio"]');

pretencao.addEventListener("click" ,function(){
     // Verifica se a classe .open já está presente na div
    const isOpen = box1.classList.contains('open');

    // Se a classe .open já estiver presente, remove-a; caso contrário, adiciona-a
    if (isOpen) {
        box1.classList.remove('open');
    } else {
        box1.classList.add('open');
    }
});

tipos.addEventListener("click" ,function(){
     // Verifica se a classe .open já está presente na div
    const isOpen = box2.classList.contains('open');

    // Se a classe .open já estiver presente, remove-a; caso contrário, adiciona-a
    if (isOpen) {
        box2.classList.remove('open');
    } else {
        box2.classList.add('open');
    }
});

// Event listener para capturar cliques no documento inteiro
document.addEventListener("click", function(event) {
    // Verifica se o clique ocorreu dentro ou fora da caixa suspensa
    if (!box1.contains(event.target) && !pretencao.contains(event.target)) {
        // Se o clique ocorreu fora da caixa suspensa e do botão que abre a caixa suspensa, fecha a caixa suspensa
        box1.classList.remove('open');
    }
});

// Event listener para capturar cliques no documento inteiro
document.addEventListener("click", function(event) {
    // Verifica se o clique ocorreu dentro ou fora da caixa suspensa
    if (!box2.contains(event.target) && !tipos.contains(event.target)) {
        // Se o clique ocorreu fora da caixa suspensa e do botão que abre a caixa suspensa, fecha a caixa suspensa
        box2.classList.remove('open');
    }
});

radiosPretencao.forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.checked) {
            labelPretencaoTexto.textContent = this.value;
        }
    });
});

radiosTipos.forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.checked) {
            labelTiposTexto.textContent = this.value;
        }
    });
});
