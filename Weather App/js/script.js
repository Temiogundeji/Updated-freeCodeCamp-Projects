
function getPositionData(){
    navigator.geolocation.getCurrentPosition(function(position){
      var  lat =position.coords.latitude;
      var lon = position.coords.longitude;
      var key = "01520bebcffa5f7a296592052b579efc";
      var url = " https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast"+"/"+key+"/"+lat+","+lon;
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'json';
      request.onload = function(){
        var data = request.response;
        let icon = data.currently.icon;
                let time = data.currently.time;
                let temperature =data.currently.temperature;
                let humidity = data.currently.humidity;
                let pressure = data.currently.pressure;
                let summary = data.currently.summary;
                $('#icon').text(icon);
                $('#time').text(time);
                $('#temperature').text(temperature);
                $('#humidity').text(humidity);
                $('#pressure').text(pressure);
                $('#summary').text(summary);

        // data = data.parse();
    //    var icon =  document.getElementById('#icon');
    //     icon.innerHtml(data.currently.icon);
    //     var temperature = document.getElementById("temperature");
    //     temperature.innerHtml(data.currently.temperature);
    //     console.log(data.currently.temperature);
      }
      
      request.onerror = function(){
        console.log(error);
      }
      
      request.send();
    })
  }
  getPositionData();