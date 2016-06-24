// Songs.js - Defines a backbone collection class for songs.


var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(data) {
    return data.results;
  },

  initialize: function() {
    this.fetch();
      // 'where={"title": ""
    
    $('#submit').on('click', function() {
      var songName = $('#title').val();
      this.fetch(
        {data: `where={"title":{"$regex":"${songName}","$options":"i"}}`}

      );
    }.bind(this));

  }

});