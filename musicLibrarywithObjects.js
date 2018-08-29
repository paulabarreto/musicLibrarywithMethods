var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (library) {
  var result = "";
  for(var p in library.playlists){
    var name = library.playlists[p].name;
    var number = library.playlists[p].tracks.length;
    result += p + ": " + name + " - " + number + " tracks";
    result += "\n";
  }
  return result;
}
//console.log(printPlaylists(library));


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (library) {
  var result = "";
  for(var t in library.tracks){
    var name = library.tracks[t].name;
    var artist = library.tracks[t].artist;
    var album = library.tracks[t].album;
    result += t + ": " + name + " by " + artist + " ("+album+")";
    result += "\n";
  }
  return result;
}
//console.log(printTracks(library));


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var result = "";
  var name = library.playlists[playlistId].name;
  var number = library.playlists[playlistId].tracks.length;
  result += playlistId + ": " + name + " - " + number + " tracks";

  for(var i = 0; i < number; i++){
    var track = library.playlists[playlistId].tracks[i];
    var trackName = library.tracks[track].name;
    var artist = library.tracks[track].artist;
    var album = library.tracks[track].album;
    result += "\n" + track + ": " + trackName + " by " + artist + " (" + album + ")";
  }
  return result;
};
//console.log(printPlaylist(library.playlists.p01.id));

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  return library.playlists[playlistId];
}
// console.log(addTrackToPlaylist(library.tracks.t01.id, library.playlists.p02.id));


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


//adds a track to the library

var addTrack = function (name, artist, album) {
  var id = uid();
  return library.tracks[id] = {id: id, name: name, artist: artist, album: album};
}
addTrack("Warning", "Greenday", "Live");
// console.log(library);


// adds a playlist to the library

var addPlaylist = function (name) {
  var id = uid();
  return library.playlists[id] = {id: id, name: name, tracks: [library.tracks.t01]};
}
addPlaylist("Relaxing Playlist");
//console.log(library);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
