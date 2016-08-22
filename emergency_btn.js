$(function() {
          if ( !navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ) return;

          jQuery('a[href^="sms:"]').attr('href', function() {
            // Convert: sms:+000?body=example
            // To iOS:  sms:+000;body=example (semicolon, not question mark)
            return jQuery(this).attr('href').replace(/sms:(\+?([0-9]*))?\?/, 'sms:$1;');
                  });
                });
            $(document).ready(function(){
            navigator.geolocation.getCurrentPosition(handle_geolocation_query);
             });
             
             function handle_geolocation_query(position){
             // do something with the position information
             lat = parseInt(position.coords. latitude*10000,10)/10000;
             lon = parseInt(position.coords.longitude*10000,10)/10000; 
             alert(lat + " " + lon);
             }
    

/*    $(function() {
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

    }); */
    