let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

 menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial';

    menuContent.classList.toggle('on', show);
    show = !show;
});

document.addEventListener('DOMContentLoaded', function() {
    alert('Bem-vindo ao MeowAmigo!');
});
