
function getStreamersInfo(){
    //List of freecodecamp users
   var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
   
   channels.map( (channel) =>{
       var channelUrl = "https://wind-bow.gomix.me/twitch-api/channels" + "/" + channel + '?callback=?';
       var streamUrl = "https://wind-bow.gomix.me/twitch-api/streams"+ "/" + channel + '?callback=?';
       
        //Return the name and status of each streams
        $.getJSON(channelUrl, function(dat){
            var logo, name, description,url;
            logo = dat.logo;
            name = dat.display_name;
            description = dat.status;
            url = dat.url;

             //Return the display name, status and logo
            $.getJSON(streamUrl, function(data){
                var game, status;
            if(data.stream == null){
                game = "offline";
                status = "offline";
                displayData(name, game, logo,status, description, url);
            }
            else if(data.stream == undefined){
                game = "Account closed";
                status = "offline";
                displayData(name, game, logo,status, description, url);
            }
            else{
                game = data.stream.game;
                status = "online";
                displayData(name, game, logo,status, description, url);
            }

            });
        });  
    });
}

function displayData(name, game, logo,status, description, url){
    var display = `
    <div>
        <a href="${url}" target="_blank">
            <img src="${logo}">
            <span>${status}</span>
            <span>${game}</span>
            <span>${description}
        </a>
    </div>
`
$('#result').html(display);
console.log(name);
}

$(document).ready(function(){
    getStreamersInfo();  
});
