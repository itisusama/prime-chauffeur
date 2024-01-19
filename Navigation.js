const navigationTemplate = document.createElement('template');
navigationTemplate.innerHTML = `
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/css/style.css">
    
    <section class="pc-navbar container-fluid px-0">
      <nav class="pc-desktop-navbar bg-body-tertiary px-5 py-2 d-flex justify-content-between">
          <div class="pc-navbar-mobile-logo">
              <div class="pc-navbar-logo p-2"><i class="fa-solid fa-car"></i></div>
              <div class="pc-navbar-name"><h5>Prime Chauffeur</h5></div>
          </div>
          <div class="pc-navbar-list">
              <ul class="list-unstyled d-flex gap-1 align-items-center">
                  <li><b><a href="index.html">Home</a></b></li>
                  <li>
                      <div class="dropdown">
                          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cars
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="cars.html">Our Cars</a></li>
                          </ul>
                        </div>
                  </li>
                  <li>
                      <div class="dropdown">
                          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="airport.html">Airport Transfers</a></li>
                            <li><a class="dropdown-item" href="wedding.html">Wedding</a></li>
                            <li><a class="dropdown-item" href="events.html">Events</a></li>
                            <li><a class="dropdown-item" href="business.html">Business</a></li>
                            <li><a class="dropdown-item" href="tours.html">Tours</a></li>
                          </ul>
                      </div>
                  </li>
                  <li>
                      <div class="dropdown">
                          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Blog
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="single-blog.html">Single Blog</a></li>
                            <li><a class="dropdown-item" href="blogs.html">All Blogs</a></li>
                          </ul>
                      </div>
                  </li>
                  <li><a href="contact.html" style="margin-right: 10px;">Contact</a></li>
                  <li><a href="about.html" style="margin-right: 10px;">About</a></li>
                  <li><button type="button" class="pc-navbar-booknow px-3" onclick="window.location.href='cars.html'">Book Now</button></li>
              </ul>
          </div>
      </nav>
      <div class="pc-navbar-mobile-toggle"><a href="#" id="pc-navbar-mobile-toggle"><i class="fa-solid fa-bars fa-2xl"></i></a></div>
  </section>
  <section class="pc-mobile-navbar bg-light" id="pc-mobile-navbar">
    <div class="pc-mobile-navbar-close" id="pc-mobile-navbar-close"><i class="fa-solid fa-x"></i></div>

    <div class="container pc-mobile-list">
        <ul class="list-unstyled">
          <li><b><a class="btn" href="index.html">Home</a></b></li>
          <li>
              <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cars
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="cars.html">Our Cars</a></li>
                  </ul>
                </div>
          </li>
          <li>
              <div class="dropdown">
                          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="airport.html">Airport Transfers</a></li>
                            <li><a class="dropdown-item" href="wedding.html">Wedding</a></li>
                            <li><a class="dropdown-item" href="events.html">Events</a></li>
                            <li><a class="dropdown-item" href="business.html">Business</a></li>
                            <li><a class="dropdown-item" href="tours.html">Tours</a></li>
                          </ul>
                      </div>
          </li>
          <li>
              <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="blogs.html">All Blogs</a></li>
                    <li><a class="dropdown-item" href="single-blog.html">Single Blog</a></li>
                  </ul>
              </div>
          </li>
          <li><a class="btn" href="contact.html" style="margin-right: 10px;">Contact</a></li>
          <li><a class="btn" href="about.html" style="margin-right: 10px;">About</a></li>
          <li><button type="button" class="pc-navbar-booknow px-3" onclick="window.location.href='cars.html'">Book Now</button></li>
      </ul>
    </div>
  </section>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/script.js"></script>
`

class Navigation extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navigationTemplate.content);
    }
}

customElements.define('navigation-component', Navigation);
