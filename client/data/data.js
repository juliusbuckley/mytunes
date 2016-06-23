// data.js - Defines an array of data regarding song files and their accompanying details.
// var songData = [
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
//     title: 'One In A Million',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
//     title: 'Age Ain\'t Nothing But A Number',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
//     title: 'Hot Like Fire',
//     artist: 'Aaliyah',
//   },
//   {
//     url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
//     title: 'If Your Girl Only Knew',
//     artist: 'Aaliyah',
//   }
// ];

var songApp = {};

songApp.server = 'https://api.parse.com/1/classes/songs/';

songApp.init = function() {
  this.fetch();
};

songApp.songArray;


songApp.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'GET',
    contentType: 'songApplication/json',
    success: data => {
      console.log('mytunes: Successfully connected to server');
      var message = data.results;
      songApp.songArray = message;
      console.log('new', songApp.songArray);
    },
    error: data => {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};
songApp.fetch();
console.log(songApp.songArray);