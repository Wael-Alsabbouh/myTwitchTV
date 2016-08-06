$(document).ready(function(){
    var streamers = [
    'freecodecamp', 'storbeck', 'terakilobyte', 'beohoff', 'RobotCaleb',
    'thomasballinger', 'noobs2ninjas', 'habathcx', 'riotgames', 'starladder1',
    'beyondthesummit', 'tsm_theoddone', 'Tsm_dyrus', 'esl_csgo', 'garenatw',
    'HiRezTV', 'smitegame', 'Nightblue3', 'nl_kripp', 'imaqtpie', 'esl_lol',
    'asiagodtonegg3be0', 'destructoid', 'sodapoppin', 'OGNGlobal', 'ongamenet',
    'joindotared', 'faceittv', 'taketv', 'versuta','Voyboy',
    'wingsofdeath', 'towelliee', 'TrumpSC', 'leveluplive', 'twitch', 'itshafu',
    'dotastarladder_en', 'riotgamesturkish', 'twitchplayspokemon',
    'aces_tv', 'gamespot', 'sc2proleague', 'SirhcEz', 'totalbiscuit', 'mlgsc2',
    'scarra', 'RocketBeansTV', 'lethalfrag', 'dendi', 'wcs_america', 'mlglol',
    'defrancogames', 'shadbasemurdertv', 'yogscast', 'Imt_wildturtle', 'magic',
    'streamerhouse', 'dhingameclient', 'wcs_europe', 'sing_sing', 'roomonfire',
    'onemoregametv', 'dreamleague', 'syndicate', 'saintvicious', 'brunofin','comster404'
];
    
    var streamUrl = 'https://api.twitch.tv/kraken/streams/';
    
        streamers.forEach(function (channels){
            var streamURL= "https://api.twitch.tv/kraken/streams/" + channels + "";
            //console.log(streamURL);
        $.ajax({
           url:streamURL,
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(twitchData){
                var name,status;
                $(twitchData.stream).each(function(index, value){
                    //console.log(twitchData.stream);
                    if(twitchData.stream === null){
                        name = "not online";
                        status = "OFFLINE";
                        console.log(name + status);
                    }
                    else if(twitchData.stream === undefined){
                        name = "undefined1";
                        status = "undefined2";
                        console.log(name + status);
                    }
                    else{
                        name = "ONLINE" + twitchData.stream.game;
                        status = "ONLINE" ;
                        console.log(name + status);
                        }
                });
            var channelsURL = "https://api.twitch.tv/kraken/channels/" + channels + "";
            
            $.ajax({
                url:channelsURL,
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function(twitchData2){
                var img,dName;
                if(twitchData2.logo != null){
                img = twitchData2.logo;
                }else{img="http://2.bp.blogspot.com/-Gbn3dT1R9Yo/VPXSJ8lih_I/AAAAAAAALDQ/24wFWdfFvu4/s1600/sorry-image-not-available.png";}
                
               if(twitchData2.display_name != null ){dName=twitchData2.display_name}
               else{dName="unknown channel"}
                  
               var imgLink='<a href='+'"'+twitchData2.url+'"'+'target="_blank"'+'>'+'<img class="lg" src="' + img + '">'+'</a>';
                  
               var ch_url='<a href='+'"'+twitchData2.url+'"'+'target="_blank"'+'>'+dName+'</a>';
               $("#test").append('<div class="dataContainer">'+
                                 imgLink
                                 +'<br>'+dName+' | '+'<span>'+ name +'</span>'+'</div><hr>');
        }
               
               });
            } //End of Success    
        });  //End if ajax method
        }); //End of foreach call back function
    });
