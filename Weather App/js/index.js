$(document).ready(function(){
  
  //Call the skycons API
     var skycons  = new Skycons({"color": "pink"});
   var  tempText = document.querySelector('span').innerHTML;
  var button = document.querySelector('button').innerHTML;
   var tempNumber = Number(tempText);
    var fahren, celsius;
 
 //Convert to fahrenheit
 function toFahrenheit(celsius){   
   fahren =  32+(celsius*9/5);
    document.querySelector('span').innerHTML = fahren;
  }
 
 //Convert to celsius
 function toCelsius(fahrenheit){
    celsius = tempNumber;
    // button.innerHTML = "&#8451;";
    document.querySelector('span').innerHTML = celsius;
  }
 
  function getPositionData(){
    navigator.geolocation.getCurrentPosition(function(position){
      var  lat =position.coords.latitude;
      var lon = position.coords.longitude;
      var key = "01520bebcffa5f7a296592052b579efc";
      var unit = "?units=si";
      var url = " https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast"+"/"+key+"/"+lat+","+lon+unit;
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'json';
      request.onload = function(){
        var data = request.response;
                let temperature = data.currently.temperature;
                temperature = temperature.toFixed(0);
                let summary = data.currently.summary;
                let location  = data.timezone;
                
                skycons.add(document.getElementById("icon1"), data.currently.icon);
        skycons.play();
                $('#time').text(new Date());
                $('#temperature').text(temperature);
       $('#summary').text(summary);
        $('#location').text("Weather Forecast for:" +"  "+ location);  
       
      //When user releases their hand from the temperature conversion button
       $('button').on('mouseup', function(){
         tempNumber = temperature;
       $(' button').html("&#8451;");
           toCelsius(temperature);
       });
       
       //When user click on the temperature unit button to convert to fahrenheit
      $('button').on('mousedown', function(){
         $('button').html("&#8457;");
           toFahrenheit(temperature);
       });
       
      }
      
      request.onerror = function(error){
        console.log(error);
      }
      
      request.send();
    })
  }
  getPositionData();
});