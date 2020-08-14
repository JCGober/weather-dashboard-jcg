// General Variables 

var searchBtn = $("#searchBtn")

var input = $("#input")

var city ="Charlotte"

var queryURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=510c18f533b70331cb4fe3a2dca04f26"






// Ajax code 


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    console.log(response)
    
    for(var i = 0; i<5; i++){
        var tempF = Math.round(((response.list[i].main.temp) - 273.15)*(1.8)+32)
        tempF
    
        console.log(tempF)
    }

})



