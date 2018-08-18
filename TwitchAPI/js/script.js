

    $(document).ready(function(){
        $('#all').hide();
        $('#online').hide();
        $('#offline').hide();
    
        $('#tab-1').click(function(){
            $('#all').show();
            $('#online').hide();
            $('#offline').hide();
        });
        $('#tab-2').click(function(){
            $('#all').hide();
            $('#online').show();
            $('#offline').hide();
        });
        $('#tab-3').click(function(){
            $('#all').hide();
            $('#online').hide();
            $('#offline').show();
        });
      //List of freecodecamp users
      var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
      var game, status, logo, name, description;
      //Get the url of each channel streaming
     /* $.each(channels, function(channel){
          var singleStream = "https://wind-bow.gomix.me/twitch-api/streams"+ "/" + channel;
       
       //Return the name and status of each streams
       $.getJSON(singleStream, function(data){
            if(data.stream == null){
                game = "offline";
                status = "offline";
            }
         else if(data.stream == undefined){
                game = "Account closed";
                status = "offline";
         }
         else{
                game = data.stream.game;
                status = "online";
         }
       });
      }); */
    //   channels.map((channel)=>{
    //     var singleStream = "https://wind-bow.gomix.me/twitch-api/streams"+ "/" + channel + '?callback=?';
       
    //     //Return the name and status of each streams
    //     $.getJSON(singleStream, function(data){
    //          if(data.stream == null){
    //              game = "offline";
    //              status = "offline";
    //          }
    //       else if(data.stream == undefined){
    //              game = "Account closed";
    //              status = "offline";
    //       }
    //       else{
    //              game = data.stream.game;
    //              status = "online";
    //       }
    //     });
    //   });
      
      //Get the url of each channel
    /*   $.each(channels, function(channel){
                var singleChannel = "https://wind-bow.gomix.me/twitch-api/channels" + "/" + channel + '?callback=?';
       //Return the data of each channel
        $.getJSON(singleChannel, function(data){
                logo = data.logo;
                name = data.display_name;
                description = data.status;
        });
      });  */

      channels.map((channel) => {
        var singleChannel = "https://wind-bow.gomix.me/twitch-api/channels" + "/" + channel + '?callback=?';
        var singleStream = "https://wind-bow.gomix.me/twitch-api/streams"+ "/" + channel + '?callback=?';
       
        //Return the name and status of each streams
        $.getJSON(singleStream, function(data){
             if(data.stream == null){
                 game = "offline";
                 status = "offline";
             }
          else if(data.stream == undefined){
                 game = "Account closed";
                 status = "offline";
          }
          else{
                 game = data.stream.game;
                 status = "online";
          }
          
          var display =  "<span>" + name + "</span>" +
          "<span>" + status + "</span>" + "<span>" + game + "</span>"+
          "<span>" + description + "</span></div>";
         $('#all').html(display);
        });
        //Return the data of each channel
         $.getJSON(singleChannel, function(data){
                 logo = data.logo;
                 name = data.display_name;
                 description = data.status;
                console.log(name);
                console.log(status);
         });
      });
      
    });