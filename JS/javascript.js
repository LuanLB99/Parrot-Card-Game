const deck = ['bobrossparrot.gif', 'bobrossparrot.gif', 'explodyparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif','fiestaparrot.gif', 'metalparrot.gif','metalparrot.gif'];
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
    <div class="front-card face"> <img src="front.png" alt=""> </div>
    <div class="back-card face"> <img src=${cartasNoJogo[i]} alt=""> </div>
    </div>`;
    painel.innerHTML += cartasTemplate;
}
}
