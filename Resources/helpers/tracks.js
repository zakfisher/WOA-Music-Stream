/**
 * Tracks Helper Class
 * ------------------------------------------
 * Methods for building, caching, and
 * displaying tracks
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Tracks = {
   buildTrackList : function() {
      // Fetch Track Data & Cache
      //MS.Helpers.Network.createRequest('http://www.zfidesign.com/test/test/abc', function(json) { console.log(json); });
      var tracks = [
         {
            id : 1,
            artist : 'Skrillex',
            title    : 'Random Mix',
            length : '60min',
            url    : 'http://www.worldofanarchy.com/_WOA/music/thismix.mp3'
         },
         {
            id : 2,
            artist : 'Other',
            title    : 'Something Awesome Mix',
            length : '60min',
            url    : 'http://www.worldofanarchy.com/_WOA/music/thismix.mp3'
         },
         {
            id : 3,
            artist : 'Halal',
            title    : 'Meat Party',
            length : '60min',
            url    : 'http://www.worldofanarchy.com/_WOA/music/thismix.mp3'
         }
      ];

      MS.Helpers.Cache.setTrackList(tracks);

      // Create Labels (with embedded track data)
      var trackLabels = [];
      for (var i = 0; i < tracks.length; i++) {
         var track = tracks[i];
         var top = ((i * 10) + 30) + '%';
         var label = MS.Helpers.ViewComponents.label(track.title, top, '10%');
         label.index = i;
         for (var key in track) { label[key] = track[key]; }
         label.addEventListener('click', function() {
            MS.Helpers.Cache.setCurrentTrack(MS.Cache.TrackList[this.index]);
            MS.Helpers.Navigation.showSingleTrackScreen();
         });
         trackLabels.push(label);
      }

      return trackLabels;
   }
};