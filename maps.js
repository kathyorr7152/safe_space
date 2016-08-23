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
      icon: 'metrobus.png'
    },
    center: {
      icon: 'center.png'
    },
    library: {
      icon: 'book.png'
    },
    info: {
      icon:'star.png'
    },
    store: {
      icon:'stores.png'
    },
    restaurant: {
      icon:'restaurant.png'
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
      type: 'center'
    }, {
    //Gay City Health Project
      position: new google.maps.LatLng( 47.613912,-122.324633),
      type: 'center'
    }, {
      position: new google.maps.LatLng( 47.618218,-122.330468),
      type: 'center'
    }, {
      position: new google.maps.LatLng( 47.661859,-122.311639),
      type: 'center'
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
      position: new google.maps.LatLng(47.708251,-122.332232),
      type: 'info'
    }, {
      //28
      position: new google.maps.LatLng(47.5842,-122.333899),
      type: 'info'
    }, {   
      //29
      position: new google.maps.LatLng(47.775665,-122.346469),
      type: 'info'
    }, {    
      //30
      position: new google.maps.LatLng(47.724404,-122.344987),
      type: 'info'
    }, {    
      //31
      position: new google.maps.LatLng(47.733646,-122.313151),
      type: 'info'
    }, {    
      //32
      position: new google.maps.LatLng(47.733031,-122.311),
      type: 'info'
    }, {  
      //33
      position: new google.maps.LatLng(47.659235,-122.313473),
      type: 'info'
    }, {    
      //34
      position: new google.maps.LatLng(47.740932,-122.34354),
      type: 'info'
    }, {   
      //restaurant
      //1
      position: new google.maps.LatLng(47.620836,-122.327898),
      type: 'restaurant'
    }, {   
      //2
      position: new google.maps.LatLng(47.607052,-122.320759),
      type: 'info'
    }, { 
      //3
      position: new google.maps.LatLng(47.552913,-122.320859),
      type: 'restaurant'
    }, {     	
      //4
      position: new google.maps.LatLng(47.614426,-122.319061),
      type: 'restaurant'
    }, {   
      //5
      position: new google.maps.LatLng(47.55721,-122.284452),
      type: 'restaurant'
    }, { 
      //6
      position: new google.maps.LatLng(47.558001,-122.284853),
      type: 'restaurant'
    }, {   
      //7
      position: new google.maps.LatLng(37.431573,-78.656894),
      type: 'restaurant'
    }, {    
      //8
      position: new google.maps.LatLng(47.608986,-122.338634),
      type: 'info'
    }, { 
      //9
       position: new google.maps.LatLng(47.564301,-122.270996),
      type: 'restaurant'
    }, { 
      //10
      position: new google.maps.LatLng(47.434294,-122.276282),
      type: 'restaurant'
    }, { 
       //11
      position: new google.maps.LatLng(47.794523,-122.37327),
      type: 'restaurant'
    }, { 
      //libraries    
      //1 44
      position: new google.maps.LatLng(47.650062,-122.348423),
      type: 'library'
    }, {    
      //2
      position: new google.maps.LatLng(47.622929,-122.322318),
      type: 'library'
    }, {   
      //3
      position: new google.maps.LatLng(47.66118,-122.338931),
      type: 'library'
    }, {    
      //4
      position: new google.maps.LatLng(47.633814,-122.362665),
      type: 'library'
    }, {   
      //5
      position: new google.maps.LatLng(47.6066,-122.332984),
      type: 'library'
    }, {    
      //6
      position: new google.maps.LatLng(47.657141,-122.312437),
      type: 'library'
    }, {    
      //7
      position: new google.maps.LatLng(47.665244,-122.317883),
      type: 'library'
    }, {    
      //8
    position: new google.maps.LatLng(47.606991,-122.337844),
      type: 'library'
    }, {    
      //9
      position: new google.maps.LatLng(47.64052,-122.302401),
      type: 'library'
    }, {  
      //10
      position: new google.maps.LatLng(47.669828,-122.384315),
      type: 'library'
    }, {    
      //11
      position: new google.maps.LatLng(47.645323,-122.401436),
      type: 'library'
    }, {
      //12
      position: new google.maps.LatLng(47.526252,-122.322588),
      type: 'library'
    }, {
      //13
      position: new google.maps.LatLng(47.687452,-122.354757),
      type: 'library'
    }, {
     //target
     //1
      position: new google.maps.LatLng(47.608363,-122.338488),
      type: 'store'
    }, {
     //2
      position: new google.maps.LatLng(47.522257,-122.368754),
      type: 'store'
    }, {
     //3
      position: new google.maps.LatLng(47.709146,-122.324804),
      type: 'store'
    }, {
   	//4
      position: new google.maps.LatLng(47.620685,-122.321238),
      type: 'store'
    }, {
     //metro
     //1
      position: new google.maps.LatLng(47.386455,-122.243032),
      type: 'parking'
    }, {
     //2
      position: new google.maps.LatLng(47.747408,-122.331985),
      type: 'parking'
    }, {
     //3
      position: new google.maps.LatLng(47.601978,-122.328188),
      type: 'parking'
    }, {
     //4
      position: new google.maps.LatLng(47.621228,-122.34998),
      type: 'parking'
    }, {
     //5
      position: new google.maps.LatLng(47.598521,-122.329805),
      type: 'parking'
    }, {
     //6 70
      position: new google.maps.LatLng(47.648211,-122.304292),
      type: 'parking'
    },
  ];

