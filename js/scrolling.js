document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $("#nav-menu,#subscribe").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 700);
    });
  });
});