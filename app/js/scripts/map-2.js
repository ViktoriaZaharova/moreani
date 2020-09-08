ymaps.ready(init);
//Set default center and zoom
function init() {
    myMap = new ymaps.Map('map-transport', {
        center: [50.594285, 36.577105],
        zoom: 10,
        behaviors:['drag','ScrollZoom','dblClickZoom']
    });


    //Set user Icon
    s = {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.svg',
        iconImageSize: [29, 38],
        iconImageOffset: [-14, -17]
    };
    //Set some points
    m = {
        m1: new ymaps.Placemark([50.594285, 36.577105], {}, s),
        m1center: [50.594285, 36.577105]
        /*,
        m2: new ymaps.Placemark([45.0349, 39.1317], {}, s),
        m2center: [45.0349, 39.1317],
        m3: new ymaps.Placemark([44.7491, 37.7263], {}, s),
        m3center: [44.7491, 37.7265],
        m4: new ymaps.Placemark([45.2299, 38.1138], {}, s),
        m4center: [45.2299, 38.1138],
        m5: new ymaps.Placemark([45.8417, 40.1357], {}, s),
        m5center: [45.8417, 40.1357],
        m6: new ymaps.Placemark([44.9367, 37.9675], {}, s),
        m6center: [44.9367, 37.9675]
        */
    };
    //Disabled scroll
    //myMap.behaviors.disable('scrollZoom');
    //on mobile disable touch
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //... отключаем перетаскивание карты
        //myMap.behaviors.disable('drag');
    }
    //Add points on the map
    myMap.geoObjects
        .add(m['m1'])
        //.add(m['m2'])
        //.add(m['m3'])
        //.add(m['m4'])
        //.add(m['m5'])
        //.add(m['m6'])
    ;

    // ON RESIZE
    //Get curent center and zoom
    var pixelCenter = myMap.getGlobalPixelCenter('map-contact');
    console.log(pixelCenter);

    /*
    function onResizeMap() {
        if ($(window).width() > '768') {
            //Set New center
            myMap.setCenter([55.76473330163073, 37.59522232209016]);
            var pixelCenter2 = myMap.getGlobalPixelCenter('map_page');
            console.log(pixelCenter2);
        } else {
            myMap.setCenter([55.76473330163073, 37.59522232209016]);
        }
    } onResizeMap();
    */

    window.onresize = function () {
        onResizeMap();
    };
};