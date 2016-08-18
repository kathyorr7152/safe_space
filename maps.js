$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(47.608013, -122.335167);  // Default to Hollywood, CA when no geolocation support
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
            position: latlng (47.608013, -122.335167)
            map: map,
            title: "Greetings!"
        });
    }
});
jQuery(document).ready(function ($) {
    alert("Your location is: " + geoplugin_countryName() + ", " + geoplugin_region() + ", " + geoplugin_city());

    var country = geoplugin_countryName();
    $("#country").append("<option value='1' selected>" + country + "</option>");

    var zone = geoplugin_region();
    $("#zone").append("<option value='1' selected>" + zone + "</option>");

    var district = geoplugin_city();
    $("#district").append("<option value='1' selected>" + district + "</opti