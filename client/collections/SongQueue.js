// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      console.log('made it here');
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(songModel) {
      this.remove(songModel);
    });

  },

  playFirst: function() {
    this.at(0).play();
  },


});