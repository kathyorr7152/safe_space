
    $(document).ready(function(){
    navigator.geolocation.getCurrentPosition(handle_geolocation_query);
     });
     
     function handle_geolocation_query(position){
     // do something with the position information
     lat = parseInt(position.coords. latitude*10000,10)/10000;
     lon = parseInt(position.coords.longitude*10000,10)/10000; 
     alert(lat + " " + lon);
     }
    
    $(function() {
        var Geo={};

        if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(success, error);
        }

        //Get the latitude and the longitude;
        function success(position) {
            Geo.lat = position.coords.latitude;
            Geo.lng = position.coords.longitude;
            populateHeader(Geo.lat, Geo.lng);
        }

        function error(){
            console.log("Geocoder failed");
        }

        function populateHeader(lat, lng){
            $('#Lat').html(lat);
            $('#Long').html(lng);
        }

    });
    