let btn_click = document.querySelector('#btn-click');
let btn_reset = document.querySelector('#btn-reset');
let screen = document.querySelector('.screen');
let contador = 0;

btn_click.addEventListener('click', (e) => {
    contador++;
    screen.innerHTML = contador;
});

btn_reset.addEventListener('click', (e) => {
    contador = 0;
    screen.innerHTML = contador;
});