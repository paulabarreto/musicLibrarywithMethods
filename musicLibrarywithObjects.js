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
             },
  printPlaylists: function(){
    var result = "";
    for(var p in this.playlists){
      var name = this.playlists[p].name;
      var number = this.playlists[p].tracks.length;
      result += p + ": " + name + " - " + number + " tracks";
      result += "\n";
    }
    return result;
  },
  printTracks: function() {
    var result = "";
    for(var t in this.tracks){
      var name = this.tracks[t].name;
      var artist = this.tracks[t].artist;
      var album = this.tracks[t].album;
      result += t + ": " + name + " by " + artist + " ("+album+")";
      result += "\n";
    }
    return result;
  },
  printPlaylist: function (playlistId) {
    var result = "";
    var name = this.playlists[playlistId].name;
    var number = this.playlists[playlistId].tracks.length;
    result += playlistId + ": " + name + " - " + number + " tracks";

    for(var i = 0; i < number; i++){
      var track = this.playlists[playlistId].tracks[i];
      var trackName = this.tracks[track].name;
      var artist = this.tracks[track].artist;
      var album = this.tracks[track].album;
      result += "\n" + track + ": " + trackName + " by " + artist + " (" + album + ")";
    }
    return result;
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    return this.playlists[playlistId];
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var id = this.uid();
    return this.tracks[id] = {id: id, name: name, artist: artist, album: album};
  },
  addPlaylist: function (name) {
    var id = this.uid();
    return this.playlists[id] = {id: id, name: name, tracks: [this.tracks.t01]};
  }

}
//console.log(library.printPlaylists());
//console.log(library.printTracks());
//console.log(library.printPlaylist(library.playlists.p01.id));
//console.log(library.addTrackToPlaylist(library.tracks.t01.id, library.playlists.p02.id));

// library.addTrack("Warning", "Greenday", "Live");
// console.log(library);

// library.addPlaylist("Relaxing Playlist");
// console.log(library);
