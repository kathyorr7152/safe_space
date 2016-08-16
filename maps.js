
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