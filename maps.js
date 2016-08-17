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
}else{
    console.log("Browser doesn't support geolocation!");
}

The Lobby Bar	1505 10th Avenue, Seattle, WA , 98122, United States	47.614336	-122.319785

//marker code!!
var markersData = [
  {
      lat: 47.614336,
      lng: -122.319785,
      name: "The Lobby Bar",
      address1:"1505 10th Avenue",
      address2: "Seattle, WA",
      postalCode: "98122, United States" // don’t insert comma in the last item of each marker
   },
   {
      lat: 40.59955,
      lng: -8.7498167,
      name: "Camping Costa Nova",
      address1:"Quinta dos Patos, n.º 2",
      address2: "Praia da Costa Nova",
      postalCode: "3830-453 Gafanha da Encarnação" // don’t insert comma in the last item of each marker
   },
   {
      lat: 40.6247167,
      lng: -8.7129167,
      name: "Camping Gafanha da Nazaré",
      address1:"Rua dos Balneários do Complexo Desportivo",
      address2: "Gafanha da Nazaré",
      postalCode: "3830-225 Gafanha da Nazaré" // don’t insert comma in the last item of each marker
   } // don’t insert comma in last item
];