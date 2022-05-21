document.addEventListener('DOMContentLoaded', function () {
  $( ".accordion" ).accordion({
    heightStyle: 'accordion-tab',
    header: '> .accordion__item > .accordion__title',
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: 'content'
  });
});
  