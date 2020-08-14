// General Variables 

var searchBtn = $("#searchBtn")

var input = $("#input")

var cityButtonArea = $("#cityBtn")

var city ="Charlotte"

var queryURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=510c18f533b70331cb4fe3a2dca04f26"






// Ajax code 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    console.log(response)

    searchBtn.on("click", function(){

        city = input.val()

        queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=510c18f533b70331cb4fe3a2dca04f26"

        var newButton= $("<button>")

        newButton.html(city)

        cityButtonArea.append(newButton)


        for(var i = 1; i<5; i++){
    
            var tempF = Math.round(((response.list[i].main.temp) - 273.15)*(1.8)+32)
    
            var humidity = response.list[i].main.humidity
    
            var windSpeed = response.list[i].wind.speed


    
            console.log(city)
            console.log("Temperature: " + tempF)
            console.log("humidity: " + humidity)
            console.log("Wind Speed: " + windSpeed + " MPH")
        }
    })

}) 


