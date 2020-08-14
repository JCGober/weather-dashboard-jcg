// General Variables 

var searchBtn = $("#searchBtn")

var input = $("#input")

var cityButtonArea = $("#cityBtn")

var displayCurrent = $("#displayCurrent")

var displayForecast = $("#displayForecast")

var city = "Charlotte"
 
var queryURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=510c18f533b70331cb4fe3a2dca04f26"



// Ajax code 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    console.log(response)

    searchBtn.on("click", function(){
        displayForecast.empty()

        city = input.val()

        queryURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=510c18f533b70331cb4fe3a2dca04f26"

        //Add Button

        var newButton= $("<button>")

        newButton.html(city)

        cityButtonArea.append(newButton)

        $("#cityCur").text("City: " + city)
        $("#tempCur").text("Temp: " + Math.round(((response.list[0].main.temp) - 273.15)*(1.8)+32))
        $("#humCur").text("Humidity: " + response.list[0].main.humidity)
        $("#windCur").text("Wind Speed: " + response.list[0].wind.speed)


       
       
        console.log("Humidity: " + response.list[0].main.humidity)
        console.log("Wind Speed: " + response.list[0].wind.speed)

        // for loop to run through and append forecasts 
        for(var i = 1; i<5; i++){

            var forcast = ["blank", "Tomorrow:", "Next Day:", "Next Day:", "Next Day:"]
    
            var tempF = Math.round(((response.list[i].main.temp) - 273.15)*(1.8)+32)
    
            var humidity = response.list[i].main.humidity
    
            var windSpeed = response.list[i].wind.speed

            var forecastDiv = $("<div>")

            forecastDiv.html("<h1>" +forcast[i] + "</h1><h3>Temperature: " + tempF+ "</h3><h3>humidity: " + humidity + "</h3><h3>Wind Speed: " + windSpeed + " MPH </h3>")

            displayForecast.append(forecastDiv)
        }
    })

}) 


