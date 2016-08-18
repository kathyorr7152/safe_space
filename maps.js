      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: new google.maps.LatLng(47.614336,-122.319785),
          mapTypeId: 'roadmap',
        });
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      {
         var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 47.614336, lng: -122.319785},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        }
         var features = [
          {
          //The Lobby Bar
            position: new google.maps.LatLng(47.614336, -122.319785),
            type: 'info'
          }, {
          //Gay City Health Project
            position: new google.maps.LatLng( 47.613912,-122.324633),
            type: 'info'
          }, {
          //STARBUCKS
            position: new google.maps.LatLng(47.614028, -122.337109),
            type: 'info'
          }, {
            position: new google.maps.LatLng(47.61018,-122.342392),
            type: 'info'
          }
        ];
        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }
      
      
     