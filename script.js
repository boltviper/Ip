function getIPLocation() {
    var ip = document.querySelector("#ip-input").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipgeolocation.io/ipgeo?apiKey=df967657ac164e8a9aba9b132c64b606&ip=" + ip, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var locationInfo = document.querySelector("#location-info");
            locationInfo.innerHTML = "City: " + response.city + "<br>Region: " + response.region + "<br>Country: " + response.country_name + "<br>Postal Code: " + response.zipcode + "<br>Latitude: " + response.latitude + "<br>Longitude: " + response.longitude + "<br>isp: " + response.location;
            locationInfo.style.display = "block";
        }
    };
    xhr.send();
  }

