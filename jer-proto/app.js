var home = {lat: 38.228970, lng: -85.759703};
var shop = {lat: 38.284501, lng: -85.719859};
var travelMode = 'DRIVING';

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    fullscreenControl: false
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('bottom-panel'));

  calculateAndDisplayRoute(directionsService, directionsDisplay);

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: home,
      destination: shop,
      travelMode: travelMode,
      avoidHighways: true,
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        error.log('Directions request failed due to', status);
      }
    });
  }
}

$('#map-btn').on('click', function() {
  if (!$('#wrapper').hasClass('invisible')) {
    // http://stackoverflow.com/questions/2510115/jquery-can-i-call-delay-between-addclass-and-such#2510255
    // http://stackoverflow.com/questions/1058158/what-are-queues-in-jquery <-- great read.
    $('#map-btn').css('background-image', 'url(' + "http://images.clipartpanda.com/google-map-icon-map-8.png" + ')');
    $('#wrapper').addClass('invisible').delay(250).queue(function() {
      // could use display: none instead to avoid z-index if needed
      $(this).css('z-index', '-1').dequeue();

    });
  } else {
    $('#wrapper').css('z-index', '1').removeClass('invisible');
    $('#map-btn').css('background-image', 'url(' + 'https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/exit-512.png' + ')');
  }
});
