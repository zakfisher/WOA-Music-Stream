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
       * ********************************************************* */

      // Fetch New Data if Cache Doesn't Exist
      if (typeof MS.Cache.TrackList == 'undefined') { refresh = true; }

      // Issue HTTP Request, and Fetch New Data
      if (refresh) {

         // Fetch Track Data & Cache
         var compileTrackList = function(tracks) {

            // Cache Track List
            MS.Helpers.Cache.setTrackList(tracks);

            // Create Labels (with embedded track data)
            var trackLabels = [];
            for (var i in tracks) {
               var track = tracks[i];
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
         MS.Helpers.Network.createRequest('http://www.worldofanarchy.com/dev/music/all_tracks', compileTrackList);
      }

      // Use Cached Data
      else {

         // Create Labels (with embedded track data)
         var trackLabels = [];
         for (var i in MS.Cache.TrackList) {
            var track = MS.Cache.TrackList[i];
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
      }
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