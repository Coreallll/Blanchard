document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map('yandexMap', {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "360px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "280px", right: "20px" }
      }
    );

    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/location.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-5, -10]
    });

    myMap.geoObjects.add(myPlacemark);
    
    var myMapMobile = new ymaps.Map('yandexMapMobile', {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "240px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "155px", right: "20px" }
    }
  );

  var myPlacemark2 = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-5, -10]
  });
  
    myMapMobile.geoObjects.add(myPlacemark2);

  }
});