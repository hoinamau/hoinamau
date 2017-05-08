$(document).foundation();



function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.765093,
            lng: -122.422694
        },
        scrollwheel: false,
        zoom: 15
    });

    var marker = new google.maps.Marker({
            position: new google.maps.LatLng(37.765093, -122.422694),
            icon: 'image/1.ico',
            map: map
          });

}
