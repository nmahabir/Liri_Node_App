var request = require("request");
var dotenv = require("dotenv").config();
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var key = require("./key.js");

var arrayOfInputs = [];

for (var i = 2; i < process.argv.length; i++) {
  arrayOfInputs.push(process.argv[i]);
}

var spotify = new Spotify(key.spotify);
var client = new Twitter(key.twitter);

var movie = "";
for (var i = 1; i < arrayOfInputs.length; i++) {
  if (i > 1 && i < arrayOfInputs.length) {
    movie = movie + "+" + arrayOfInputs[i];
  } else {
    movie += arrayOfInputs[i];
  }
}
var queryURL =
  "http://www.omdbapi.com/?t=" +
  movie +
  "&y=&plot=short&apikey=" +
  process.env.OMDB_API;

function argv(argvArray) {
  switch (argvArray[0]) {
    case "my-tweets":
      console.log(argvArray[0]);
      return argvArray[0];
    case "spotify-this-song":
      if (argvArray[1] === undefined) {
        argvArray.push("Sunrise");
        return argvArray[1];
      }
      return argvArray[1];
    case "movie-this":
      if (argvArray[1] === undefined) {
        argvArray.push("Mr. Nobody");
        return argvArray[[1]];
      }
      argvArray.shift();

    // next case comes here
  }
}
console.log(arrayOfInputs);
argv(arrayOfInputs);
console.log(arrayOfInputs);

function spotifyThis() {
  spotify.search(
    { type: "track", query: arrayOfInputs[1], limit: 20 },
    function(err, data) {
      if (!err) {
        // for (var i = 0; i++; data.tracks.items.length) {
        //   if (song === data.tracks.items[i].name) {
        var album = data.tracks.items[0].album.name;
        var artist = data.tracks.items[0].artists[0].name;
        var title = data.tracks.items[0].name;
        var preview = data.tracks.items[0].preview_url;
        return console.log(
          "Song Title: " +
            title +
            " Artist(s): " +
            artist +
            " Album: " +
            album +
            " Preview Link: " +
            preview
        );
      }
      //   }
      // }
    }
  );
}
// spotifyThis();

function omdb() {
  request(queryURL, function(err, res, data) {
    if (!err && res.statusCode === 200) {
      // console.log(JSON.parse(data));
      var movieTitle = JSON.parse(data).Title;
      console.log(movieTitle);
      var releaseYear = JSON.parse(data).Year;
      var imdb = JSON.parse(data).imdbRating;
      var rottenTomatoes = JSON.parse(data).Ratings[1].Value;
      var moviePlot = JSON.parse(data).Plot;

      var movieLanguage = JSON.parse(data).Language;
      var location = JSON.parse(data).Country;
      var movieActors = JSON.parse(data).Actors;
      console.log(
        "Movie Title: " +
          movieTitle +
          "Release Year: " +
          releaseYear +
          "IMDB Rating: " +
          imdb +
          "Rotten Tomatoes Rating: " +
          rottenTomatoes +
          "Plot: " +
          moviePlot +
          "Language: " +
          movieLanguage +
          "Location: " +
          location +
          "Actors: " +
          movieActors
      );
    }
  });
}
omdb();

// function notepad()

// function twitter()

// try to avoid lots of code in the body of the switch, instead run a function eg. return twitter() (where twitter etc are defined functions)
// create a function that can take in the arg[v] so that the switch can use the single response from this function

// Twitter API

// Read docs
// Use the get request for this assignment
// loop thru the responses versus hard coding them
