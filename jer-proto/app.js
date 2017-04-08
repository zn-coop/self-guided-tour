var home = {lat: 38.228970, lng: -85.759703};
var shop = {lat: 38.284501, lng: -85.719859};
var nearBridge = {lat: 38.255378, lng: -85.753495};

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: nearBridge,
    scrollwheel: false
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  calculateAndDisplayRoute(directionsService, directionsDisplay);

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: home,
      destination: shop,
      travelMode: 'DRIVING',
      avoidHighways: true,
    }, function(response, status) {
      if (status === 'OK') {
        var dur = response.routes["0"].legs["0"].duration.text;
        console.log('It will take', dur, 'to reach your destination.');
        directionsDisplay.setDirections(response);
      } else {
        error.log('Directions request failed due to', status);
      }
    });
  }

  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
}

$('#btn').on('click', function() {
  if (!($('#wrapper').hasClass('invisible'))) {
    // http://stackoverflow.com/questions/2510115/jquery-can-i-call-delay-between-addclass-and-such#2510255
    // http://stackoverflow.com/questions/1058158/what-are-queues-in-jquery <-- great read.
    $('#wrapper').addClass('invisible').delay(300).queue(function() {
      // could use display: none instead to avoid z-index if needed
      $(this).css('z-index', '-1').dequeue();
    });
  } else {
    $('#wrapper').css('z-index', '1').removeClass('invisible');
  }
});
