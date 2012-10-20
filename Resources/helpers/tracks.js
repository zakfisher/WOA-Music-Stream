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
   buildTrackList : function(window) {
      // Fetch Track Data & Cache
      var compileTrackList = function(tracks) {

         // Cache Track List
         MS.Helpers.Cache.setTrackList(tracks);

         // Create Labels (with embedded track data)
         var trackLabels = [];
         for (var i in tracks) {
            var track = tracks[i];
            var top = ((i * 10) + 30) + '%';
            var label = MS.Helpers.Elements.label(track.title, top, '10%');
            label.index = i;
            for (var key in track) { label[key] = track[key]; }
            label.addEventListener('click', function() {
               MS.Helpers.Cache.setCurrentTrack(MS.Cache.TrackList[this.index]);
               MS.Helpers.Navigation.showSingleTrackScreen();
            });
            trackLabels.push(label);
         }

         // Add Tracks to Track List Window
         MS.Helpers.Elements.addToWindow(trackLabels, window);
      };
      MS.Helpers.Network.createRequest('http://www.worldofanarchy.com/dev/music/all_tracks', compileTrackList);
   },
   makeTrack : function(url) {
      return Titanium.Media.createAudioPlayer({url:url});
   },
   startTrack : function() {
      MS.Cache.CurrentTrack.start();
   },
   stopTrack : function() {
      MS.Cache.CurrentTrack.stop();
   },
   pauseTrack : function() {
      MS.Cache.CurrentTrack.pause();
   }
};