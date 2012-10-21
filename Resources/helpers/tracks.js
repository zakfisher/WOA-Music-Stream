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

      var E  = MS.Helpers.Elements;
      var N  = MS.Helpers.Navigation;
      var C  = MS.Cache;
      var CH = MS.Helpers.Cache;
      var T  = MS.Helpers.Text;

      // Fetch New Data if Cache Doesn't Exist
      if (typeof C.TrackList == 'undefined') { refresh = true; }

      // Define List Item Creation Method
      var createListItems = function(trackList) {

         // Create Labels (with embedded track data)
         var tracklistItems = [];
         for (var i in trackList) {
            var track = trackList[i];
            var inverse = !(typeof C.CurrentTrackData != 'undefined' && track.id == C.CurrentTrackData.id);
            var labelColor = (typeof C.CurrentTrackData != 'undefined' && track.id == C.CurrentTrackData.id) ? '#eeeeee' : 'black';
            var labels = [
               E.label(T.ellipsis(track.title, 33), '10%', '5%', labelColor, 13, true),
               E.label(T.ellipsis(track.artist, 33), '35%', '5%', labelColor, 13),
               E.label(track.duration, '60%', '5%', labelColor, 13)
            ];

            var button = E.button((i * 60), labels, inverse);
            button.index = i;
            for (var key in track) { button[key] = track[key]; }
            button.addEventListener('click', function() {
               CH.setCurrentTrack(C.TrackList[this.index]);
               N.showSingleTrackScreen();
            });
            tracklistItems.push(button);
         }

         // Add Tracks to Track List Window
         listContainer.contentHeight = tracklistItems.length * 60;
         E.addElements(tracklistItems, listContainer);
      };

      // Issue HTTP Request, and Fetch New Data
      if (refresh) {

         // Add "Loading" to Window
         var loading = E.loading('Loading');
         listContainer.add(loading);
         loading.show();

         // Fetch Track Data & Cache
         var compileTrackList = function(tracks) {
            CH.setTrackList(tracks);
            listContainer.remove(loading);
            createListItems(tracks);
         };
         MS.Helpers.Network.createRequest('http://www.worldofanarchy.com/dev/music/all_tracks', compileTrackList);
      }

      // Use Cached Data
      else { createListItems(C.TrackList); }
   },
   makeTrack : function(url) {
      return Titanium.Media.createAudioPlayer({url:url});
   },
   autoplayTrack : function() {
      var T = MS.Helpers.Tracks;
      if (Android) { setTimeout(T.startTrack, 100); }
      else { T.startTrack(); }
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