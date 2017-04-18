//Grabs the tweets variables
var keys = require("./keys.js");

//Grabs user input from 2nd key
var userinput = process.argv[2]
var value = process.argv[3];
//grabs variables from the keys file

var Twitter = require('twitter');
var myTweets = 'my-tweets';
var spotify = 'spotify-this-song';
var whatmovie = 'movie-this';
var siri = 'do-what-it-says';

function showtweets() {

var client = new Twitter(keys);

var params = {screen_name: 'ablackdeveloper', count: 20};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i=0; i< tweets.length; i++){
     console.log("You Tweeted" + tweets[i].text);
    }

  }
});
}

switch (userinput) {
  case "my-tweets":
  showtweets();
  break;
}
