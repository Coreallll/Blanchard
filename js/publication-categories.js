document.addEventListener('DOMContentLoaded', function () {
  const catBtn = document.querySelector('.btn-category');
  const pubList = document.querySelector('.publication-left__list');
  const pubItem = document.querySelectorAll('.publication-left__item');

  pubItem.forEach(item => {
    if (item.querySelector('input').checked) {
      item.classList.add('publication-left__item__clicked');
      itemToggling(item, 'show');
    }

    item.querySelector('input').addEventListener('click', function () {
      if (!item.querySelector('input').checked) {
        item.classList.remove('publication-left__item__clicked');
        if (!pubList.classList.contains('publication-left__list--active')) {
          itemToggling(item, 'hide');
        }
      } 
      else {
        item.classList.add('publication-left__item__clicked');
      }
    });
  });

  catBtn.addEventListener('click', spoilerToggling);

  function spoilerToggling() {
    if (!pubList.classList.contains('publication-left__list--active')) {
      catBtn.classList.add('btn-category--active');

      pubList.classList.add('publication-left__list--active');

      pubItem.forEach(item => {
        itemToggling(item, 'show');
      });
    }
    else {
      catBtn.classList.remove('btn-category--active');

      pubList.classList.remove('publication-left__list--active');

      pubItem.forEach(item => {
        if (item.querySelector('input').checked) {
          item.classList.add('publication-left__item__clicked');
          itemToggling(item, 'show');
        } 
        else {
          item.classList.remove('publication-left__item__clicked');
          itemToggling(item, 'hide');
        }
      });
    }
  }

  function itemToggling(item, action) {
    if (action === 'show') {
      item.classList.add('publication-left__item--active');
      setTimeout(function () {
        item.classList.add('publication-left__item__animated');
      }, 100);
    } 
    else {
      item.classList.remove('publication-left__item__animated');
      setTimeout(function () {
        item.classList.remove('publication-left__item--active');
      }, 300);
    }
  }
});