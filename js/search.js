const var11 = document.querySelector('.header-container-top'),
      searchBtn = document.querySelector('.header-search-btn-fake'),
      searchBlock = document.querySelector('.header-search'),
      logo = document.querySelector('.header__top-logo'),
      closeSearch = document.querySelector('.close-search');

searchBtn.addEventListener('click', () => {
  searchBlock.classList.add('header-search--visible');
});

searchBtn.addEventListener('click', () => {
  searchBtn.classList.add('header-search-btn-fake--hidden');
});

closeSearch.addEventListener('click', () => {
  searchBlock.classList.remove('header-search--visible');
});

closeSearch.addEventListener('click', () => {
  searchBtn.classList.remove('header-search-btn-fake--hidden');
});
