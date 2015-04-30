var HTMLheaderFName = "<h1 id='name' class='first-name'>%data%</h1>";
var HTMLheaderLName = "<h1 id='name' class='last-name'>%data%</h1>";
var HTMLheaderRole = "<h2>%data%</h2>";
var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<div class='welcome-message'>%data%</div>";

var HTMLmobile = "<li class='contact-item'><span class='glyphicon glyphicon-earphone'></span>%data%</li>";
var HTMLemail = "<li class='contact-item'><span class='glyphicon glyphicon-envelope'></span>%data%</li>";
var HTMLtwitter = "<li class='contact-item'><span class='bt-icon icon-twitter'></span>%data%</li>";
var HTMLgithub = "<li class='contact-item'><span class='bt-icon icon-github'></span>%data%</li>";
var HTMLlocation = "<li class='contact-item'><span class='glyphicon glyphicon-map-marker'></span>%data%</li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<span class='entry-name'>%data%</span>";
var HTMLworkTitle = "<div class='entry-title'>%data%</div>";
var HTMLworkDates = "<div class='entry-date'>%data%</div>";
var HTMLworkLocation = "<span class='entry-location'> - %data%</span>";
var HTMLworkDescription = "<p>%data%</p>";

var HTMLprojectStart = "<div class='project-entry col-md-4 text-center'></div>";
var HTMLprojectTitle = "<div class='entry-title'>%data%</div>";
var HTMLprojectDates = "<span class='entry-date'>%data%</div>";
var HTMLprojectDescription = "<p>%data%</p>";
var HTMLprojectImage = "<img src='%data%'>";
var HTMLprojectDemo = "<a href='#' class='btn btn-info' role='button'>Demo</a>";
var HTMLprojectGithub = "<a href='#' class='btn btn-info' role='button'>Github</a>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<span class='entry-name'><a href='#'>%data%</a></span>";
var HTMLschoolDegree = " %data%";
var HTMLschoolDates = "<div class='entry-date'>%data%</span>";
var HTMLschoolLocation = "<span class='entry-location'> - %data%</div>";
var HTMLschoolMajor = "<div><em>%data%</em></div>"

var HTMLonlineClasses = "<h3><span class='glyphicon glyphicon-headphones'></span>Online Classes</h3>";
var HTMLonlineTitle = "<div><em>%data%</em></div>";
var HTMLonlineSchool = "<span class='entry-name'>%data%</span>";
var HTMLonlineDates = "<div class='entry-date'>%data%</div>";
var HTMLonlineURL = "<a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";


$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
})


clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // click location info
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

var map;    // declares a global map variable

function initializeMap() {

  var locations;        

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    
    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // add markers to the map
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
  
};


// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});