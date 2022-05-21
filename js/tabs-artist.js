document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion-tab__link').forEach(function (accTabBtn) {
    accTabBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.accordion-tab__link').forEach(function (unactive) {
        unactive.classList.remove('accordion-tab__link--active')
      });

      document.querySelectorAll('.catalog-artist-left').forEach(function (catArt) {
        catArt.classList.remove('catalog-artist-left--active')
      });

      this.classList.add('accordion-tab__link--active');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-artist-left--active');
      });
    });
});

