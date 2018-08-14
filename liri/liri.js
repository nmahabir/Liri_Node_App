var request = require("dotenv").config();
var key = require("./key.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var input1 = process.argv[2];
var input2 = process.argv[3];
// console.log(process.argv);
