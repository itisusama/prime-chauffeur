// Navbar
let mobileToggler = document.getElementById('pc-navbar-mobile-toggle');
let mobileNav = document.getElementById('pc-mobile-navbar');
let navClose = document.getElementById('pc-mobile-navbar-close');

mobileToggler.addEventListener('click', ()=>{
    mobileNav.classList.add('navbar-active');
});

navClose.addEventListener('click', () => {
    mobileNav.classList.remove('navbar-active');
});