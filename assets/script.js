// Variables 


var city = "Charlotte" //replace with input

var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=510c18f533b70331cb4fe3a2dca04f26"



// Ajax code
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    console.log(response)



})