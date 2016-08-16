/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(47.62915, -122.29639);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});
function initMap() {
    var myLatLng = {lat: 47.62915, lng:-122.29639} ;

    var map = new google.maps.Map(document.getElementById('map'), ({
      zoom: 4,
      center: myLatLng
    }));

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Japanese garden!' //lat=47.62915; long=-122.29639
    });
    var myLatLngs = {lat: 47.847842, lng:-122.601242}
     var markers = new google.maps.Marker({
      position: myLatLngs,
      map: map,
      title: 'Port Gamble!'
    });



    // To add the marker to the map, call setMap();
marker.setMap (map);
    markers.setMap(map);

    function initMap() {
        var Japanese = {lat: 47.62915, lng:-122.29639};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: ul
        });

        var contentString ="This is a very cool hang out place!"
        var infowindow = new google.maps.InfoWindow({
        content: contentString
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Japanese garden'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
}