var infoWindows = [
    {
      contentString:'<h1>Lobby Bar</h1>' + '<p>1505 10th Avenue, Seattle, WA 98122</p>'
    }, {
      contentString:'<h1>Gay City Health Project</h1>' + '<p>517 East Pike Street, Seattle, WA 98122</p>'
    }, {
      contentString:'<h1>The James W. Ray Orion Center</h1>' + '<p>1828 Yale Avenue, Seattle, WA 98101</p>'
    }, {
      contentString:'<h1>University District Youth Center</h1>' + '<p>4516 15th Ave NE, Seattle, WA 98105</p>'
    }, {
      contentString:'<h1>Starbucks</h1>' + '<p>600 Stewart St, Seattle, WA 98101</p>' //1
    }, {
      contentString:'<h1>Starbucks</h1>' + '<p>Pike Place Market, 1912 Pike Pl, Seattle, WA 98101</p>'
    }, { 
      contentString:'<h1>Starbucks</h1>' + '<p>QFC, 2746 NE 45th St, Seattle, WA 98105</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>Russell Investments, 1401 2nd Ave, Seattle, WA 98101</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>1410 E John St, Seattle, WA 98112</p>' //30
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>2201 E Madison St, Seattle, WA 98112</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>Harvard Market, 1401 Broadway, Seattle, WA 98122</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>Swedish Medical Center Rehab Services,550 17th Ave,Seattle, WA 98122</p>' 
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>Quality Food Center, 1801 N 45th St, Seattle, WA 98103</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>100 NW 85th St, Seattle, WA 98117</p>' //10
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>Safeway, 2100 Queen Anne Ave N, Seattle, WA 98109</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>Safeway, 8340 15th Ave NW, Seattle, WA 98117</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>1423 NW Market St, Seattle, WA 98107</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>521 Wall St, Seattle, WA 98121</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>417 Broadway E, Seattle, WA 98102</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>516 1st Ave W, Seattle, WA 98109</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>2707 Rainier Ave S, Seattle, WA 98144</p>'
    }, {
      contentString:'<h1>Starbucks</h1>' + '<p>2622 California Ave SW, Seattle, WA 98116</p>' 
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>Safeway, 12318 15th Ave NE, Seattle, WA 98125</p>' //16
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>4754 42nd Ave SW, Seattle, WA 98116</p>' //20
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>316 N 67th St, Seattle, WA 98103</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>3401 Fremont Avenue N, 3401, Seattle, WA 98103</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>7100 East Green Lake Dr N, Seattle, WA 98115</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>35th Ave NE, Seattle, WA 98115</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>University Village, 4634 26th Ave NE, Seattle, WA 98105</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>2344 Eastlake Ave E, Seattle, WA 98102</p>' 
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>2137 N Northgate Way, Seattle, WA 98133</p>'
    }, {
     contentString:'<h1>Starbucks</h1>' + '<p>1962 1st Ave S, Seattle, WA 98134</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>20121 Aurora Ave N, Shoreline, WA 98133</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>13035 Aurora Ave N, Seattle, WA 98133</p>' //30
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>14359 15th Ave NE, Seattle, WA 98125</p>'
    }, { 
    contentString:'<h1>Starbucks</h1>' + '<p>1531 NE 145th St, Seattle, WA 98155</p>'
    }, {
    contentString:'<h1>Starbucks</h1>' + '<p>4229 University Way NE</p>'
    }, {
    contentString:'<h1>Starbucks</h1>' + '<p>15332 Aurora Ave N, Shoreline, WA 98133</p>'
    }, {
        contentString:'<h1>Julias </h1>' + '<p>300 Broadway E (Thomas Street) Seattle, WA 98102</p>'
    }, {
        contentString:'<h1>Vivace Expresso Bar</h1>' + '<p>532 Broadway Avenue (at E Republican Street) Seattle, WA 98102</p>'
    }, {
        contentString:'<h1>Stellar Pizza </h1>' + '<p>5513 Airport Way S (at Lucile St) Seattle, WA 98108</p>'
    }, {
        contentString:'<h1>Poquitos</h1>' + '<p>1000 E. Pike St (at 10th Ave.) Seattle, WA 98122</p>'
    }, {
        contentString:'<h1>Utta Bella Neapolitan Pizza </h1>' + '<p>4918 Rainier Ave S (at Hudson St.) Seattle, WA 98118</p>'
    }, {
        contentString:'<h1>Geraldine’s Counter (4872 S Rainier Ave (at S Ferdinand St) Seattle, WA 98118</p>'
    }, {
        contentString:'<h1>Lola </h1>' + '<p>2000 4th Ave (at Virginia St) Seattle, WA 98121</p>'
    }, {
        contentString:'<h1>Seattle Coffee Works Cafe </h1>' + '<p>107 Pike St (btwn 1st & 2nd Ave), Seattle, WA 98101</p>'
    }, {
        contentString:'<h1>Flying Squirrel </h1>' + '<p>4920 S. Genesse Ave. (at 50th Ave S) Seattle, WA 98118</p>'
    }, {
        contentString:'<h1>Copperleaf Restaurant </h1>' + '<p>18525 36th Ave. South (Pacific Hwy & 188th St) Seattle, WA 98188</p>'
    }, {
        contentString:'<h1>Five Restaurant Bistro </h1>' + '<p>650 Edmonds Way, Edmonds, WA 98020</p>'
    }, {
        contentString:'<h1>Fremont Public Library </h1>' + '<p>731 N 35th St, Seattle, WA 98103</p>'
    }, {
        contentString:'<h1>Capitol Hill Branch Library </h1>' + '<p>425 Harvard Ave E, Seattle, WA 98102</p>'
    }, {
        contentString:'<h1>Wallingford Public Library </h1>' + '<p>1501 N 45th St, Seattle, WA 98103</p>'
    }, {
        contentString:'<h1>Queen Anne Public Library </h1>' + '<p>400 W Garfield St, Seattle, WA 98119</p>'
    }, {
        contentString:'<h1>Seattle Public Library </h1>' + '<p>1000 4th Ave, Seattle, WA 98104 </p>'
    }, {
        contentString:'<h1>Social Work Library </h1>' + '<p>4101 15th Ave NE, Seattle, WA 98105 </p>'
    }, {
        contentString:'<h1>University Public Library </h1>' + '<p>5009 Roosevelt Way NE, Seattle, WA 98105</p>'
    }, {
        contentString:'<h1>Dorothy Stimson Bullitt Library </h1>' + '<p>100 University St, Seattle, WA 98101</p>'
    }, {
        contentString:'<h1>Montlake Branch of the Seattle Public Library </h1>' + '<p>2401 24th Ave E, Seattle, WA 98112</p>'
    }, {
        contentString:'<h1>Ballard Public library</h1>' + '<p>5614 22nd Ave NW, Seattle, WA 98107</p>'
    }, {
        contentString:'<h1>Magnolia Public library </h1>' + '<p>2801 34th Ave W, Seattle, WA 98199</p>'
    }, {
        contentString:'<h1>South Park library </h1>' + '<p>8604 8th Ave S, Seattle, WA 98108</p>'
    }, {
        contentString:'<h1>Green Public library </h1>' + '<p>8016 Greenwood Ave N, Seattle, WA 98103</p>'
    }, {
        contentString:'<h1>Target </h1>' + '<p>1401 2nd Ave, Seattle, WA 98101</p>'
    }, {
        contentString:'<h1>Target</h1>' + '<p>2800 SW Barton St, Seattle, WA 98126</p>'
    }, {
        contentString:'<h1>Target</h1>' + '<p>302 NE Northgate Way, Seattle, WA 98125</p>'
    }, {
        contentString:'<h1>New York X-Change</h1>' + '<p>225 Broadway E, Seattle, WA 98102</p>'
    }, {
        contentString:'<h1>King County Metro Transit</h1>' + '<p>902 W James St, Kent, WA 98032</p>'
    }, {
        contentString:'<h1>King County Metro North Base</h1>' + '<p> 316 N 67th St, Seattle, WA 98103</p>'
    }, {
        contentString:'<h1>King County Metro Transit</h1>' + '<p>400 Yesler Way, Seattle, WA 98104</p>'
    }, {
        contentString:'<h1>Seattle, WA 98109 Central Monorail </h1>' + '<p>370 Thomas St, Seattle, WA 98109</p>'
    }, {
        contentString:'<h1>King Street Station</h1>' + '<p>303 S Jackson St, Seattle, WA 98104</p>'
    }, {
        contentString:'<h1>University of Washington Station </h1>' + '<p>3720 Montlake Blvd NE, Seattle, WA 98105</p>'
    } 
  ];

  //As long as infowindows and features have matching indexes and they are exactly the same length this will work
  for (var i = 0, feature; feature = features[i]; i++) {
     var infowindow = new google.maps.InfoWindow({
          content: infoWindows[i].contentString
        });
    addMarker(feature, infowindow);
}}

