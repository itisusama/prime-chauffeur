// Navbar
let mobileToggler = document.getElementById('pc-navbar-mobile-toggle');
let mobileNav = document.getElementById('pc-mobile-navbar');
let navClose = document.getElementById('pc-mobile-navbar-close');

mobileToggler.addEventListener('click', ()=>{
    mobileNav.classList.add('navbar-active');
    mobileToggler.style.display = "none";
});

navClose.addEventListener('click', () => {
    mobileNav.classList.remove('navbar-active');
    mobileToggler.style.display = "block";
});

// forms
function showForm(formId) {
    // Hide all form sections
    document.getElementById('pc-oneway-form').style.display = 'none';
    document.getElementById('pc-bythehour-form').style.display = 'none';

    // Show the selected form section
    document.getElementById(formId).style.display = 'block';
  }