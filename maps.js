      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: new google.maps.LatLng(47.614336,-122.319785),
          mapTypeId: 'roadmap',
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
        });
        
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
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
          //1
            position: new google.maps.LatLng(47.614028, -122.337109),
            type: 'info'
          }, {
          //2
            position: new google.maps.LatLng(47.61018,-122.342392),
            type: 'info'
          }, {
           //3
            position: new google.maps.LatLng(47.662128, -122.296273),
            type: 'info'
          }, {
          //4
            position: new google.maps.LatLng(47.608363,-122.338488),
            type: 'info'
          }, {
          //5
            position: new google.maps.LatLng(47.620481,-122.313144),
            type: 'info'
          }, {
          //6
            position: new google.maps.LatLng(47.618231,-122.303942),
            type: 'info'
          }, {
          //7
            position: new google.maps.LatLng(47.630489,-122.32231),
            type: 'info'
          }, {
          }
        ];
        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }