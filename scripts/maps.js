function getGoogleAPIKey()  {
    const { GOOGLE_API_KEY } = process.env
 
    // if (length(GOOGLE_API_KEY) == 0) {
        console.log(GOOGLE_API_KEY)
    // }

    return GOOGLE_API_KEY
}

function initMap() {
    const mapOptions = {
      center: { lat: 51.5074, lng: -0.1278 },
      zoom: 14,
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
      position: { lat: 51.5074, lng: -0.1278 },
      map: map,
      title: "Your Location",
    });
}

// Load Google Maps API
function loadMapScript() {
    const apiKey = getGoogleAPIKey(); // Replace with your API key
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}


// Call the function to load the Google Maps script
loadMapScript();