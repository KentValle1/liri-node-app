# L.I.R.I BOT
LIRI is basically a text version of siri (in early form). While SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI takes in commands from the node lines and returns different outputs based on the inputs of questions that the user uses. 




## Installations.
1. git clone 
2. Open liri.js in Visual Studio Code
3. Control ~  to open terminal 
4. In terminal, Navigate to the folder, or if in vs code, right click on the deepest folder and click "open in terminal"
5. npm install



### What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")
     
     
 2. `node liri.js spotify-this '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

      * If the user doesn't type a movie in, the program will output data for the movie 'Toy Story'

      * If you haven't watched "Toy Story" then you should: 
   
   4. `node liri.js do-what-it-says`

       * It should run `spotify-this` for "Total Eclipse of the Heart" as follows the text in `random.txt`.


### Technologies Used:
1. DotEnv
2. Moment
3. Colors
4. Axios
5. Fs
6. npm Spotify API
7. npm Bandsintown API
8. npm OMDB API




## Authors

* **Kent T Valle -


## Acknowledgments

* Thank you to Google for the help,
* Thank you coffee for keeping me focused.
* Thank you babe, for understanding my random fits of rage on the computer.

