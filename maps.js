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
if ("geolocation" in navigator){ //check geolocation available
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position){
            console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
        });
}
else{
    console.log("Browser doesn't support geolocation!");
}
<<<<<<< HEAD
jQuery(document).ready(function ($) {
    alert("Your location is: " + geoplugin_countryName() + ", " + geoplugin_region() + ", " + geoplugin_city());

    var country = geoplugin_countryName();
    $("#country").append("<option value='1' selected>" + country + "</option>");

    var zone = geoplugin_region();
    $("#zone").append("<option value='1' selected>" + zone + "</option>");

    var district = geoplugin_city();
    $("#district").append("<option value='1' selected>" + district + "</opti
=======
// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds and zoom level according to markers position
   var bounds = new google.maps.LatLngBounds();

   // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postalCode = markersData[i].postalCode;

      createMarker(latlng, name, address1, address2, postalCode);

      // Marker’s Lat. and Lng. values are added to bounds variable
      bounds.extend(latlng); 
   }

   // Finally the bounds variable is used to set the map bounds
   // with API’s fitBounds() function
   map.fitBounds(bounds);
}



//marker data!!
var markersData = [
//The Lobby Bar	1505 10th Avenue, Seattle, WA , 98122, United States	47.614336	-122.319785
  {
      lat: 47.614336,
      lng: -122.319785,
      name: "The Lobby Bar",
      address1:"1505 10th Avenue",
      address2: "Seattle, WA",
      postalCode: "98122, United States" // don’t insert comma in the last item of each marker
   },
//Gay City Health Project	517 East Pike Street, Seattle, WA, 98122, United States	47.613912	-122.324633
   {
      lat: 47.613912,
      lng: -122.324633,
      name: "Gay City Health Project",
      address1:"517 East Pike Street",
      address2: "Seattle, WA",
      postalCode: "98122, United States" // don’t insert comma in the last item of each marker
   },
//The James W. Ray Orion Center	1828 Yale Avenue, Seattle, WA 98101	47.618218	-122.330468
   {
      lat: 47.618218,
      lng: -122.330468,
      name: "The James W. Ray Orion Center",
      address1:"1828 Yale Avenue",
      address2: "Seattle, WA",
      postalCode: "98101, United States" // don’t insert comma in the last item of each marker
   } // don’t insert comma in last item
];




>>>>>>> origin/master
