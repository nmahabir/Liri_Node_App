var request = require("request");
var dotenv = require("dotenv").config();
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var key = require("./key.js");

var input1 = process.argv[2];
var input2 = process.argv[3];
var arrayOfInputs = [input1, input2];

// console.log(process.env.OMDB_API);

var spotify = new Spotify(key.spotify);
var client = new Twitter(key.twitter);
var queryURL =
  "http://www.omdbapi.com/?t=" +
  input2 +
  "&y=&plot=short&apikey=" +
  process.env.OMDB_API;

function argv(argvArray) {
  switch (argvArray) {
    case argvArray[1] === "my-tweets":
      console.log(argvArray[1]);
      return argvArray[1] + console.log(argvArray[1]);
    case argvArray[1] === "spotify-this-song":
      if (argvArray[2] !== undefined) {
        return argvArray[2] + console.log(argvArray[2]);
      }
      return argvArray.push("Sunrise") + console.log("Sunrise");
    // next case comes here
  }
}
console.log(arrayOfInputs);
// argv(arrayOfInputs);

function spotifyThis(song) {
  spotify.search({ type: "track", query: song, limit: 20 }, function(
    err,
    data
  ) {
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
  });
}

// spotify.search({ type: "track", query: "sunrise", limit: 20 }, function(
//   err,
//   data
// ) {
//   if (!err) {
//     console.log(data);
//   }
// });
console.log("AOI: " + arrayOfInputs[2]);
spotifyThis(arrayOfInputs[2]);

// function omdb()

// function notepad()

// function twitter()

// try to avoid lots of code in the body of the switch, instead run a function eg. return twitter() (where twitter etc are defined functions)
// create a function that can take in the arg[v] so that the switch can use the single response from this function

// Twitter API

// Read docs
// Use the get request for this assignment
// loop thru the responses versus hard coding them

// switch (process.argv) {
//   case "spotify-this-song" && input2 !== undefined:
//     spotify.search({ type: "track", query: input2 }, function(err, data) {
//       if (err) {
//         return console.log("Spotify Error: " + err);
//       } else {
//         // console.log(data.tracks.items[1]);
//         // Returns the data for the first result
//         var album = data.tracks.items[1].album.name;
//         var artist = data.tracks.items[1].artists[0].name;
//         var title = data.tracks.items[1].name;
//         var preview = data.tracks.items[1].preview_url;
//         return console.log(
//           "Song Title: " +
//             title +
//             " Artist(s): " +
//             artist +
//             " Album: " +
//             album +
//             " Preview Link: " +
//             preview
//         );
//       }
//     });

//   case "spotify-this-song":
//     spotify.search({ type: "track", query: "Ace of Base" }, function(
//       err,
//       data
//     ) {
//       if (err) {
//         return console.log("Spotify Error: " + err);
//       } else {
//         // console.log(data.tracks.items[1]);
//         // Returns the data for the first result
//         var album = data.tracks.items[1].album.name;
//         var artist = data.tracks.items[1].artists[0].name;
//         var title = data.tracks.items[1].name;
//         var preview = data.tracks.items[1].preview_url;
//         return console.log(
//           "Song Title: " +
//             title +
//             " Artist(s): " +
//             artist +
//             " Album: " +
//             album +
//             " Preview Link: " +
//             preview
//         );
//       }
//     });
// }
