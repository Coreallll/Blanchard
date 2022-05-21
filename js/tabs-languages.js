document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.language-btn').forEach(function (langBtn) {
    langBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.language-btn').forEach(function (langBtnActive) {
        langBtnActive.classList.remove('language-btn--active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('language-btn--active')
      document.querySelectorAll('.catalog-artist').forEach(function (catalogSpoiler) {
        catalogSpoiler.classList.remove('catalog-artist--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-artist--active')
    })
  })
})