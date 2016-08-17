if ("geolocation" in navigator){ //check geolocation available
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position){
            console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
        });
}
else{
    console.log("Browser doesn't support geolocation!");
}
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

function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(47.608013, -122.335167),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the InfoWindow with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}

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


// This function creates each marker and sets their Info Window content
function createMarker(latlng, name, address1, address2, postalCode){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the infowindow content is created
   // and the infowindow is opened
   google.maps.event.addListener(marker, 'click', function() {
      
      // Variable to define the HTML content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
      '<div class="iw_title">' + name + '</div>' +
      '<div class="iw_content">' + address1 + '<br />' +
      address2 + '<br />' +
      postalCode + '</div></div>';
      
      // including content to the infowindow
      infoWindow.setContent(iwContent);

      // opening the infowindow in the current map and at the current marker location
      infoWindow.open(map, marker);
   });
}

google.maps.event.addDomListener(window, 'load', initialize);



