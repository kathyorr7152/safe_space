var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(47.614336,-122.319785),
    mapTypeId: 'roadmap',
  });

{


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

  var geoLocationWindow = new google.maps.InfoWindow({map: map});
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      geoLocationWindow.setPosition(pos);
      geoLocationWindow.setContent('You are here!');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, geoLocationWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, geoLocationWindow, map.getCenter());
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
      icon:'star.png'
    }
  };

  function addMarker(feature, infoWindow) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
    marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  }

  var features = [
    {
    //The Lobby Bar
      position: new google.maps.LatLng(47.614336, -122.319785),
      type: 'library'
    }, {
    //Gay City Health Project
      position: new google.maps.LatLng( 47.613912,-122.324633),
      type: 'parking'
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
    //8
      position: new google.maps.LatLng(47.607634,-122.310118),
       type: 'info'
    }, {
      //9
      position: new google.maps.LatLng(47.661828,-122.33624),
      type: 'info'
    }, {
      //10
      position: new google.maps.LatLng(47.691889,-122.359125),
      type: 'info'
    }, {
      //11
      position: new google.maps.LatLng(47.637722,-122.356146),
      type: 'info'
    }, {
      //12
      position: new google.maps.LatLng(47.68966,-122.376136),
     type: 'info'
    }, {
      //13
      position: new google.maps.LatLng(47.66825,-122.374273),
     type: 'info'
    }, { 
      //14
      position: new google.maps.LatLng(47.617405,-122.344447),
      type: 'info'
    }, {
      //15
      position: new google.maps.LatLng(47.622525,-122.321375),
      type: 'info'
    }, {
      //16
      position: new google.maps.LatLng(47.623822,-122.355237),
      type: 'info'
    }, {
      //17
      position: new google.maps.LatLng(47.579068,-122.299594),
      type: 'info'
    }, {
      //18
      position: new google.maps.LatLng(47.579831,-122.38593),
      type: 'info'
    }, {
      //19
      position: new google.maps.LatLng(47.718018,-122.311915),
      type: 'info'
    }, {
      //20
      position: new google.maps.LatLng(47.559739,-122.385295),
      type: 'info'
    }, {
      //21
      position: new google.maps.LatLng(47.677932,-122.354581),
     type: 'info'
    }, {
      //22 
      position: new google.maps.LatLng(47.649861,-122.35007),
      type: 'info'
    }, {
      //23
      position: new google.maps.LatLng(47.679988,-122.325477),
      type: 'info'
    }, {
      //24
      position: new google.maps.LatLng(47.6814,-122.290689),
      type: 'info'
    }, {
      //25
      position: new google.maps.LatLng(47.662626,-122.299708),
      type: 'info'
    }, {
      //26
      position: new google.maps.LatLng(47.641021,-122.325562),
      type: 'info'
    }, {
       //27
      position: new google.maps.LatLng(47.618231,-122.303942),
      type: 'info'
    }, {
      //28
      position: new google.maps.LatLng(47.708251,-122.332232),
      type: 'info'
    }, {
      //29
      position: new google.maps.LatLng(47.5842,-122.333899),
      type: 'info'
    }, {   
      //30
      position: new google.maps.LatLng(47.775665,-122.346469),
      type: 'info'
    }, {    
      //31
      position: new google.maps.LatLng(47.724404,-122.344987),
      type: 'info'
    }, {    
      //32
      position: new google.maps.LatLng(47.733646,-122.313151),
      type: 'info'
    }, {    
      //33
      position: new google.maps.LatLng(47.733031,-122.311),
      type: 'info'
    }, {  
      //34
      position: new google.maps.LatLng(47.659235,-122.313473),
      type: 'info'
    }, {    
      //35
      position: new google.maps.LatLng(47.740932,-122.34354),
      type: 'info'
    }, {   
      //resteraunt
      //1
      position: new google.maps.LatLng(47.620836,-122.327898),
      type: 'info'
    }, {   
      //2
      position: new google.maps.LatLng(47.607052,-122.320759),
      type: 'info'
    }, {   
      //3
      position: new google.maps.LatLng(47.552913,-122.320859),
      type: 'info'
    }, {   
      //4
      position: new google.maps.LatLng(47.614426,-122.319061),
      type: 'info'
    }, {    
      //5
      position: new google.maps.LatLng(47.55721,-122.284452),
      type: 'info'
    }, {    
      //6
      position: new google.maps.LatLng(47.558001,-122.284853),
      type: 'info'
    }, {   
      //7
      position: new google.maps.LatLng(37.431573,-78.656894),
      type: 'info'
    }, {    
      //8
      position: new google.maps.LatLng(47.608986,-122.338634),
      type: 'info'
    }, {   
      //9
      position: new google.maps.LatLng(47.618231,-122.270996),
      type: 'info'
    }, {    
      //10
      position: new google.maps.LatLng(47.564301,-122.270996),
      type: 'info'
    }, {   
      //11
      position: new google.maps.LatLng(47.434294,-122.276282),
      type: 'info'
    }, {    
      //12
      position: new google.maps.LatLng(47.794523,-122.37327),
      type: 'info'
    }, {    
      //13
      position: new google.maps.LatLng(47.650062,-122.348423),
      type: 'info'
    }, {    
      //14
    position: new google.maps.LatLng(47.622929,-122.322318),
      type: 'info'
    }, {    
      //15
      position: new google.maps.LatLng(447.66118,-122.338931),
      type: 'info'
    }, {  
      //16
      position: new google.maps.LatLng(47.633814,-122.362665),
      type: 'info'
    }, {    
      //17
      position: new google.maps.LatLng(47.657141,-122.312437),
      type: 'info'
    }, {
      //18
      position: new google.maps.LatLng(47.665244,-122.317883),
      type: 'info'
    }, {
      //19
      position: new google.maps.LatLng(47.606991,-122.337844),
      type: 'info'
    }, {
      //20
      position: new google.maps.LatLng(47.64052,-122.302401),
      type: 'info'
    }, {
       //21
      position: new google.maps.LatLng(47.669828,-122.384315),
      type: 'info'
    }, {
       //22
      position: new google.maps.LatLng(47.645323,-122.401436),
      type: 'info'
    }, {
     //23
      position: new google.maps.LatLng(47.687452,-122.354757),
      type: 'info'
    }, {
     //24
      position: new google.maps.LatLng(47.652159,-122.355242),
      type: 'info'
    }, {
     //target
     //1
      position: new google.maps.LatLng(47.6083631,-122.338488),
      type: 'info'
    }, {
     //2
      position: new google.maps.LatLng(47.522257,-122.368754),
      type: 'info'
    }, {
     //3
      position: new google.maps.LatLng(47.709146,-122.324804),
      type: 'info'
    }, {
     //metro
     //1
      position: new google.maps.LatLng(47.386455,-122.243032),
      type: 'info'
    }, {
     //2
      position: new google.maps.LatLng(47.747408,-122.331985),
      type: 'info'
    }, {
     //3
      position: new google.maps.LatLng(47.601978,-122.328188),
      type: 'info'
    }, {
     //4
      position: new google.maps.LatLng(47.598521,-122.329805),
      type: 'info'
    }, {
     //5
      position: new google.maps.LatLng(47.648211,-122.304292),
      type: 'info'
    }, {
     //6
      position: new google.maps.LatLng(47.657141,-122.312437),
      type: 'info'
    },
  ];

