var centerMap = new google.maps.LatLng(49.279947, -123.114827);
var waves = new google.maps.LatLng(49.28061, -123.122463);
var library = new google.maps.LatLng(49.279947, -123.114827);
var offices = [waves, library];
var markers = [];
var iterator = 0;
var map;

function initialize() {
  var mapOptions = {
    zoom: 14,
    scrollwheel: false,
    center: centerMap,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {featureType:"landscape.natural", elementType:"geometry.fill", stylers:[{color:"#f5f5f2"},{visibility:"on"}]},
      {featureType:"administrative", stylers:[{visibility:"off"}]},
      {featureType:"transit", stylers:[{visibility:"on"}]},
      {featureType:"poi.attraction", stylers:[{visibility:"off"}]},
      {featureType:"landscape.man_made", elementType:"geometry.fill", stylers:[{color:"#ffffff"},{visibility:"on"}]},
      {featureType:"poi.business", stylers:[{visibility:"off"}]},
      {featureType:"poi.medical", stylers:[{visibility:"off"}]},
      {featureType:"poi.place_of_worship", stylers:[{visibility:"off"}]},
      {featureType:"poi.school", stylers:[{visibility:"off"}]},
      {featureType:"poi.sports_complex", stylers:[{visibility:"off"}]},
      {featureType:"road.highway", elementType:"geometry", stylers:[{color:"#ffffff"},{visibility:"simplified"}]},
      {featureType:"road.arterial", stylers:[{visibility:"simplified"},{color:"#ffffff"}]},
      {featureType:"road.highway", elementType:"labels.icon", stylers:[{color:"#ffffff"},{visibility:"off"}]},
      {featureType:"road.highway", elementType:"labels.icon", stylers:[{visibility:"off"}]},
      {featureType:"road.arterial", stylers:[{color:"#ffffff"}]},
      {featureType:"road.local", stylers:[{color:"#ffffff"}]},
      {featureType:"poi.park", elementType:"labels.icon", stylers:[{visibility:"off"}]},
      {featureType:"poi", elementType:"labels.icon", stylers:[{visibility:"off"}]},
      {featureType:"water", stylers:[{color:"#71c8d4"}]},
      {featureType:"landscape", stylers:[{color:"#e5e8e7"}]},
      {featureType:"poi.park", stylers:[{color:"#8ba129"}]},
      {featureType:"road", stylers:[{color:"#ffffff"}]},
      {featureType:"poi.sports_complex", elementType:"geometry", stylers:[{color:"#c7c7c7"},{visibility:"off"}]},
      {featureType:"water", stylers:[{color:"#a0d3d3"}]},
      {featureType:"poi.park", stylers:[{color:"#91b65d"}]},
      {featureType:"poi.park", stylers:[{"gamma":1.51}]},
      {featureType:"road.local", stylers:[{visibility:"off"}]},
      {featureType:"road.local", elementType:"geometry", stylers:[{visibility:"on"}]},
      {featureType:"poi.government", elementType:"geometry", stylers:[{visibility:"off"}]},
      {featureType:"landscape", stylers:[{visibility:"on"}]},
      {featureType:"road", elementType:"labels", stylers:[{visibility:"on"}, {color: "#676767"}]},
      {featureType:"road", elementType:"labels.text.stroke", stylers:[{visibility:"off"}]},
      {featureType:"road", elementType:"labels.icon", stylers:[{visibility:"off"}]},
      {featureType:"road.arterial", elementType:"geometry", stylers:[{visibility:"simplified"}]},
      {featureType:"road.local", stylers:[{visibility:"simplified"}]},
    ]
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  setTimeout(function() {
    drop();
  }, 3000);
}

function drop() {
  for (var i = 0; i < offices.length; i++) {
    setTimeout(function() {
      addMarker();
    }, i * 200);
  }
}

function addMarker() {
  markers.push(new google.maps.Marker({
    position: offices[iterator],
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  }));
  iterator++;
}
google.maps.event.addDomListener(window, 'load', initialize);