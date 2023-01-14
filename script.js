function getIPLocation() {
    var ip = document.querySelector("#ip-input").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://ip-api.com/json/" + ip, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var locationInfo = document.querySelector("#location-info");
            locationInfo.innerHTML = "IP: " + response.query + "<br>Status: " + response.status + "<br>Land: " + response.country + "<br>Landekode: " + response.countryCode + "<br>Region: " + response.region + "<br>Region navn: " + response.regionName + "<br>By: " + response.city + "<br>Postnummer: " + response.zip + "<br>Breddegrad: " + response.lat + "<br>Længdegrad: " + response.lon + "<br>Tidszone: " + response.timezone + "<br>Internetudbyder: " + response.isp + "<br>Organisation: " + response.org + "<br>AS: " + response.as;
            locationInfo.style.display = "block";
        }
    };
    xhr.send();
}
