//Grabs the tweets variables
var keys = require("./keys.js");

var Twitter = require('twitter');
var spotify = require('spotify');
var myTweets = function(){



var client = new Twitter(keys.twitterKeys);

var params = {screen_name: 'percyRicardito'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i=0;i<tweets.length; i++){
      console.log(tweets[i].created_at);
      console.log(' ');
      console.log(tweets[i].text);
    }

    }
  });

}

var spotifySong = function(songName){

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 console.log(data.tracks.items[0]);
    // Do something with 'data'
});
}
var pick = function(caseData,functionData) {
  switch (caseData) {
    case 'my-tweets':
    myTweets();
    break;
    case 'spotify':
    spotifySong(functionData);
    break;
    default: console.log('LIRI does not recognize command')
  }
};

var startSearch = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

startSearch(process.argv[2], process.argv[3]);


// switch (userinput) {
//   case "my-tweets":
//   showtweets();
//   break;
// }
