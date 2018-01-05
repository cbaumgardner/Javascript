function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myMap);
    } else {
        /* add error handling
        showError('Please allow geolocation.');
        */
    }
}


function myMap(position) {

    var mapOptions = {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    google.maps.event.addListenerOnce(map, 'idle', function(){
        setTimeout(
            function() {
                map.panTo({lat:37.546817, lng: -77.442099})
                map.setHeading(180)}
            , 3000);
    });
    
}