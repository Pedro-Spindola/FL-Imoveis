// --- --- PAGINA INDEX --- ---

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
// Evento que vai colocar o texto escolhido no label e fechar a label de escolha após a escolha do atributo.
radiosPretencao.forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.checked) {
            labelPretencaoTexto.textContent = this.value;
            box1.classList.remove('open');
        }
    });
});
// Evento que vai colocar o texto escolhido no label e fechar a label de escolha após a escolha do atributo.
radiosTipos.forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.checked) {
            labelTiposTexto.textContent = this.value;
            box2.classList.remove('open');
        }
    });
});

const sliderFiltro = document.querySelector('.box-bar-filtros');
const btnFiltros = document.getElementById('btn-filtros');

btnFiltros.addEventListener("click", function(){
    // Verifica se a classe .open já está presente na div
    const Open = sliderFiltro.classList.contains('open');

    // Se a classe .open já estiver presente, remove-a; caso contrário, adiciona-a
    if (Open) {
        sliderFiltro.classList.remove('open');
    } else {
        sliderFiltro.classList.add('open');
    }
});


const radiosDormitorios = document.querySelectorAll('.box-2-filtros input[type="radio"]');

// Adiciona um event listener para cada botão de rádio
radiosDormitorios.forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove a classe 'checked' de todos os rótulos
        document.querySelectorAll('.box-2-filtros label').forEach(label => {
            label.classList.remove('checked');
        });
        // Adiciona a classe 'checked' ao rótulo do botão de rádio selecionado
        if (this.checked) {
            this.parentNode.classList.add('checked');
        }
    });
});

const radiosVagas = document.querySelectorAll('.box-4-filtros input[type="radio"]');

// Adiciona um event listener para cada botão de rádio
radiosVagas.forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove a classe 'checked' de todos os rótulos
        document.querySelectorAll('.box-4-filtros label').forEach(label => {
            label.classList.remove('checked');
        });
        // Adiciona a classe 'checked' ao rótulo do botão de rádio selecionado
        if (this.checked) {
            this.parentNode.classList.add('checked');
        }
    });
});

// Seleciona os campos de entrada
const minValor = document.getElementById('minValueValor');
const maxValor = document.getElementById('maxValueValor');
const minArea = document.getElementById('minValueArea');
const maxArea = document.getElementById('maxValueArea');

// Adiciona um event listener para interceptar a entrada do usuário
minValor.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
});

maxValor.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
});

// Adiciona um event listener para interceptar a entrada do usuário
minArea.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
});

maxArea.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
});


///  COMEÇA AQUI O MEU DB
document.addEventListener('DOMContentLoaded', function() {
    fetchImoveis();
});

async function fetchImoveis() {
    try {
        const response = await fetch('http://localhost:3000/api/imoveis');
        const imoveis = await response.json();

        const container = document.querySelector('.box-grid-lancamentos');
        container.innerHTML = '';

        imoveis.forEach(imovel => {
            const boxImovel = document.createElement('div');
            boxImovel.classList.add('box-imovel');

            boxImovel.innerHTML = `
                <div class="box-imovel-imagem">
                    <img class="imovel-imagem" src="${imovel.image}" alt="">
                </div>
                <div class="box-imovel-informacao">
                    <div class="imovel-div-infomacao">
                        <h4 class="imovel-tipo">${imovel.tipo}</h4>
                        <h3 class="imovel-valor">R$ ${imovel.valor}</h3>
                        <h4 class="imovel-endereco">${imovel.endereco}</h4>
                        <h4 class="imovel-setor">${imovel.setor}</h4>
                    </div>
                    <div class="imovel-div-icones">
                        <div class="icon-1 box-icone">
                            <img class="icon-area icones" src="image/ruler.svg" alt="">
                            <h5>${imovel.area}m²</h5>
                        </div>
                        <div class="icon-2 box-icone">
                            <img class="icon-garagem icones" src="image/car.svg" alt="">
                            <h5>${imovel.garagem}</h5>
                        </div>
                        <div class="icon-3 box-icone">
                            <img class="icon-quartos icones" src="image/bed.svg" alt="">
                            <h5>${imovel.quartos}</h5>
                        </div>
                        <div class="icon-4 box-icone">
                            <img class="icon-wc icones" src="image/bath-solid.svg" alt="">
                            <h5>${imovel.banheiros}</h5>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(boxImovel);
        });

        // Reinicializa o slider
        $('.box-grid-lancamentos').slick('refresh'); // Atualiza o slider

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

  
