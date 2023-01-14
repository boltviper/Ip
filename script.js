function getIPLocation() {
    var ip = document.querySelector("#ip-input").value;
    var xhr = new XMLHttpRequest();
    var url = "https://ipapi.co/" + ip + "/json/";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var locationInfo = document.querySelector("#location-info");
            locationInfo.innerHTML = "IP: " + response.ip + "<br>" +
                                    "City: " + response.city + "<br>" +
                                    "Region: " + response.region + " " + response.region_code + "<br>" +
                                    "Country: " + response.country_name + " " + response.country_code + "<br>" +
                                
                                    "Country Capital: " + response.country_capital + "<br>" +
                                    
                                    "Continent Code: " + response.continent_code + "<br>" +
                                    "In EU: " + response.in_eu + "<br>" +
                                    "Postal Code: " + response.postal + "<br>" +
                                    "Latitude: " + response.latitude + "<br>" +
                                    "Longitude: " + response.longitude + "<br>" +
                                    "Timezone: " + response.timezone + " UTC Offset: " + response.utc_offset + "<br>" +
                                    "Country Calling Code: " + response.country_calling_code + "<br>" +
                                    "Currency: " + response.currency + " " + response.currency_name + "<br>" +
                                    "Languages: " + response.languages + "<br>" +
                                    "ASN: " + response.asn + "<br>" +
                                    "Organization: " + response.org;
            locationInfo.style.display = "block";
        }
    };
    xhr.send();
}

