      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: new google.maps.LatLng(47.614336,-122.319785),
          mapTypeId: 'roadmap',
        });

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