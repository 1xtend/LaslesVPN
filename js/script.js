const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header__content');
const body = document.body;

burger.addEventListener('click', (e) => {
  burger.classList.toggle('is-active');
  navbar.classList.toggle('is-active');
  body.classList.toggle('is-fixed');
  headerContent.classList.toggle('is-active');

  headerContent.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      burger.classList.remove('is-active');
      navbar.classList.remove('is-active');
      body.classList.remove('is-fixed');
      headerContent.classList.remove('is-active');
    }
  });
  navbar.querySelectorAll('.to-close').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      burger.classList.remove('is-active');
      navbar.classList.remove('is-active');
      body.classList.remove('is-fixed');
      headerContent.classList.remove('is-active');
    });
  });
});
