let cartaVirada = false;

let primeiraCarta; 
let segundaCarta;

const deck = ['bobrossparrot.gif', 'bobrossparrot.gif',
            'explodyparrot.gif', 'explodyparrot.gif', 
            'fiestaparrot.gif','fiestaparrot.gif', 
            'metalparrot.gif','metalparrot.gif',
            'revertitparrot.gif','revertitparrot.gif', 
            'tripletsparrot.gif', 'tripletsparrot.gif',
            'unicornparrot.gif', 'unicornparrot.gif' ];
let qtdCartas;
iniciaJogo();

function iniciaJogo() {
    qtdCartas = Number(prompt('Com quantas cartas você quer jogar?'));

    if (qtdCartas % 2 == 0 && qtdCartas >= 4 && qtdCartas <= 14) {
        distribuiCartas();
    } else if (qtdCartas % 2 != 0 ) {
       alert =('Por favor insira um número par entre 4 e 14');
        iniciaJogo();
    }
    
}

function misturar() {
    return 0.5 - Math.random();
}



function distribuiCartas() {
 const painel = document.querySelector('.cards');
 painel.innerHTML = '';
 let cartasNoJogo = [];

 for (let i = 0; i < qtdCartas; i++) {
    cartasNoJogo.push(deck[i]);
 }

 cartasNoJogo.sort(misturar);

for (let i = 0; i < qtdCartas; i ++) {
    const cartasTemplate = `<div class="card">
                <img class="back-card" src=${cartasNoJogo[i]} alt="">
                <img class="front-card" src="front.png" alt="">
            </div>`
    painel.innerHTML += cartasTemplate;
}
} 
const cartas = document.querySelectorAll('.card')

function viraCarta() {
    this.classList.add('virada');

    if (!cartaVirada) {
        cartaVirada = true;
        primeiraCarta = this
        return;
    }

    segundaCarta = this;
    cartaVirada = false;

    checar()
}

function checar() {
    if (primeiraCarta.isEqualNode(segundaCarta) === true) {
        desabilitarCartas();
        return;
    }
    desvirarCartas();
}

function desabilitarCartas() {
    primeiraCarta.removeEventListener('click', viraCarta);
    segundaCarta.removeEventListener('click', viraCarta);
}

function desvirarCartas(){
    setTimeout(() => {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
    }, 1500);
}

cartas.forEach(carta => carta.addEventListener('click',viraCarta))

