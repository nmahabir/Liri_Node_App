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
  case "spotify-this-song":
    spotify.search({ type: "track", query: input2 }, function(err, data) {
      if (err) {
        return console.log("Spotify Error: " + err);
      } else console.log(data);
    });
}
