const backgroundItem = document.querySelector('.background-item');
const image0 = document.querySelector('.image0');
const distanciaDoTopo = (image0.offsetTop + image0.height) - 200;

function colocaTop () {
backgroundItem.style.top = distanciaDoTopo + 'px';
}

colocaTop();

//-----Modal-----//

const botoesAbrir = document.querySelectorAll('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('[data-modal="container"]');
const events = ['click', 'touchstart'];

if(botoesAbrir && botaoFechar && modalContainer) {
    function toggleModal(e) {
        e.preventDefault();
        modalContainer.classList.toggle('ativo');
    }

    function cliqueForaModal(e) {
        if(e.target === this){
            toggleModal(e);
        }
    }

    botoesAbrir.forEach((i) => {
        events.forEach((event) => {i.addEventListener(event, toggleModal);})
    })
    events.forEach((event) => {botaoFechar.addEventListener(event, toggleModal);})
    events.forEach((event) => {modalContainer.addEventListener(event, cliqueForaModal);})
}