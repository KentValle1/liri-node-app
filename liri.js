require("dotenv").config();

var fs = require('fs');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require('moment');

var action = process.argv[2];
var value = process.argv.splice(3,process.argv.length).join(' ');


switch (action){

case "howto":
    console.log("Please type one of these commands\n"+
    "'concert-this': to search your favorite artist concerts\n"+
    "'spotify-this-song': to search your favorite song\n"+
    "'movie-this': to search your favorite movie \n"+
    "'do-what-it-says': using command from random.txt \n"
    );

break; 

case "concert-this":
    concertThis();
    break;

case "spotify-this":
    spotifyThis();
    break;
case "movie-this":
    movieThis();
    break;
case "do-what-it-says":
    doWhat();
    break;
default:
  
    console.log("LIRI has not been trained with that command yet\n".underline.red+
    "--------------------------------------------------\n"+
    "Please type one of these commands\n"+
    "'concert-this': to search your favorite artist concerts\n"+
    "'spotify-this': to search your favorite song\n"+
    "'movie-this': to search your favorite movie \n"+
    "'do-what-it-says': using command from random.txt \n"+
    "--------------------------------------------------\n"
  );

};
function concertThis(action) {

    axios
    .get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
            .then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    console.log("Concert Venue: ".yellow+ response.data[i].venue.name);
                    console.log("Concert Location: ".yellow + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
                    console.log("Concert Time: ".yellow + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
                    console.log("\n--------------------------------------------------------------\n".rainbow);
                    
                   
                    fs.appendFileSync('log.txt', "\r\n" + "BANDSINTOWN LOG----------------------" + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Concert Venue:  " + response.data[i].venue.name + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Concert Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Concert Time: " + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A') + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------------"+ "\r\n", 'utf8');
                }
            }
    );

};         
function spotifyThis(action) {

    var song = value;
    if (!song) {
        song = "the sign Ace of Base" 
        } 
    spotify.search({ type: 'track', query: value }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      
      console.log("\n--------------------------------------------------------------\n".blue);
      console.log("Song Name: ".blue + data.tracks.items[0].name);
      console.log("Artist(s) Name: ".blue+ data.tracks.items[0].artists[0].name);
      console.log("Album Name: ".blue+ data.tracks.items[0].album.name);
      console.log("Preview Link: ".blue+ data.tracks.items[0].preview_url);
      console.log("\n--------------------------------------------------------------\n".blue);
      //adds text to log.txt
      fs.appendFileSync('log.txt', "\r\n" + "SPOTIFY LOG ---------------------------------------"+ "\r\n", 'utf8');
      fs.appendFileSync('log.txt', "\r\n" + "Song Name: " + data.tracks.items[0].name + "\r\n", 'utf8' );
      fs.appendFileSync('log.txt', "\r\n" + "Artist(s) Name: " + data.tracks.items[0].artists[0].name + "\r\n", 'utf8');
      fs.appendFileSync('log.txt', "\r\n" + "Album Name: " + data.tracks.items[0].album.name+ "\r\n", 'utf8');
      fs.appendFileSync('log.txt', "\r\n" + "Preview Link: " + data.tracks.items[0].preview_url + "\r\n", 'utf8' );
      fs.appendFileSync('log.txt', "\r\n" + "-------------------------------------------------------"+ "\r\n", 'utf8');
    });
};
   function movieThis(action){
          var movie = value;
          if (!movie) {
              console.log("If you haven't watched 'Toy Story' then you should!")
              movie = "Toy Story"
          }
          var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
          axios.get(url).then(
              function (response) {
                  
                      console.log("======================================================\n")
                      console.log("Movie Title: ".red + response.data.Title);
                      console.log("Year: ".red + response.data.Year);
                      console.log("IMDB Rating: ".red + response.data.imdbRating);
                      console.log("Rotten Tomatoes: ".red + response.data.Ratings[1].Value);
                      console.log("Country: ".red + response.data.Country);
                      console.log("Language: ".red + response.data.Language);
                      console.log("Plot: ".red + response.data.Plot);
                      console.log("Actors: ".red + response.data.Actors);
                      console.log("======================================================\n")
                    
                    
                    fs.appendFileSync('log.txt', "\r\n" + "MOVIE LOG----------------------" + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Year: " + response.data.Year + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "IMDB Rating: " + response.data.imdbRating + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Rotten Tomatoes: " + response.data.Ratings[1].Value + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Country: " + response.data.Country + "\r\n", 'utf8');                
                    fs.appendFileSync('log.txt', "\r\n" + "Language: " + response.data.Language + "\r\n", 'utf8');                
                    fs.appendFileSync('log.txt', "\r\n" + "Plot: " + response.data.Plot + "\r\n", 'utf8');                
                    fs.appendFileSync('log.txt', "\r\n" + "Year: " + response.data.Year + "\r\n", 'utf8');                
                    fs.appendFileSync('log.txt', "\r\n" + "Actors: " + response.data.Actors + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------------"+ "\r\n", 'utf8');
                });
            };

function doWhat() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        
        if (error) {
            return console.log(error);
        }
    
        var dataArr = data.split(",");

        action = dataArr[0];
        value = dataArr[1];
        if (action === "spotify-this"){
            spotifyThis();
        } else if (action === "concert-this") {
            concertThis();
        }
         else if (action === "movie-this") {
            movieThis();
        } 
    });  

};
