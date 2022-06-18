/* const deck = ['bobrossparrot.gif', 'bobrossparrot.gif',
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
    const cartasTemplate = `<div class="card" onclick="viraCarta(this)">
    <div class="front-card face"> <img src="front.png" alt=""> </div>
    <div class="back-card face"> <img src=${cartasNoJogo[i]} alt=""> </div>
    </div>`;
    painel.innerHTML += cartasTemplate;
}
} */
const cartas = document.querySelectorAll('.card')

function viraCarta() {
    this.classList.toggle('virada');
}

cartas.forEach(carta => carta.addEventListener('click',viraCarta))

