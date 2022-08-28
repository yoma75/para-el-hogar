// menu de barras navbar
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
  navbar.classList.remove('active');
}

// --------------------------------------------------------------

// icono de busqueda (lupa)
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
  searchForm.classList.remove('active');
}

// --------------------------------------------------------------

// Coloca el header de color blanco cuando baja el scroll en el eje Y, va conectada con estilos.scss linea 104
window.onscroll = () => {
  navbar.classList.remove('active');

  if(window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  }else{ 
    document.querySelector('.header').classList.remove('active');
  }
};


window.onload = () => {
  if(window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  }else{ 
    document.querySelector('.header').classList.remove('active');
  }
};


// --------------------------------------------------------------

// ----- Slider principal ---------
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// --------------------------------------------------------------

// ----- Slider Featured Products ---------
var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,  
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// --------------------------------------------------------------

// slider clients
var swiper = new Swiper(".clients-slider", {
  loop: true,
  grabCursor: true,  
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
