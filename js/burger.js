const var10 = document.querySelector('.header-container-top'),
      burger = document.querySelector('.btn-burger'),
      close = document.querySelector('.btn-close'),
      nav = document.querySelector('.nav'),
      body = document.querySelector('body');

burger.addEventListener('click', () => {
  nav.classList.add('nav--visible');
});

burger.addEventListener('click', () => {
  body.classList.add('bodyscroll')
});

close.addEventListener('click', () => {
  nav.classList.remove('nav--visible');
});

close.addEventListener('click', () => {
  body.classList.remove('bodyscroll');
});