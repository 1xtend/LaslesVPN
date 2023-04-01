// Navbar
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header__content');
const body = document.body;

function active() {
  burger.classList.toggle('is-active');
  navbar.classList.toggle('is-active');
  body.classList.toggle('is-fixed');
  headerContent.classList.toggle('is-active');
}

function inactive() {
  burger.classList.remove('is-active');
  navbar.classList.remove('is-active');
  body.classList.remove('is-fixed');
  headerContent.classList.remove('is-active');
}

burger.addEventListener('click', (e) => {
  active();

  headerContent.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      inactive();
    }
  });
  navbar.querySelectorAll('.to-close').forEach((elem) => {
    elem.addEventListener('click', inactive);
  });
});

// Swiper
const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