var infoWindows = [
    {
      contentString:'<p>Lobby Bar</p>'
    }, {
      contentString:'<p>Gay City Health Project</p>'
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
      //8
      position: new google.maps.LatLng(47.607634,-122.310118),
       type: 'info'
    }, {
      //9
      position: new google.maps.LatLng(47.661828,-122.33624),
      type: 'info'
    }, {
      //10
      position: new google.maps.LatLng(47.691889,-122.359125),
      type: 'info'
    }, {
      //11
      position: new google.maps.LatLng(47.637722,-122.356146),
      type: 'info'
    }, {
      //12
      position: new google.maps.LatLng(47.68966,-122.376136),
     type: 'info'
    }, {
      //13
      position: new google.maps.LatLng(47.66825,-122.374273),
     type: 'info'
    }, { 
      //14
      position: new google.maps.LatLng(47.617405,-122.344447),
      type: 'info'
    }, {
      //15
      position: new google.maps.LatLng(47.622525,-122.321375),
      type: 'info'
    }, {
      //16
      position: new google.maps.LatLng(47.623822,-122.355237),
      type: 'info'
    }, {
      //17
      position: new google.maps.LatLng(47.579068,-122.299594),
      type: 'info'
    }, {
      //18
      position: new google.maps.LatLng(47.579831,-122.38593),
      type: 'info'
    }, {
      //19
      position: new google.maps.LatLng(47.718018,-122.311915),
      type: 'info'
    }, {
      //20
      position: new google.maps.LatLng(47.559739,-122.385295),
      type: 'info'
    }, {
      //21
      position: new google.maps.LatLng(47.677932,-122.354581),
     type: 'info'
    }, {
      //22
      position: new google.maps.LatLng(47.649861,-122.35007),
      type: 'info'
    }, {
      //23
      position: new google.maps.LatLng(47.679988,-122.325477),
      type: 'info'
    }, {
      //24
      position: new google.maps.LatLng(47.6814,-122.290689),
      type: 'info'
    }, {
      //25
      position: new google.maps.LatLng(47.662626,-122.299708),
      type: 'info'
    }, {
      //26
      position: new google.maps.LatLng(47.641021,-122.325562),
      type: 'info'
    }
  ];

  //As long as infowindows and features have matching indexes and they are exactly the same length this will work
  for (var i = 0, feature; feature = features[i]; i++) {
     var infowindow = new google.maps.InfoWindow({
          content: infoWindows[i].contentString
        });
    addMarker(feature, infowindow);
}}

