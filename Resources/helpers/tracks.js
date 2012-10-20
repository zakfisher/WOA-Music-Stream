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
   refreshTrackList : function(listContainer) {
      MS.Helpers.Tracks.buildTrackList(listContainer, true);
   },
   buildTrackList : function(listContainer, refresh) {

      /* ***********************************************************
       * If Track List is Cached, Repopulate List with Cached Data *
       * Otherwise, Refresh and Repopulate List with New Data      *
       *                                                           *
       *      Note: User Can Refresh the Track List Manually.      *
       *            [see refreshTrackList above]                   *
       * ********************************************************* */

      // Fetch New Data if Cache Doesn't Exist
      if (typeof MS.Cache.TrackList == 'undefined') { refresh = true; }

      // Define List Item Creation Method
      var createListItems = function(trackList) {

         // Create Labels (with embedded track data)
         var trackLabels = [];
         for (var i in trackList) {
            var track = trackList[i];
            var top = i * 40;
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
         listContainer.height = trackLabels.length * 40;
         MS.Helpers.Elements.addElements(trackLabels, listContainer);
      };

      // Issue HTTP Request, and Fetch New Data
      if (refresh) {

         // Fetch Track Data & Cache
         var compileTrackList = function(tracks) {
            MS.Helpers.Cache.setTrackList(tracks);
            createListItems(tracks);
         };
         MS.Helpers.Network.createRequest('http://www.worldofanarchy.com/dev/music/all_tracks', compileTrackList);
      }

      // Use Cached Data
      else { createListItems(MS.Cache.TrackList); }
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