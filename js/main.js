let text = document.getElementById('text');
let foto1 = document.getElementById('foto1');
let foto2 = document.getElementById('foto2');
let foto3 = document.getElementById('foto3');
let foto4 = document.getElementById('foto4');
let foto5 = document.getElementById('foto5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    foto1.style.Top = value * -1.5 + 'px';
    foto2.style.left = value * -1.5 + 'px';
    foto3.style.left = value * 1.5 + 'px';
    foto4.style.left = value * -1.5 + 'px';
    foto5.style.top = value * 1.5 + 'px';

})