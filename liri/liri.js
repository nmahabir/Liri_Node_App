var request = require("request");
var dotenv = require("dotenv").config();
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var key = require("./key.js");

var input1 = process.argv[2];
var input2 = process.argv[3];

var spotify = new Spotify(key.spotify);
var client = new Twitter(key.twitter);
var queryURL =
  "http://www.omdbapi.com/?t=" + input2 + "&y=&plot=short&apikey=trilogy";

switch (input1) {
  case "spotify-this-song" && input2 !== undefined:
    spotify.search({ type: "track", query: input2 }, function(err, data) {
      if (err) {
        return console.log("Spotify Error: " + err);
      } else {
        // console.log(data.tracks.items[1]);
        // Returns the data for the first result
        var album = data.tracks.items[1].album.name;
        var artist = data.tracks.items[1].artists[0].name;
        var title = data.tracks.items[1].name;
        var preview = data.tracks.items[1].preview_url;
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
    });

  case "spotify-this-song":
    spotify.search({ type: "track", query: "Ace of Base" }, function(
      err,
      data
    ) {
      if (err) {
        return console.log("Spotify Error: " + err);
      } else {
        // console.log(data.tracks.items[1]);
        // Returns the data for the first result
        var album = data.tracks.items[1].album.name;
        var artist = data.tracks.items[1].artists[0].name;
        var title = data.tracks.items[1].name;
        var preview = data.tracks.items[1].preview_url;
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
    });
}
