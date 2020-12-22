//Selectors
let header = document.querySelector('.header');
let humburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function(){
    let windowPosition = window.scrolly > 0;
    header.classList.toggle('active',window.scrollY>0)
})

hamburgerMenu.addEventListener('click', function(){
    header.classList.toggle('menu-open');
})