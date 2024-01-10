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

  // Testimonial
var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  
  var carouselInner = document.querySelector("#carouselExampleControls .carousel-inner");
  var cardWidth = document.querySelector(".carousel-item").offsetWidth;
  var scrollPosition = 0;

  document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
    if (scrollPosition < carouselInner.scrollWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  });

  document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  });
} else {
  multipleCardCarousel.classList.add("slide");
}